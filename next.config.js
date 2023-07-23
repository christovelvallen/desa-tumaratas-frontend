/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				hostname: 'localhost',
			},
		],
	},
};

module.exports = nextConfig;
