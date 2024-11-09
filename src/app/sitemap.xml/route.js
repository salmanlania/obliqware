// // export { default } from '../../sitemap.js';
// import { SitemapStream, streamToPromise } from 'sitemap';
// import { Readable } from 'stream';

// export async function GET(req, res) {
//   const baseUrl = "http://localhost:3000";  // Change to localhost URL for testing
//   const paths = [
//     '/',
//     '/about',
//     '/services',
//     '/services/web-development',
//     '/services/mobile-app-development',
//     '/services/ai-solution',
//     '/services/ui-ux-design',
//     '/services/graphic-design',
//     '/specialized-offerings',
//     '/blog',
//     '/team',
//     '/contact'
//   ];

//   const stream = new SitemapStream({ hostname: baseUrl });
//   paths.forEach(path => stream.write({ url: path, changefreq: 'weekly', priority: 0.8 }));
//   stream.end();

//   const sitemap = await streamToPromise(Readable.from(stream)).then(data => data.toString());

//   res.setHeader('Content-Type', 'application/xml');
//   res.status(200).end(sitemap);
// }

import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

export async function GET() {
  const baseUrl = "https://obliqware.pk/";  // Update to your live domain for production
  const paths = [
    '/',
    '/about',
    '/services',
    '/web-development',
    '/mobile-app-development',
    '/ai-solution',
    '/ui-ux-design',
    '/graphic-design',
    '/specialized-offerings',
    '/project',
    '/blog',
    '/team',
    '/contact'
  ];

  // Generate the sitemap XML
  const stream = new SitemapStream({ hostname: baseUrl });
  paths.forEach(path => stream.write({ url: path, changefreq: 'weekly', priority: 0.8 }));
  stream.end();

  const sitemap = await streamToPromise(Readable.from(stream)).then(data => data.toString());

  // Return the response as XML
  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
