/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [

			{
				source: '/',
				destination: '/sobre',
				permanent: true,
			},
		]
	},
};

export default nextConfig;
