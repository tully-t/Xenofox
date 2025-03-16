/*** Theme ***/
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.anchor_color", "#aaaaac20");
user_pref("browser.anchor_color.dark", "#aaaaac20");
user_pref("browser.display.background_color", "#1a1a1a");
user_pref("browser.display.background_color.dark", "#1a1a1a");
user_pref("browser.display.foreground_color", "#bbbbbb");
user_pref("browser.display.foreground_color.dark", "#bbbbbb");
user_pref("browser.visited_color", "#8500ff");
user_pref("widget.content.allow-gtk-dark-theme", true);
user_pref("gnomeTheme.systemIcons", false);
user_pref("reader.color_scheme", "dark");
user_pref("browser.newtabpage.activity-stream.showSearch", false);
user_pref("layout.css.prefers-color-scheme.content-override", 0);
// user_pref("widget.gtk.rounded-bottom-corners.enabled", true);
// user_pref("widget.gtk.native-context-menus", true);


/*** Dark Reader enabled on restricted sites ***/
user_pref("extensions.webextensions.restrictedDomains", "");
user_pref("extensions.webextensions.addons-restricted-domains@mozilla.com.disabled", true);
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true);


/*** Conveniences ***/

/* KDE-specific */
// user_pref("widget.non-native-theme.enabled", true); /* scrollbars */
// user_pref("widget.use-xdg-desktop-portal.file-picker", 1);
// user_pref("widget.use-xdg-desktop-portal.location", 1);
// user_pref("widget.use-xdg-desktop-portal.mime-handler", 1);
// user_pref("widget.use-xdg-desktop-portal.open-uri", 1);
// user_pref("widget.use-xdg-desktop-portal.settings", 1);
// user_pref("widget.gtk.global-menu.enabled", true);
// user_pref("widget.gtk.global-menu.wayland.enabled", true);

/* Zoom Restriction */
user_pref("zoom.minPercent", 100);

/* Backspace to go back one page */
user_pref("browser.backspace_action", 0);

/* Autoplay */
user_pref("media.block-autoplay-until-in-foreground", true);
user_pref("media.block-play-until-document-interaction", true);
user_pref("media.block-play-until-visible", true);
