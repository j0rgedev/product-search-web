import '../styles/globals.css'

export const metadata = {
  title: 'SG Químicos del Perú S.A.C',
  description: 'Búsqueda de los productos de SG Químicos del Perú S.A.C',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
