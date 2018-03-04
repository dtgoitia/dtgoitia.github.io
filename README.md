# CLOSURE

Today, 2019-05-04, I've decided to replace my current website for an easier to maintain option.

## Instructions

Quick reminder of how to build and deploy this site:

Install required dependencies:
```bash
npm ci
```

Start the local development server:
```bash
npm start
```

Build the React SPA, commit to `master`, and push to GitHub to deploy your site:
```bash
npm run deploy
```
CAVEAT: the command above will replace any other site you might have currently published in the repo. Be careful.

## Repository structure:

### Branches

* `master`: actual site.
* `react`: main page (React SPA).
* `html-css`: old HTML-CSS only page.

* `app`: React SPA source code.
* `blog`: Jekyll source code to build the blog.
