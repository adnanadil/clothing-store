import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from './button.styles.jsx';

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google',
  inverted: 'inverted',
};


/* This is a special type of map function to which we give a button type
if there is no button type sent then by default we set the base which 
returns the base button. So the map function is {} and the [buttonType] after
that returns the type of button that we will display */
const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);
  

const Button = ({ children, buttonType, ...otherProps }) => {

  const CustomButton = getButton(buttonType);

  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
