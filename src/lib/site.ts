/** Bump when you replace public/images/logo.png so browsers fetch the new file */
export const LOGO_VERSION = "5";

export const LOGO_SRC = `/images/logo.png?v=${LOGO_VERSION}`;

/** Bump when favicon does not refresh after deploy */
export const FAVICON_VERSION = "5";

/** Browsers request /favicon.ico first — must be a real .ico file in public/ and app/ */
export const FAVICON_ICO = `/favicon.ico?v=${FAVICON_VERSION}`;
export const FAVICON_PNG = `/favicon.png?v=${FAVICON_VERSION}`;
export const APPLE_TOUCH_ICON = `/apple-touch-icon.png?v=${FAVICON_VERSION}`;
