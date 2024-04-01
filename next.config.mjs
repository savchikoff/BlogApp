import createNextIntlPlugin from 'next-intl/plugin';
import path from 'path';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        prependData: `
            @import "./src/shared/styles/mixins.scss";
            @import "./src/shared/styles/variables.scss";
        `
    }
};

export default withNextIntl(nextConfig);
