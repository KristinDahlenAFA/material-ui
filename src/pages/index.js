import * as React from "react"
import { ThemeProvider } from "@material-ui/styles"
import theme from "../theme"
import { makeStyles } from "@material-ui/core"

import Layout from "../components/layout"
import Seo from "../components/seo"

const useStyles = makeStyles({
  textStyle: {
    color: "red",
  },
})

const IndexPage = () => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Seo title="Home" />
      </Layout>
    </ThemeProvider>
  )
}

export default IndexPage
