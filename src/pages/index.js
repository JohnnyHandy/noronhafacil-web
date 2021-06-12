import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import MainSection from '../sections/main'
import PasseiosSection from '../sections/passeios'
import QuemSomosSection from '../sections/quemsomos'
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  const [height, setHeight] = React.useState(0)
  const [headerHeight, setHeaderHeight] = React.useState(null)
  React.useEffect(() => {

    setHeight(window.innerHeight)
    setHeaderHeight(document.getElementById('header').clientHeight)
  }, [])
  return (
  <Layout height={height} headerHeight={headerHeight}>
    <Seo title="Início" />
    <MainSection height={height} headerHeight={headerHeight} />
    <PasseiosSection />
    <QuemSomosSection />
  </Layout>
)}

export default IndexPage
