import React from 'react'
import PropTypes from 'prop-types'
import {
  withStyles, FormControlLabel, Checkbox,
} from '@material-ui/core'
import { COLORS } from '~/components/styles/commonStyle'

const style = {
    textInput: {
      width: '100%',
      marginTop: 12,
      marginBottom: 12,
    },
    disabled: {
      '& path': {
        color: COLORS.primary4,
      },
    },
  }

const CheckBox = ({
 classes, label, disabled, color, formStyle, ...props
}) => (
  <FormControlLabel
    style={formStyle}
    {
        ...(disabled ? { onClick: (e) => e.preventDefault() } : {})
      }
    control={(
      <Checkbox
        {...props}
        color={color}
        className={disabled ? classes.disabled : ''}
      />
      )}
    label={label}
  />

)

CheckBox.defaultProps = {
    color: 'primary',
    formStyle: {},
    disabled: false,
  }

  CheckBox.propTypes = {
    classes: PropTypes.shape().isRequired,
    formStyle: PropTypes.shape(),
    label: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape(),
    ]).isRequired,
    color: PropTypes.string,
    disabled: PropTypes.bool,
  }

  export default withStyles(style)(CheckBox)
