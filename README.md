# insertnamehere.net

[![Netlify Status](https://api.netlify.com/api/v1/badges/5c209c17-6d04-4e92-9bce-4e3688b4aa0a/deploy-status)](https://app.netlify.com/sites/insertnamehere/deploys)

Repo for insertnamehere.net website hosted on netlify.com. Built with contentful.com (Headless CMS) and gatsbyjs.com (Static Site Generator).

## Installation instructions
1. Make sure nodejs is installed (see https://github.com/nvm-sh/nvm)
2. Run `npm install -g yarn` to get yarn
3. Run `yarn install` (repo uses yarn v2, no pnp)
4. Create a .env.development file and declare `CONTENTFUL_SPACE_ID` and `CONTENTFUL_ACCESS_TOKEN` with the respective Contentful information
5. Run `npm run start` to execute gatsby in develop mode