/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")
const runtimeCaching = require("next-pwa/cache")
const withPlugins = require("next-compose-plugins")
const path = require("path")

// module.exports = withPWA({
//     pwa: {
//         dest: "public",
//         runtimeCaching,
//         sassOptions: {
//             includePaths: [path.join(__dirname, "styles")],
//         },
//     },
// })

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
}

module.exports = withPlugins(
    [
        [
            withPWA,
            {
                pwa: {
                    dest: "public",
                    runtimeCaching,
                },
            },
        ],
        // ...
    ],

    nextConfig,
)
