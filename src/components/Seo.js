import React from "react"
import { HelmetDatoCms } from "gatsby-source-datocms"

const Seo = ({ meta }) => {
  return <HelmetDatoCms seo={meta} />
}

export default Seo
