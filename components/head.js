import React from 'react'
import NextHead from 'next/head'

export default function Head({ title, description, canonical, schemaOrg }) {
  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <meta httpEquiv="content-language" content="fr-FR" />
      <meta name="language" content="fr-FR" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffffff" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />

      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:site_name" content="RhymesMaker" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content="/iconstars.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="627" />

      {/* Twitter cards */}
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:site" content="@manageo_fr" />
      <meta property="twitter:creator" content="@manageo_fr" />
      <meta property="twitter:domain" content="Manageo" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:image" content="/iconstars.png" />
      {schemaOrg && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaOrg }} />
      )}
    </NextHead>
  )
}

Head.defaultProps = {
  title: 'RhymesMaker',
  description: 'Bible de poche de rimes pour rapper',
  canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}`
}
