import {defineConfig, CookieSessionStorage} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    defaultCountryCode: 'NZ',
    defaultLanguageCode: 'EN',
    storeDomain:
      // @ts-ignore
      Oxygen?.env?.PUBLIC_STORE_DOMAIN || 'notarealrecordstore.myshopify.com',
    storefrontToken:
      // @ts-ignore
      Oxygen?.env?.PUBLIC_STOREFRONT_API_TOKEN ||
      'af55c471815963e836bebfa3233eb8be',
    privateStorefrontToken:
      // @ts-ignore
      Oxygen?.env?.PRIVATE_STOREFRONT_API_TOKEN,
    storefrontApiVersion: '2022-07',
    // @ts-ignore
    storefrontId: Oxygen?.env?.PUBLIC_STOREFRONT_ID,
  },
  session: CookieSessionStorage('__session', {
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'Strict',
    maxAge: 60 * 60 * 24 * 30,
  }),
});
