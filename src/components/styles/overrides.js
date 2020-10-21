export default {
    MuiTablePagination: {
      root: {
        overflow: 'hidden',
      },
    },
    MuiPaper: {
      root: {
        position: 'relative',
      },
    },
    MuiTableCell: {
      root: {
        padding: 12,
        fontWeight: 'inherit',
      },
      head: {
        color: '#6D7D8B',
        background: '#F4F6F8',
        fontWeight: 400,
        fontSize: 13,
      },
      footer: {
        color: 'rgba(0, 0, 0, 0.87)',
        fontSize: '0.875rem',
        fontWeight: 600,
      },
    },
    MuiInputLabel: {
      outlined: {
        fontSize: 14,
        lineHeight: 1.4,
        '&:not(.MuiInputLabel-shrink)': {
          maxWidth: 'calc(100% - 28px)',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
      },
    },
    MuiOutlinedInput: {
      input: {
        padding: '13.5px 14px',
        '&::placeholder': {
          fontSize: 14,
        },
      },
      inputMarginDense: {
        paddingTop: '13.5px',
        paddingBottom: '13.5px',
      },
    },
    MuiFormHelperText: {
      contained: {
        marginLeft: 3,
        marginRight: 3,
      },
    },
  }
