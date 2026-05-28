/** Bump when you replace public/images/logo.png so browsers fetch the new file */
export const LOGO_VERSION = "4";

export const LOGO_SRC = `/images/logo.png?v=${LOGO_VERSION}`;

/** Bump when favicon does not refresh after deploy (logo → public/favicon.png) */
export const FAVICON_VERSION = "4";

export const FAVICON_PNG = `/favicon.png?v=${FAVICON_VERSION}`;
export const APPLE_TOUCH_ICON = `/apple-touch-icon.png?v=${FAVICON_VERSION}`;
