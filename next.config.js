
module.exports = {
    env: {
        SHOPIFY_STORE_DOMAIN: process.env.SHOPIFY_STORE_DOMAIN,
        SHOPIFY_STOREFRONT_ACCESSTOKEN: process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN
    },
    //since our images are coming from an external source we want to make
    //sure that they are being optimized
    images: {
        domains: ['cdn.shopify.com']
    }

} 

