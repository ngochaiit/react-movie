import React, { useState, forwardRef } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import {
  ListItem, Button, Collapse, colors, makeStyles,
} from '@material-ui/core'
import { ExpandMore, ExpandLess } from '@material-ui/icons'
import Link from 'next/link'
import { matchPath } from '~/utils/router'

const CustomRouterLink = forwardRef(({
  to, children, className, activeClassName, exact, pathname, ...props
}, ref) => (
  <Link href={to}>
    <a
      ref={ref}
      style={{ flexGrow: 1 }}
      className={`${className} ${matchPath(pathname, { path: to, exact: false }) ? activeClassName : ''}`}
      {...props}
    >
      {children}
    </a>
  </Link>
))

CustomRouterLink.propTypes = {
  to: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
  activeClassName: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
}

const useStyles = makeStyles((theme) => ({
  item: {
    display: 'block',
    paddingTop: 0,
    paddingBottom: 0,
  },
  itemLeaf: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    color: colors.blueGrey[800],
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
  },
  buttonLeaf: {
    color: colors.blueGrey[800],
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightRegular,
    '&.depth-0': {
      fontWeight: theme.typography.fontWeightMedium,
    },
  },
  icon: {
    color: theme.palette.icon,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1),
  },
  expandIcon: {
    marginLeft: 'auto',
    height: 16,
    width: 16,
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
    '&.withBadge': {
      marginLeft: 8,
    },
  },
  active: {
    color: theme.palette.primary.main,
    background: theme.palette.primary.light,
    fontWeight: theme.typography.fontWeightMedium,
    '& $icon': {
      color: theme.palette.primary.main,
    },
  },
  badge: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#FF4949',
    color: 'white',
    marginLeft: 'auto',
    fontSize: 13,
    fontWeight: 600,
    width: 20,
    height: 20,
    borderRadius: 10,
    paddingBottom: 3,
  },
}))

const NavigationListItem = ({
  title, href, depth, children,
  icon: Icon,
  open: openProp,
  label: Label,
  pathname,
  onClick,
  data,
  ...rest
}) => {
  const classes = useStyles()
  const [open, setOpen] = useState(openProp)

  const handleToggle = () => {
    setOpen(!open)
  }

  const style = {
    paddingLeft: depth > 0 ? 32 + 8 * depth : 8,
  }
  if (children) {
    return (
      <ListItem
        {...rest}
        className={classes.item}
        disableGutters
      >
        <Button
          className={classes.button}
          onClick={handleToggle}
          style={style}
        >
          {Icon && <Icon className={classes.icon} />}
          {title}
          {data && data !== 0 ? <div className={classes.badge}>{data}</div> : ''}
          {open ? (
            <ExpandLess
              className={`${classes.expandIcon}${data && data !== 0 ? ' withBadge' : ''}`}
              color="inherit"
            />
          ) : (
            <ExpandMore
              className={`${classes.expandIcon}${data && data !== 0 ? ' withBadge' : ''}`}
              color="inherit"
            />
          )}
        </Button>
        <Collapse in={open}>{children}</Collapse>
      </ListItem>
    )
  }

  return (
    <ListItem
      {...rest}
      className={classes.itemLeaf}
      disableGutters
    >
      <Button
        activeClassName={classes.active}
        className={clsx(classes.buttonLeaf, `depth-${depth}`)}
        component={CustomRouterLink}
        exact
        style={style}
        to={href}
        pathname={pathname}
        onClick={onClick}
      >
        {Icon && <Icon className={classes.icon} />}
        {title}
        {data && data !== 0 ? <div className={classes.badge}>{data}</div> : ''}
        {Label && (
          <span className={`${classes.label}${data && data !== 0 ? ' withBadge' : ''}`}>
            <Label />
          </span>
        )}
      </Button>
    </ListItem>
  )
}

NavigationListItem.propTypes = {
  children: PropTypes.node,
  depth: PropTypes.number,
  href: PropTypes.string,
  icon: PropTypes.shape().isRequired,
  label: PropTypes.shape(),
  open: PropTypes.bool,
  title: PropTypes.string.isRequired,
  pathname: PropTypes.string,
  onClick: PropTypes.func,
  data: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}

NavigationListItem.defaultProps = {
  depth: 0,
  open: false,
  children: null,
  label: null,
  pathname: '',
  href: '#',
  onClick: () => {},
  data: '',
}

export default NavigationListItem
