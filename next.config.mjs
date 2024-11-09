// /** @type {import('next').NextConfig} */

// const nextConfig = {
//     reactStrictMode: false,
// };

// export default nextConfig;
// /** @type {import('next').NextConfig} */

// const nextConfig = {
//     reactStrictMode: false,
//     async headers() {
//       return [
//         {
//           source: '/sitemap.xml',
//           headers: [
//             {
//               key: 'Cache-Control',
//               value: 'public, max-age=3600, must-revalidate',
//             },
//           ],
//         },
//       ];
//     },
//   };
  
//   export default nextConfig;
  

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    async headers() {
      return [
        {
          source: '/sitemap.xml',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=3600, must-revalidate',
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;  