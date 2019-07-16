# CLOSURE

Today, 2019-05-04, I've decided to replace my current website for an easier to maintain option.

## Getting started

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

CAVEAT: the command above will replace any other site you might have currently published in the GitHub repository. Be careful.

## Repository structure

### Branches

* `master`: actual site.
* `react`: main page (React SPA).
* `html-css`: old HTML-CSS only page.

* `app`: React SPA source code.
* `blog`: Jekyll source code to build the blog.

## Develop

Requires:

  - Jekyll
  - Node & NPM

## Deploy

Run `npm run deploy` to build the website and use the `gp-pages` NPM module to deploy the website to GitHub.
