import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');
export const BANNER_H = 350;
export const TOPNAVI_H = 50;

export const COLORS = {
  // base colors
  primary: '#4bcafb',
  secondary: '#4507A0',
  primaryOpacity: 'rgba(75, 202, 251, 0.2)',

  // gradient
  grStart: '#4bcafb',
  grEnd: '#4507A0',

  background: '#FFFFFF', // gray

  warring: '#rgba(204, 51, 0, 0.5)',
  success: '#rgba(153, 204, 51, 1)',
  error: '#rgba(255, 204, 0, 0.5)',

  // colors
  black: '#1E1F20',
  white: '#FFFFFF',

  gray: '#939597', // ANTONE  17-5104 TCX Ultimate Gray
  lightGray: '#C7C7C7',
  lightGray2: '#F6F6F7',
  darkgray: '#383838',
  cGray: '#ECECEC',

  transparent: 'transparent',
};

export const SIZES = {
  // global sizes
  radius: 4,
  radiusLarge: 8,
  // font sizes
  largeTitle: 36,
  h1: 28,
  h2: 24,
  h3: 20,
  h4: 16,
  p: 12,
  // app dimensions
  width,
  height,
};

// font family global
export const FONTS = {
  black: 'Raleway-Black',
  bold: 'Raleway-Bold',
  regular: 'Raleway-Regular',
};

export const STYLE = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  flexScreen: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  RowBetweenAlign: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const appTheme = {COLORS, SIZES, FONTS, STYLE};

export default appTheme;
