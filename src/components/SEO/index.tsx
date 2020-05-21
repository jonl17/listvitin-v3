import { graphql, useStaticQuery } from "gatsby"
import React from 'react'
import { Helmet } from "react-helmet"

type Metadata = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      logo: string;
      favicon: string;
      url: string;
    }
  }
}

const SEO = () => {
  const data: Metadata = useStaticQuery(graphql`
  {
    site {
      siteMetadata {
        title
        description
        logo
        favicon
        url
      }
    }
  }
  `)
  const { site: { siteMetadata: meta } } = data
  return (
    <Helmet title={meta.title}>
      <meta name="description" content={meta.description} />

      <meta name="image" content={meta.logo} />

      {meta.url && <meta property="og:url" content={meta.url} />}

      {meta.title && <meta property="og:title" content={meta.title} />}

      {meta.description && (
        <meta property="og:description" content={meta.description} />
      )}
      {meta.logo && <meta property="og:image" content={meta.logo} />}

      <link
        sizes="20x20"
        href={meta.favicon}
        rel="icon"
        type="image/png"
      ></link>
    </Helmet>
  )
}

export default SEO
