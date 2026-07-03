-- Additional inbox channels for the marketing site's contact form (security, press),
-- beyond the extension's built-in defaults (default, support, sales, feedback).
insert into pgho_inbox.channels (name, description, settings) values
    ('security', 'Security disclosures', '{"rate_limit_max": 10, "spam_threshold": 70}'),
    ('press',    'Press & partnerships', '{"rate_limit_max": 10, "spam_threshold": 50}')
on conflict (name) do nothing;

-- Route each channel's queued notifications to the matching inbox address.
update pgho_inbox.channels set settings = settings || jsonb_build_object('notification_email', 'hello@COMING.SOON')    where name = 'default';
update pgho_inbox.channels set settings = settings || jsonb_build_object('notification_email', 'support@COMING.SOON')  where name = 'support';
update pgho_inbox.channels set settings = settings || jsonb_build_object('notification_email', 'sales@COMING.SOON')    where name = 'sales';
update pgho_inbox.channels set settings = settings || jsonb_build_object('notification_email', 'security@COMING.SOON') where name = 'security';
update pgho_inbox.channels set settings = settings || jsonb_build_object('notification_email', 'press@COMING.SOON')    where name = 'press';

-- Public-facing entry point for the website contact form.
--
-- pgho_inbox.submit() runs with invoker rights and pgho_inbox revokes all
-- privileges from PUBLIC by default, so anon/authenticated have no direct
-- access to its schema or tables. This wrapper is SECURITY DEFINER (owned by
-- the migration role, which owns the pgho_inbox extension) so it can call
-- submit() on the caller's behalf without granting anon anything beyond
-- EXECUTE on this one function. search_path is pinned and every reference is
-- schema-qualified to avoid search-path hijacking.
create or replace function public.contact_submit(
    p_name    text,
    p_email   text,
    p_body    text,
    p_channel text default 'default',
    p_phone   text default null,
    p_subject text default null
)
returns uuid
language plpgsql
security definer
set search_path = pg_catalog, pg_temp
as $$
declare
    v_headers    jsonb;
    v_source_ip  inet;
    v_user_agent text;
    v_message_id uuid;
begin
    begin
        v_headers := current_setting('request.headers', true)::jsonb;
    exception when others then
        v_headers := null;
    end;

    begin
        v_source_ip := nullif(trim(split_part(v_headers ->> 'x-forwarded-for', ',', 1)), '')::inet;
    exception when others then
        v_source_ip := null;
    end;

    v_user_agent := v_headers ->> 'user-agent';

    v_message_id := pgho_inbox.submit(
        p_name       => p_name,
        p_email      => p_email,
        p_body       => p_body,
        p_channel    => coalesce(nullif(trim(p_channel), ''), 'default'),
        p_phone      => p_phone,
        p_subject    => p_subject,
        p_metadata   => jsonb_build_object('source', 'website_contact_form'),
        p_source_ip  => v_source_ip,
        p_user_agent => v_user_agent
    );

    return v_message_id;
end;
$$;

revoke all on function public.contact_submit(text, text, text, text, text, text) from public;
grant execute on function public.contact_submit(text, text, text, text, text, text) to anon, authenticated;
