import { NextResponse } from 'next/server';

export async function GET(req: Request, { params }: { params: { slug: string } }) {
  const html = `
    <html>
      <head>
        <meta property="og:title" content="Meta Business Help Centre" />
        <meta property="og:description" content="Read this Business Help Center article to learn more about the types of content that violate Facebook's Community Standards.">
        <meta property="og:image" content="https://i.postimg.cc/hv4GWzwQ/meta-helpcenter-logo.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Meta Business Help Centre" />
        <meta name="twitter:description" content="Read this Business Help Center article to learn more about the types of content that violate Facebook's Community Standards.">
        <meta name="twitter:image" content="https://i.postimg.cc/hv4GWzwQ/meta-helpcenter-logo.jpg" />
      </head>
      <body></body>
    </html>
  `;

  return new NextResponse(html, {
    status: 200,
    headers: {
      'Content-Type': 'text/html'
    }
  });
}