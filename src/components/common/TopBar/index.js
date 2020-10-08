import React from 'react'
import PropTypes from 'prop-types'
import {
  AppBar, Toolbar, withStyles, IconButton,
} from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import Link from 'next/link'
// import { useUser } from '~/redux/hooks/user'

const style = (theme) => ({
  appBar: {
    background: '#FFFFFF',
    boxShadow: '0px 1px 3px #3F3F4426',
    '& img': {
      cursor: 'pointer',
    },
  },
  menu: {
    marginRight: 16,
    marginLeft: -theme.spacing(2),
    '@media all and (min-width: 1280px)': {
      display: 'none',
    },
  },
})

const TopBar = ({ classes, onOpenNavBarMobile }) => (
  <AppBar className={classes.appBar}>
    <Toolbar>
      {
          onOpenNavBarMobile && (
          <IconButton
            className={classes.menu}
            color="primary"
            onClick={onOpenNavBarMobile}
          >
            <Menu />
          </IconButton>
          )
        }
      {/* href={user.data && Object.values(user.data).find((x) => x) ? '/shipment' : '/'} */}
      <Link href="/">
        <img
          alt="Logo"
          src="/images/logo.png"
        />
      </Link>
    </Toolbar>
  </AppBar>
  )

TopBar.defaultProps = {
  onOpenNavBarMobile: null,
}

TopBar.propTypes = {
  classes: PropTypes.shape().isRequired,
  onOpenNavBarMobile: PropTypes.func,
}

export default withStyles(style)(TopBar)
