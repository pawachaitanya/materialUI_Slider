import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import warning from 'warning';
import { isFilled, isAdornedStart } from '../InputBase/utils';
import withStyles from '../styles/withStyles';
import { capitalize } from '../utils/helpers';
import { isMuiElement } from '../utils/reactHelpers';
import FormControlContext from './FormControlContext';
export const styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'inline-flex',
    flexDirection: 'column',
    position: 'relative',
    // Reset fieldset default style.
    minWidth: 0,
    padding: 0,
    margin: 0,
    border: 0,
    verticalAlign: 'top' // Fix alignment issue on Safari.

  },

  /* Styles applied to the root element if `margin="normal"`. */
  marginNormal: {
    marginTop: 16,
    marginBottom: 8
  },

  /* Styles applied to the root element if `margin="dense"`. */
  marginDense: {
    marginTop: 8,
    marginBottom: 4
  },

  /* Styles applied to the root element if `fullWidth={true}`. */
  fullWidth: {
    width: '100%'
  }
};
/**
 * Provides context such as filled/focused/error/required for form inputs.
 * Relying on the context provides high flexibility and ensures that the state always stays
 * consistent across the children of the `FormControl`.
 * This context is used by the following components:
 *
 *  - FormLabel
 *  - FormHelperText
 *  - Input
 *  - InputLabel
 *
 * You can find one composition example below and more going to [the demos](/components/text-fields/#components).
 *
 * ```jsx
 * <FormControl>
 *   <InputLabel htmlFor="my-input">Email address</InputLabel>
 *   <Input id="my-input" aria-describedby="my-helper-text" />
 *   <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
 * </FormControl>
 * ```
 *
 * ⚠️Only one input can be used within a FormControl.
 */

const FormControl = React.forwardRef(function FormControl(props, ref) {
  const {
    children,
    classes,
    className,
    component: Component = 'div',
    disabled = false,
    error = false,
    fullWidth = false,
    hiddenLabel = false,
    margin = 'none',
    required = false,
    variant = 'standard'
  } = props,
        other = _objectWithoutPropertiesLoose(props, ["children", "classes", "className", "component", "disabled", "error", "fullWidth", "hiddenLabel", "margin", "required", "variant"]);

  const [adornedStart] = React.useState(() => {
    // We need to iterate through the children and find the Input in order
    // to fully support server-side rendering.
    let initialAdornedStart = false;

    if (children) {
      React.Children.forEach(children, child => {
        if (!isMuiElement(child, ['Input', 'Select'])) {
          return;
        }

        const input = isMuiElement(child, ['Select']) ? child.props.input : child;

        if (input && isAdornedStart(input.props)) {
          initialAdornedStart = true;
        }
      });
    }

    return initialAdornedStart;
  });
  const [filled, setFilled] = React.useState(() => {
    // We need to iterate through the children and find the Input in order
    // to fully support server-side rendering.
    let initialFilled = false;

    if (children) {
      React.Children.forEach(children, child => {
        if (!isMuiElement(child, ['Input', 'Select'])) {
          return;
        }

        if (isFilled(child.props, true)) {
          initialFilled = true;
        }
      });
    }

    return initialFilled;
  });
  const [focused, setFocused] = React.useState(false);

  if (disabled && focused) {
    setFocused(false);
  }

  let registerEffect;

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const registeredInput = React.useRef(false);

    registerEffect = () => {
      if (registeredInput.current) {
        process.env.NODE_ENV !== "production" ? warning(false, ['Material-UI: there are multiple InputBase components inside a FromControl.', 'This is not supported. It might cause infinite rendering loops.', 'Only use one InputBase.'].join('\n')) : void 0;
      }

      registeredInput.current = true;
      return () => {
        registeredInput.current = false;
      };
    };
  }

  const childContext = {
    adornedStart,
    disabled,
    error,
    filled,
    focused,
    hiddenLabel,
    margin,
    onBlur: () => {
      setFocused(false);
    },
    onEmpty: () => {
      if (filled) {
        setFilled(false);
      }
    },
    onFilled: () => {
      if (!filled) {
        setFilled(true);
      }
    },
    onFocus: () => {
      setFocused(true);
    },
    registerEffect,
    required,
    variant
  };
  return React.createElement(FormControlContext.Provider, {
    value: childContext
  }, React.createElement(Component, _extends({
    className: clsx(classes.root, className, margin !== 'none' && classes[`margin${capitalize(margin)}`], fullWidth && classes.fullWidth),
    ref: ref
  }, other), children));
});
process.env.NODE_ENV !== "production" ? FormControl.propTypes = {
  /**
   * The contents of the form control.
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes.object.isRequired,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.elementType,

  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   */
  disabled: PropTypes.bool,

  /**
   * If `true`, the label should be displayed in an error state.
   */
  error: PropTypes.bool,

  /**
   * If `true`, the component will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,

  /**
   * If `true`, the label will be hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   */
  hiddenLabel: PropTypes.bool,

  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   */
  margin: PropTypes.oneOf(['none', 'dense', 'normal']),

  /**
   * If `true`, the label will indicate that the input is required.
   */
  required: PropTypes.bool,

  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(['standard', 'outlined', 'filled'])
} : void 0;
export default withStyles(styles, {
  name: 'MuiFormControl'
})(FormControl);