import {
  createMuiTheme,
  createStyles,
  makeStyles,
  responsiveFontSizes,
  StyleRules,
  Theme as AugmentedTheme,
} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },
});
export const appTheme = responsiveFontSizes(theme);
const CLASS_PREFIX = 'rt-scheduler';

export const useStyles = (mixStyleWithThem: (theme: AugmentedTheme) => StyleRules) => (
  makeStyles(
    (indexTheme: AugmentedTheme) => createStyles(mixStyleWithThem(indexTheme)),
    { name: CLASS_PREFIX /* dev env works only */ },
  )
);