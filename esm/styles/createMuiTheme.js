import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import deepmerge from 'deepmerge'; // < 1kb payload overhead when lodash/merge is > 3kb.

import isPlainObject from 'is-plain-object';
import warning from 'warning';
import createBreakpoints from './createBreakpoints';
import createMixins from './createMixins';
import createPalette from './createPalette';
import createTypography from './createTypography';
import shadows from './shadows';
import shape from './shape';
import createSpacing from './createSpacing';
import transitions from './transitions';
import zIndex from './zIndex';

function createMuiTheme() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _options$breakpoints = options.breakpoints,
      breakpointsInput = _options$breakpoints === void 0 ? {} : _options$breakpoints,
      _options$mixins = options.mixins,
      mixinsInput = _options$mixins === void 0 ? {} : _options$mixins,
      _options$palette = options.palette,
      paletteInput = _options$palette === void 0 ? {} : _options$palette,
      shadowsInput = options.shadows,
      spacingInput = options.spacing,
      _options$typography = options.typography,
      typographyInput = _options$typography === void 0 ? {} : _options$typography,
      other = _objectWithoutProperties(options, ["breakpoints", "mixins", "palette", "shadows", "spacing", "typography"]);

  var palette = createPalette(paletteInput);
  var breakpoints = createBreakpoints(breakpointsInput);
  var spacing = createSpacing(spacingInput);

  var muiTheme = _extends({
    breakpoints: breakpoints,
    direction: 'ltr',
    mixins: createMixins(breakpoints, spacing, mixinsInput),
    overrides: {},
    // Inject custom styles
    palette: palette,
    props: {},
    // Inject custom props
    shadows: shadowsInput || shadows,
    typography: createTypography(palette, typographyInput),
    spacing: spacing
  }, deepmerge({
    shape: shape,
    transitions: transitions,
    zIndex: zIndex
  }, other, {
    isMergeableObject: isPlainObject
  }));

  if (process.env.NODE_ENV !== 'production') {
    var pseudoClasses = ['checked', 'disabled', 'error', 'focused', 'focusVisible', 'required', 'expanded', 'selected'];

    var traverse = function traverse(node, parentKey) {
      var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var key; // eslint-disable-next-line guard-for-in, no-restricted-syntax

      for (key in node) {
        var child = node[key];

        if (depth === 1) {
          if (key.indexOf('Mui') === 0 && child) {
            traverse(child, key, depth + 1);
          }
        } else if (pseudoClasses.indexOf(key) !== -1 && Object.keys(child).length > 0) {
          process.env.NODE_ENV !== "production" ? warning(false, ["Material-UI: the `".concat(parentKey, "` component increases ") + "the CSS specificity of the `".concat(key, "` internal state."), 'You can not override it like this: ', JSON.stringify(node, null, 2), '', 'Instead, you need to use the $ruleName syntax:', JSON.stringify({
            root: _defineProperty({}, "&$".concat(key), child)
          }, null, 2), '', 'https://material-ui.com/r/pseudo-classes-guide'].join('\n')) : void 0; // Remove the style to prevent global conflicts.

          node[key] = {};
        }
      }
    };

    traverse(muiTheme.overrides);
  }

  process.env.NODE_ENV !== "production" ? warning(muiTheme.shadows.length === 25, 'Material-UI: the shadows array provided to createMuiTheme should support 25 elevations.') : void 0;
  return muiTheme;
}

export default createMuiTheme;