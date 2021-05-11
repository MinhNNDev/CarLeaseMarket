import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../utils/Theme';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerListCar: {
    flex: 1,
    marginTop: 10,
    alignItems: 'center',
  },
  containerSelectDate: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: -10,
  },
  btnPickDate: {
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    shadowColor: COLORS.black,
    shadowOpacity: 0.7,
    elevation: 5,
  },
  containerItemCar: {
    width: SIZES.width - 60,
    height: 230,
    backgroundColor: COLORS.white,
    marginVertical: 15,
    marginHorizontal: 20,
    borderRadius: SIZES.radius,
    shadowColor: COLORS.black,
    shadowOpacity: 0.7,
    elevation: 5,
  },
  bannerItemPostCar: {
    width: SIZES.width - 60,
    height: 180,
  },
  infoCarGen: {
    paddingHorizontal: 10,
  },
  rowPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameCar: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  priceCar: {
    fontSize: 13,
    color: COLORS.primary,
  },
  instance: {
    fontSize: 12,
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
