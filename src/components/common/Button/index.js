import React from 'react'
import PropTypes from 'prop-types'
import { Button as ThemeButton, withStyles } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'

const style = () => ({
  button: {},
})

const CircularProgressStyled = withStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(2),
  },
}))(CircularProgress)

const Button = ({
  classes, label, children, color, className, loading, ...props
}) => (
  <ThemeButton
    fullWidth
    className={`${classes.button} ${className || ''}`}
    variant="contained"
    color={color}
    {...props}
  >
    {label || children}
    {loading && (
    <CircularProgressStyled
      size={18}
      color="inherit"
    />
)}
  </ThemeButton>
  )

Button.defaultProps = {
  label: '',
  color: 'primary',
  className: null,
  children: '',
  loading: false,
}

Button.propTypes = {
  classes: PropTypes.shape().isRequired,
  label: PropTypes.oneOfType([
    PropTypes.shape(),
    PropTypes.string,
    PropTypes.any,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.shape(),
    PropTypes.string,
  ]),
  color: PropTypes.string,
  className: PropTypes.string,
  loading: PropTypes.bool,
}

export default withStyles(style)(Button)
