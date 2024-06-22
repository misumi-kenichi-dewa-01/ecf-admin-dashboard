const API_URL = `${"http://localhost:2121"}${"/"}api/`;
const REMOTE_ASSETS_BASE_URL = `https://flowbite-admin-dashboard.vercel.app`;
const SITE_TITLE = "Flowbite Astro Admin Dashboard";
const RANDOMIZE = Boolean({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "http://localhost:2121", "ASSETS_PREFIX": undefined}.RANDOMIZE) || true;

export { API_URL as A, REMOTE_ASSETS_BASE_URL as R, SITE_TITLE as S, RANDOMIZE as a };
