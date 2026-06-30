export const DOMAIN = "COMING.SOON";

export const URLS = {
  api: `https://api.${DOMAIN}`,
  cdn: `https://cdn.${DOMAIN}`,
  status: `https://status.${DOMAIN}`,
  www: `https://${DOMAIN}`,
} as const;

export const HOSTNAMES = {
  status: `status.${DOMAIN}`,
} as const;

export const EMAIL = {
  hello: `hello@${DOMAIN}`,
  support: `support@${DOMAIN}`,
  security: `security@${DOMAIN}`,
  privacy: `privacy@${DOMAIN}`,
  press: `press@${DOMAIN}`,
} as const;
