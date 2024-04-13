import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        prependData: `
            @import "./src/shared/styles/mixins.scss";
            @import "./src/shared/styles/variables.scss";
            @import "./src/shared/styles/functions.scss";
        `,
    },
};

export default withNextIntl(nextConfig);
