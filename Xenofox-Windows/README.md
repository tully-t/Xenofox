Xenofox is a dark, colorful theme for Firefox with tab management enhancements. Intended to match the Xeno KDE theme.

Features:

- Gradients to indicate focus/selection
- Icons from Sour icon theme (optional)
- Completely dark theme (no white flash)
- Tabs below toolbar
- Rounded corners for tabs, buttons, URL bar
- Centered tab labels
- Centered URL bar text (only when unfocused)
- URL bar icons appear on hover
- Active tab is expanded
- On active tab, favicon becomes close button when hovered
- Inactive tabs widen on hover when overflowed
- Tabs expand to full window width (credit to MrOtherGuy)
- Tab bar is hidden with only one tab (credit to MrOtherGuy)
- 'Now Playing' speaker icon instead of text on tab label
- Container tab line under tab icon
- Matching New Tab/Top Sites page theme
- New Tab as rightmost toolbar button (optional)
- Hidden hamburger menu (optional)
- Modularity! Comment and uncomment lines in userChrome.css to enable or disable features

Installation:

- Download and extract the appropriate Xenofox.zip for your OS

- Type "about:support" in the Firefox URL bar to go to Firefox's support page

- Click "Open Directory" ("Open Folder" on Windows) next to the "Profile Directory" ("Profile Folder" on Windows) label to open your Firefox Profile folder. [Screenshot_profile_directory_button]
    -  Linux: `~/.mozilla/firefox/######.default-release/`
    - Windows: `C:\Users\[USERNAME]\AppData\Roaming\Mozilla\Firefox\Profiles\######.default-release`
    - Mac: `Users/[USERNAME]/Library/Application Support/Firefox/Profiles/######.default-release`

- Go to where you extracted Xenofox.zip (or Xenofox-Windows.zip, or Xenofox-Mac.zip) and copy the "chrome" folder and the "user.js" file to your Firefox profile folder. This step is complete when you have a file named "user.js" and a folder named "chrome" containing the theme elements in your Firefox Profile folder

- Restart Firefox

A few tweaks are still required to fully adapt Firefox to the theme. From a fresh Firefox profile, this is what we have so far: [Screenshot 1]
-
- Right-click the toolbar and select "Customize Toolbar" to enter Customization mode
- Move the Firefox View button off of the tab bar. Removing the Firefox View button, or moving it to the toolbar, enables the tab bar to hide with only one tab. See Notes for further explanation
- Move the New Tab button from the tab bar to the the toolbar. Moving the New Tab button to the toolbar enables the tab bar to hide with only one tab. See Notes for further explanation
The Xenofox theme has been applied!
-
- The Xenofox default is to hide the "Application" (hamburger) menu. If you would prefer the Application menu button visible, see Customization
- KDE enjoyers: check "Title Bar" in the lower-left, if it is not checked already. If you prefer client-side decorations, leave this unchecked and see Customization (GNOME, Mac, and Windows users may want to leave this unchecked) [Screenshot_titlebar_checkbox]

Recommendations:

- Install the Dark Reader add-on and import the provided Dark Reader settings to give web content a dark theme (including pages restricted by the browser)

    To import Dark Reader settings:
    - Click the Extensions button to open the Extensions menu
    - Select Dark Reader. This will open the Dark Reader menu
    - Select "Dev tools" in the lower-right. The Dark Reader Developer Tools window will open
    - Select "Preview new design", click Apply, and close the dev tools window. This will enable a more advanced Dark Reader menu
    - Repeat steps 1 & 2 to open the Dark Reader menu again, this time with the new design
    - Select "Settings" (towards the bottom, above "Help"). The Dark Reader Settings page will open in a new tab
    - Select "Advanced" in the sidebar of the Dark Reader settings page
    - Select "Import Settings" (roughly in the middle, above "Export Settings" and below "Notify of news"). A file picker dialog will open
    - Navigate to where you extracted Xenofox.zip. In .../Xenofox/Dark-Reader-Settings, select "Dark-Reader-Settings.json"
    - Dark Reader now matches the Xenofox theme!

- use with Xeno-gtk GTK theme
- use with Xeno Aurorae window decoration (KDE only). Those using a different window decoration or SSD may wish to uncomment lines 43-45 in `chrome/toolbars.css` for more space below the title bar

To make your browser exactly look like the screenshot:

- On the New Tab page, click the "Personalize new tab" button (gear wheel, top right)
- Click "Manage more settings" at the bottom of the dialog panel to go to Settings (about:preferences#home)
- On the "Home" Settings page, uncheck "Web Search" to remove the branding and search bar from your New Tab page. The options here are yours to choose, of course. I opt for three rows of Top Sites to fill the space left in the absence of Web Search and Pocket.
- Move the Download, Account, Save to Pocket buttons off of the toolbar

    Windows:
    - Move "Extensions" to the right of the URL bar
    - Move "Library" to the right of "Extensions"
    - Move "New Tab" to the right of "Library"

    Linux/Mac:
    - Move "New Tab" to the right edge of the toolbar
    - Move "Library" the left of "New Tab"
    - Move "Extensions" to the left of "Library"


[Your browser should now match the screenshot]: [Screenshot 2_KDE] [Screenshot_2_Windows]


Notes:

- By default, this theme will hide the Tracking Protection icon from the URL bar. Tracking Protection is still working! I've never needed to interfere with it, and the icon is _always_ there otherwise. If you would feel better with it visible, comment out the "hide-tracking-protection.css" line in userChrome.css
    - For example, `@import url(hide-tracking-protection.css);` -> `/*@import url(hide-tracking-protection.css);*/`

- Where did the close buttons on my tabs go?
    - Use middle-click or Ctrl+W to close inactive/unselected tabs. To reveal the close button on the selected tab, hover over it.

- Hidden Application (hamburger) menu information: Since we have the New Tab button on the toolbar, it makes the most sense to have it on the right edge, but that spot is taken by default by the hamburger menu, which is also unmovable. The smoothest way to approach this conflict is to hide the hamburger menu. The Overflow button will also appear at the right edge, but will be hidden unless there is an item in the Overflow menu. You can drag items out of the Overflow menu in Customization mode. The hamburger menu is, frankly, redundant: the Settings page (about:preferences) is accessible using the dedicated toolbar button or the "Manage more settings" option found by clicking the gear wheel icon in the top right of the New Tab page, and dedicated toolbar buttons exist for every option in the hamburger menu. If you would like to keep the hamburger menu visible, see Customization.

- Xenofox provides a user.js file. The listed prefs can be modified in about:config, but before you do so, be sure to move or rename the provided user.js file. Otherwise the user.js file will apply on Firefox startup and overwrite any changes you make to the listed prefs.

- Arkenfox compatibility: append the prefs in the provided user.js to your user-overrides.js


Customization:

- Always make a backup first. Feel free to experiment! The theme .css files are deliberately commented to make modification approachable.

- For default Mozilla icons:
    - Comment out the `icons.css` line in userChrome.css
    - For example, `@import url(icons.css);` -> `/*@import url(icons.css);*/`

- If you prefer client-side decorations on the right (as in the Windows edition):
    - In Customization mode, uncheck "Titlebar" in the lower-left
    - Uncomment the `csd.css` line in userChrome.css
    - For example, `/*@import url(csd.css);*/` -> `@import url(csd.css);`
    - Restart Firefox to see changes

- If you prefer client-side decorations on the left (as in the MacOS edition):
    - In Customization mode, uncheck "Titlebar" in the lower-left
    - Uncomment the `csd-left.css` line in userChrome.css
    - For example, `/*@import url(csd-left.css);*/` -> `@import url(csd-left.css);`
    - Restart Firefox to see changes

- If you prefer a visible Application (hamburger) menu (it is unmovable):
    - Comment out the `hide-hamburger-menu.css` line in userChrome.css
    - For example, `@import url(hide-hamburger-menu.css);` -> `/*@import url(hide-hamburger-menu.css);*/`

- To change the New Tab favicon (by default a lime green Firefox logo), edit line 4 in chrome/icons.css. Several alternative New Tab favicons are provided.
    - For example, replace the "firefox-logo.svg" of `content: url(icons/firefox-logo.svg) !important;` with "firefox-nightly.svg" (purple Firefox Nightly icon), "newtab-logo.svg" (blue alternative icon), or "librewolf-logo.svg" (purple Librewolf icon).
    - You can also edit the color of the provided icons using Inkscape or rename them as you see fit. Use the gradients in other provided icons as models.

- All icons that you add or modify should be sized 32x32px to scale correctly

- To modify the theme for the New Tab page/Top Sites, edit variables in userContent.css

- Use Ctrl+F to search for specific colors within .css files. If you change the selected tab gradient in tab-theme.css, you may also want to change the opened button gradients, the --panel-separator-zap-gradient, and the warning container gradient in toolbars.css, the focused URL bar background gradient in urlbar.css, and the Top Site context menu gradient in userContent.css

Known issues:

- Fully themed menus (context, bookmark, and toolbar dropdown) are planned
- Native page (Settings etc.) theme is planned

Uninstallation:

- Delete the "chrome" folder in your Firefox profile folder
- In Extensions -> Dark Reader -> Settings -> Advanced, choose "Reset settings"
- Right-click the Toolbar and select "Customize Toolbar". In Customization Mode, select "Restore Defaults" (lower-right)
- In about:config, reset the preferences listed in "user.js" to default, then delete "user.js" before closing Firefox
- Restart Firefox. Your browser is back to default!

Credits:

This theme would not exist without the tremendously patient and insightful guidance from MrOtherGuy present in comments on r/firefoxcss and https://lemmy.world/c/firefoxcss, as well as their templates at https://github.com/MrOtherGuy/firefox-csshacks/tree/master. The Dark Reader team also deserves a shout-out.

