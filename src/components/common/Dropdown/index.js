import React from 'react'
import PropTypes from 'prop-types'
import {
    withStyles, TextField, makeStyles,
} from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { COLORS } from '~/components/styles/commonStyle'

const style = {
    inputRoot: {
      height: '46px',
    },
    option: {
      '&:hover': {
        background: COLORS.primaryBackground,
        color: COLORS.primary,
      },
      fontSize: 14,
    },
  }

  const useTextFieldStyled = makeStyles({
    cssFocused: {
    },
    notchedOutline: {
      '&.disabled': {
        borderColor: '#CACACA !important',
        borderWidth: 1,
      },
    },
  })

const Dropdown = ({
classes, options, label, defaultValue, inputProps, disabled, placeholder, readOnly, ...props
}) => {
    const textFieldClasses = useTextFieldStyled()
  return (
    <Autocomplete
      id="grouped-demo"
      options={options}
      label={label}
      disableClearable
      value={options.length === 0 ? { label: '', value: '' } : options.find((e) => e.value === defaultValue) || ''}
      openOnFocus
      getOptionLabel={(option) => (option.label ? option.label : '')}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant="outlined"
          size="small"
          placeholder={placeholder}
          paramsRenderInput={params}
          InputProps={{
            ...params.InputProps,
            classes: {
              focused: textFieldClasses.cssFocused,
              notchedOutline: `${textFieldClasses.notchedOutline} ${disabled ? 'disabled' : ''}`,
            },
            inputProps: {
              readOnly,
              ...params.inputProps,
              autoComplete: 'new-password',
            },
          }}
          {...inputProps}
        />
    )}
      disabled={disabled}
      defaultValue={options.find((e) => e.value === defaultValue) || ''}
      {...props}
    />
  )
}
Dropdown.defaultProps = {
    label: '',
    options: [],
    placeholder: '',
    inputProps: {},
    defaultValue: '',
    readOnly: true,
    disabled: false,
  }

  Dropdown.propTypes = {
    classes: PropTypes.shape().isRequired,
    options: PropTypes.arrayOf(PropTypes.shape()),
    label: PropTypes.string,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.string,
    readOnly: PropTypes.bool,
    inputProps: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]),
    disabled: PropTypes.bool,
  }

  export default withStyles(style)(Dropdown)
