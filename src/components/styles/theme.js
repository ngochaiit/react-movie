import { createMuiTheme } from '@material-ui/core/styles'
import overrides from './overrides'
import typography from './typography'
import palette from './pelette'

const theme = createMuiTheme({
  shadows: Array(25).fill('0px 1px 3px #3F3F4429'),
  typography,
  palette,
  overrides,
})

export default theme
