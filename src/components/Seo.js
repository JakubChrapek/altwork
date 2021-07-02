import React from "react"
import { HelmetDatoCms } from "gatsby-source-datocms"

const Seo = ({ meta, title, description }) => {
  return (
    <HelmetDatoCms seo={meta}>
      {description && <meta name="description" content={description} />}
      {description && <meta property="og:description" content={description} />}
      {description && <meta name="twitter:description" content={description} />}
      {title && <title>{title}</title>}
    </HelmetDatoCms>
  )
}

export default Seo
