# Scuba Check

Start in `index.js` and working your way backwards through components should give you a pretty good picture of how things fit together. `/src/components/checks.js` contain all the checks which you can edit for your own checks. Check types include `CHECKTYPES.GONOGO` (tap "GO" to continue), `CHECKTYPES.PRESSURE` which expects a sibling `pressure` field which the pressure must be above to pass, `CHECKTYPES.CHECKSTOW` which is for deploying, checking, and stowing, and `CHECKTYPES.FINAL`, a special check type for the final item which displays the completed checklist and serves an image at the bottom of the page suitable for sending to a surface tender or saving for archival purposes.

## Development

Installation:
```
$ git clone https://github.com/jkingsman/scuba-check.git
$ yarn
```

Serve for development (hot reload enabled in dev; check your terminal output for bound address and port, typically http://localhost:8080):

```
$ yarn watch
```

Scuba-Checl is served from `dist` which is an ignored directory and populated by the CI tool on build, but if you want to make a local bundle for testing, you can put a final static build in the `dist` folder with:

```
$ yarn build
```

Before submitting a PR, please make sure you `yarn lint` to beautify (Prettier) the code in place and keep a consistent style.
