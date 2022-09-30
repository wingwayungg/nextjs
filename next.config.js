const path = require("path");

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
    images: {
        // Dangerously Allow SVG to optimize images
        // Reference: https://nextjs.org/docs/api-reference/next/image#dangerously-allow-svg
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        domains: ["d1csarkz8obe9u.cloudfront.net"],
    },
};
