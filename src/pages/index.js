import * as React from "react"

import MainSection from '../sections/main'
import PasseiosSection from '../sections/passeios'
import QuemSomosSection from '../sections/quemsomos'
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  const [height, setHeight] = React.useState(0)
  const [headerHeight, setHeaderHeight] = React.useState(null)
  const MainRef = React.useRef();
  const PasseiosRef = React.useRef();
  const QuemSomosRef = React.useRef();
  const ContatosRef = React.useRef();

  const scrollToRef = React.useCallback((ref) => {
    window.scrollTo(0, ref.current.offsetTop)
  }, [])
  const allRefsObject = {
    MainRef,
    PasseiosRef,
    QuemSomosRef,
    ContatosRef,
  }
  React.useEffect(() => {
    setHeight(window.innerHeight)
    setHeaderHeight(document.getElementById('header').clientHeight)
  }, [])
  return (
  <Layout height={height} headerHeight={headerHeight} scrollToRef={scrollToRef} allRefsObject={allRefsObject} >
    <Seo title="Noronha Fácil" />
    <MainSection sectionRef={MainRef} height={height} headerHeight={headerHeight} />
    <PasseiosSection sectionRef={PasseiosRef} />
    <QuemSomosSection height={height} sectionRef={QuemSomosRef} />
  </Layout>
)}

export default IndexPage
