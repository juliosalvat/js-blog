import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout>
      <p>Hey, I'm Julio Salvat and welcome to my blog.</p>
      <StaticImage
        alt="Julio Salvat"
        src="https://juliosalvat.com/images/profile.png"
      />
    </Layout>
  )
}

export default IndexPage