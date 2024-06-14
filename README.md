# nextjs-headless-wordpress learning demo

This code uses the WordPress VIP's Next.js boilerplate for decoupled WordPress. If you choose to use it, VIP's decoupled plugin bundle must be installed and activated on the WordPress backend.

## Getting started

### Install dependencies

```sh
npm install
```

### Local configuration

The application is preconfigured to run with a local install of WordPress:

1. For Worpress Local Activate the VIP Decoupled Plugin Bundle. After Activating we will able to get the graphql Endpoint from the GraphQL settings.

2. Need to change the Site address URL to the frontend next js URL (defaults to http://localhost:3000).

3. Next, run the Next.js development server with:

	```sh
    npm run dev
    ```
You should now be able to access:

+ Next.js front-end via [http://localhost:3000][local-nextjs]

Update the following environment variables defined in the `.env` file:

+ `NEXT_PUBLIC_GRAPHQL_ENDPOINT`: The full URL, including protocol, of your WPGraphQL endpoint. You can find it in the WordPress Admin Dashboard > Settings > VIP Decoupled.
+ `NEXT_PUBLIC_SERVER_URL`: The full URL, including protocol, of this Next.js site. This allows things like sitemaps and link routing to be configured correctly.

Start a development server, with hot-reloading, at [http://localhost:3000][local-nextjs].

```sh
npm run dev
```

### Production build

```sh
npm run build
npm start
```

