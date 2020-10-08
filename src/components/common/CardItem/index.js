import React from 'react'
import PropTypes from 'prop-types'
import {
  withStyles, Card, Divider,
} from '@material-ui/core'
import style from './style'

const themeStyle = (theme) => ({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    '&.large': {
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
    },
  },
  headerLeft: {
    fontSize: 16,
    fontWeight: 600,
  },
  spaceTop: {
    marginTop: theme.spacing(2),
  },
  paddingContent: {
    padding: theme.spacing(2),
    '&.large': {
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
    },
  },

})

const CardItem = ({
  classes, children, title, noSpaceTop,
  noPadding, rightComponent, className, large,
}) => (
  <>
    <Card className={`${noSpaceTop ? '' : classes.spaceTop} ${className}`}>
      <div className={`${classes.header}${large ? ' large' : ''}`}>
        <div className={classes.headerLeft}>{title}</div>
        <div className={classes.headerRight}>{rightComponent}</div>
      </div>
      {children && <Divider />}
      {(!noPadding && children) ? <div className={`${classes.paddingContent}${large ? ' large' : ''}`}>{children}</div> : children }
    </Card>
    <style jsx>
      {style}
    </style>
  </>
)

CardItem.defaultProps = {
  title: '',
  children: '',
  noSpaceTop: false,
  noPadding: false,
  rightComponent: '',
  className: '',
  large: false,
}

CardItem.propTypes = {
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  rightComponent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  noSpaceTop: PropTypes.bool,
  noPadding: PropTypes.bool,
  large: PropTypes.bool,
}

export default withStyles(themeStyle)(CardItem)
