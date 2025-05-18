import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
// import Script from 'next/script'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <p>DEVELOP</p>
      <hr/>
      <body>{children}</body>
      <PrismicPreview repositoryName={repositoryName} />
      {/* <Script src="https://static.cdn.prismic.io/prismic.js?new=true&repo=god-3"  /> */}
    </html>
  );
}
