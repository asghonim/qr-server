select dbdev.install('asghonim@pgho_inbox');
drop extension if exists "asghonim@pgho_inbox";
drop schema if exists pgho_inbox cascade;
create schema if not exists pgho_inbox;
create extension if not exists "asghonim@pgho_inbox" schema pgho_inbox version '0.0.3';