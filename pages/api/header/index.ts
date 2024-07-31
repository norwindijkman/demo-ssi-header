import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(
  _: NextApiRequest,
  res: NextApiResponse
) {
  const response = await fetch('http://localhost:3000/header');
  const fullHTML = await response.text();
  const partialHTML = fullHTML
    .replaceAll('<!DOCTYPE html><html><head>', '')
    .replaceAll('</head><body>', '')
    .replaceAll('</body></html>', '')
    .replace(/<meta[^>]*>/gi, '') // remove meta tags

  res.setHeader('Content-Type', 'text/html');
  res.write(partialHTML);
  res.end();
}
