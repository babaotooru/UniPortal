import './globals.css';

export const metadata = {
  title: 'UniPortal - Find the Best Schools',
  description: 'Compare schools, fees, ratings and find the perfect educational fit for your child.',
  keywords: 'schools, education, comparison, ratings, fees',
  author: 'UniPortal',
  viewport: 'width=device-width, initial-scale=1.0',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className="antialiased bg-gray-50">
        {children}
      </body>
    </html>
  );
}