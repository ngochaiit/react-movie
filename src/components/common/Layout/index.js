import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles, Container } from '@material-ui/core'
import TopBar from '~/components/common/TopBar'
import NavBar from '~/components/common/NavBar'
import style from './style'

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    paddingLeft: 0,
    paddingRight: 0,
  },
  content: {
    overflowY: 'auto',
    flex: 1,
    padding: theme.spacing(2),
  },
}))
const Layout = ({
   children, maxWidth,
}) => {
  const [openNavBarMobile, setOpenNavBarMobile] = useState(false)
  const classes = useStyles()

  const handleNavBarMobileOpen = () => {
    setOpenNavBarMobile(true)
  }

  const handleNavBarMobileClose = () => {
    setOpenNavBarMobile(false)
  }

  return (
    <div className="container">
      <TopBar onOpenNavBarMobile={handleNavBarMobileOpen} />
      <div className="box-container">
        <NavBar
          onMobileClose={handleNavBarMobileClose}
          openMobile={openNavBarMobile}
        />
        <div className={classes.content}>
          <Container className={classes.container} maxWidth={maxWidth}>{children}</Container>
        </div>
      </div>
      <style jsx>
        {style}
      </style>
    </div>
  )
}

Layout.defaultProps = {
  maxWidth: 'xl',
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  maxWidth: PropTypes.string,
}

export default (Layout)
