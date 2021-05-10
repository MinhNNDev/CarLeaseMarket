import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../utils/Theme';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerItemCar: {
    width: SIZES.width - 40,
    height: 80,
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    marginVertical: 15,
    marginHorizontal: 10,
    borderRadius: SIZES.radius,
    shadowColor: COLORS.black,
    shadowOpacity: 0.7,
    elevation: 5,
  },
  bannerItemPostCar: {
    width: 120,
    height: 80,
  },
  infoCarGen: {
    paddingHorizontal: 10,
  },
  nameCar: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  priceCar: {
    fontSize: 13,
    color: COLORS.primary,
  },
  containerListPost: {
    flex: 1,
    margin: 10,
    alignContent: 'center',
  },
  openPost: {
    marginTop: 10,
    height: 50,
    marginHorizontal: 20,
    borderColor: 'gray',
    borderWidth: 0.5,
    // borderStyle: 'dashed',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgNotifyEmpty: {
    marginVertical: 20,
    width: 220,
    height: 170,
    marginHorizontal: 60,
  },
  txtNotify: {
    textAlign: 'center',
  },
});
