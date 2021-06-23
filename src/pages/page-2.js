import * as React from "react"
import { Link } from "gatsby"
import { Button, Typography } from "@material-ui/core"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <Typography className={classes.textStyle}>Välkommen hit</Typography>

    <Typography className={classes.textStyle}>Välkommen hit</Typography>

    <Typography className={classes.textStyle}>Välkommen hit</Typography>

    <Typography className={classes.textStyle}>Välkommen hit</Typography>
    <p>Welcome to page 2</p>

    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
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
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
