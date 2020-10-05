import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  Drawer, Divider, Paper, Avatar, Typography,
  Hidden, withStyles,
} from '@material-ui/core'
import Link from 'next/link'
import { Add } from '@material-ui/icons'
import { useRouter } from 'next/router'
import Navigation from '../Navigation'
import navigationConfig, { signOutData } from './navigationConfig'
import Button from '../Button'
import NavigationListItem from '../Navigation/NavigationListItem'

const style = (theme) => ({
  root: {
    height: '100%',
    overflowY: 'auto',
    zIndex: 3,
    width: 256,
    minWidth: 256,
    flex: '0 0 auto',
    '&.hidden': {
      '@media all and (max-width: 1279px)': {
        display: 'none',
      },
    },
  },
  profile: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2),
  },
  avatar: {
    width: 60,
    height: 60,
    cursor: 'pointer',
  },
  name: {
    marginTop: theme.spacing(1),
  },
  divider: {
    marginTop: theme.spacing(3),
  },
  navigation: {
    flex: 1,
    marginTop: theme.spacing(3),
  },
  addButton: {
    borderRadius: 18,
    marginTop: theme.spacing(3),
  },
})

const NavBar = ({
  classes, openMobile, onMobileClose, className, ...rest
}) => {
  const router = useRouter()
//   const { user } = useUser()
  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose()
    }
  }, [router.pathname])

  const navbarContent = (
    <div className={classes.content}>
      <div className={classes.profile}>
        <Link href="/account">
          <a>
            <Avatar
              alt="Person"
              className={classes.avatar}
              src="/images/avatar.png"
            />
          </a>
        </Link>
        <Typography variant="body2" className={classes.name}> Watching amazing movies!!!</Typography>
        <Link href="/">
          <a>
            <Button
              className={classes.addButton}
              label={(
                <>
                  <Add />
                  &nbsp;
                  NEW SHIPMENT
                </>
              )}
            />
          </a>
        </Link>
      </div>
      <Divider className={classes.divider} />
      <nav className={classes.navigation}>
        {navigationConfig.map(({
          title, pages,
        }) => (
          <Navigation
            key={title}
            pages={pages}
            title={title}
            router={router}
          />
          ))}
      </nav>
      <NavigationListItem {...signOutData} href="/sign-out" />
    </div>
  )

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          <div
            {...rest}
            className={classes.root}
          >
            {navbarContent}
          </div>
        </Drawer>
      </Hidden>
      <Paper
        {...rest}
        className={`${classes.root} hidden`}
        elevation={1}
        square
      >
        {navbarContent}
      </Paper>
    </>
  )
}

NavBar.defaultProps = {
  className: '',
}

NavBar.propTypes = {
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
  onMobileClose: PropTypes.func.isRequired,
  openMobile: PropTypes.bool.isRequired,
}

export default withStyles(style)(NavBar)
