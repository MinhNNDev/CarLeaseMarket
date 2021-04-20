import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../utils/Theme';
export const styles = StyleSheet.create({
  optionBar: {
    flexDirection: 'row',
    marginVertical: 1,
    backgroundColor: COLORS.white,
    paddingVertical: 15,
    alignItems: 'center',
  },
  content: {
    fontSize: 17,
    fontWeight: '500',
    color: COLORS.darkgray,
  },
  blockOptions: {
    marginVertical: 10,
  },
  containerUser: {
    width: SIZES.width,
    height: (SIZES.height * 30) / 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },
  iconUser: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  txtUser: {
    margin: 10,
    fontSize: 20,
    color: COLORS.white,
    // fontWeight: 'bold',
  },
  version: {
    textAlign: 'center',
    color: COLORS.gray,
    fontSize: 14,
  },
});
