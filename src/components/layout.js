import * as React from "react"
import Navbar from "./navbar/Navbar"
// import Topbar from "./navbar/Topbar"
import Footer from "./footer/Footer"
import GlobalStyle from "../styles/GlobalsStyles"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <header>
        {/* <Topbar /> */}
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        {" "}
        <Footer />
      </footer>
    </>
  )
}

export default Layout
