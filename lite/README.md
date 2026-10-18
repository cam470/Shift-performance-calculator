# Shift Report Lite

A calculator for the delivery station: shift results, FTDS against the 98% target, route planning from the parcel forecast, and the training modules.

## Privacy

- There's no sign-in, no saving and no logging.
- The page tells the browser it may only load its own files and may not connect to any other server (a Content-Security-Policy in `index.html`). Nothing typed into the app can be sent anywhere.
- The font is stored in `fonts/`, so the app doesn't contact Google either.
- The only things kept on a phone are the Light / Dark / Auto choice and training progress. Shift figures, drivers and the route plan clear when the app is closed.
- **Copy summary** and **Copy plan** put text on the phone's clipboard, so staff can choose to paste it into WhatsApp themselves.

## Files

| File | What it is |
| --- | --- |
| `index.html` | The app |
| `nightshift.css` | The look: colours, light and dark themes |
| `routes-config.js` | Route names, postcode districts and agencies. Edit this to change routes |
| `training-content.js` | Training module text |
| `training-images/` | Training photos |
| `fonts/` | Archivo font and its licence (`OFL.txt`) |
| `icons/`, `manifest.webmanifest` | App icon, and the name shown when added to a home screen |
| `sw.js` | Lets the app open offline |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are |

## Publishing on GitHub Pages

Put these files at the top level of a public repo. Then go to **Settings → Pages**, choose **Deploy from a branch**, branch **main**, folder **/ (root)**, and save.
