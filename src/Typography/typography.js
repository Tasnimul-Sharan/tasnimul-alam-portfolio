import { text } from '@fortawesome/fontawesome-svg-core';
import Typography from 'typography';
import fairyGatesTheme from 'typography-theme-fairy-gates';

fairyGatesTheme.baseFontSize = '20px';
fairyGatesTheme.baseLineHeight = 1.5;
fairyGatesTheme.overrideStyles = ({ rhythm }, options, styles) => ({
  'body': {
    margin: 0,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  },
  'code': {
    fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
  },
  'h1, h2, h3, h4, h5, h6': {
    marginTop: 0,
    marginBottom: 0,
    color: 'white',
  },
  'p': {
    marginBottom: 0,
  },
  'nav Link': {
    textDecoration: 'none',
    color: 'inherit',
  },
  'ul, li:hover': {
    color: 'white',
  },
});

const typography = new Typography(fairyGatesTheme);

export const { scale, rhythm, options } = typography;
typography.injectStyles();

export default typography;
