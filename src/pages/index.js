import * as React from "react"
import { Button, Typography } from "@material-ui/core"
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
        <Typography className={classes.textStyle}>Välkommen hit</Typography>
        <Typography className={classes.textStyle}>Välkommen hit</Typography>

        <Typography className={classes.textStyle}>Välkommen hit</Typography>

        <Typography className={classes.textStyle}>Välkommen hit</Typography>

        <Typography className={classes.textStyle}>Välkommen hit</Typography>

        <Typography className={classes.textStyle}>Välkommen hit</Typography>

        <Typography className={classes.textStyle}>Välkommen hit</Typography>

        <Typography className={classes.textStyle}>Välkommen hit</Typography>

        <Button variant="contained" color="primary">
          Klicka på mig
        </Button>
        <Button variant="contained" color="primary">
          Klicka på mig
        </Button>
        <Button variant="contained" color="primary">
          Klicka på mig
        </Button>
        <Button variant="contained" color="primary">
          Klicka på mig
        </Button>
        <Button variant="contained" color="primary">
          Klicka på mig
        </Button>
        <Button variant="contained" color="primary">
          Klicka på mig
        </Button>
        <Button variant="contained" color="primary">
          Klicka på mig
        </Button>
        <Button variant="contained" color="primary">
          Klicka på mig
        </Button>
        <Button variant="contained" color="primary">
          Klicka på mig
        </Button>
      </Layout>
    </ThemeProvider>
  )
}

export default IndexPage
