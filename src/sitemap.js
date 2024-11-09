// // // import { SitemapStream, streamToPromise } from 'sitemap';
// // // import { Readable } from 'stream';

// // import { SitemapStream, streamToPromise } from 'sitemap';
// // import { Readable } from 'stream';

// // export default async function handler(req, res) {
// //   // Define the base URL of your site
// //   const baseUrl = "https://obliqware.pk";

// //   // List all the paths in your site
// //   const paths = [
// //     '/',
// //     '/about',
// //     '/services',
// //     '/services/web-development',
// //     '/services/mobile-app-development',
// //     '/services/ai-solution',
// //     '/services/ui-ux-design',
// //     '/services/graphic-design',
// //     '/specialized-offerings',
// //     '/blog',
// //     '/team',
// //     '/contact'
// //   ];

// //   // Create a stream to write to
// //   const stream = new SitemapStream({ hostname: baseUrl });

// //   // Write each URL to the stream
// //   paths.forEach(path => stream.write({ url: path, changefreq: 'weekly', priority: 0.8 }));
  
// //   // Close the stream
// //   stream.end();

// //   // Generate the sitemap
// //   const sitemap = await streamToPromise(Readable.from(stream)).then(data => data.toString());

// //   // Send the sitemap as a response
// //   res.setHeader('Content-Type', 'application/xml');
// //   res.write(sitemap);
// //   res.end();
// // }

// import { SitemapStream, streamToPromise } from 'sitemap';
// import { Readable } from 'stream';

// export default async function handler(req, res) {
//   const baseUrl = "http://localhost:3000";
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
//     '/project',
//     '/blog',
//     '/team',
//     '/contact',
//     '/appointment'
//   ];

//   const stream = new SitemapStream({ hostname: baseUrl });
//   paths.forEach(path => stream.write({ url: path, changefreq: 'weekly', priority: 0.8 }));
//   stream.end();

//   const sitemap = await streamToPromise(Readable.from(stream)).then(data => data.toString());

//   res.setHeader('Content-Type', 'application/xml');
//   res.status(200).end(sitemap);
// }

