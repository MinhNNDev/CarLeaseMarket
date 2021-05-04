import {StyleSheet} from 'react-native';
import {COLORS, SIZES, STYLE} from '../../utils/Theme';
export const styles = StyleSheet.create({
  bannerDetailCar: {
    width: SIZES.width,
    height: (SIZES.height * 30) / 100,
  },
  containerGeneral: {
    paddingTop: 5,
    marginHorizontal: 10,
    paddingBottom: 70,
  },
  infoGeneral: {
    paddingBottom: 10,
    borderBottomColor: COLORS.gray,
    borderBottomWidth: 0.5,
  },
  nameCar: {
    fontSize: 20,
    fontWeight: '700',
  },
  price: {
    color: COLORS.primary,
    fontSize: 18,
  },
  member: {
    paddingVertical: 5,
    color: COLORS.black,
    fontSize: 18,
  },
  desc: {
    color: COLORS.gray,
    fontSize: 16,
    padding: 10,
    borderRadius: SIZES.radiusLarge,
    backgroundColor: COLORS.primaryOpacity,
  },
  infoDetails: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconInfo: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 5,
  },
  icon: {
    marginHorizontal: 10,
  },
  fontSize: {
    fontSize: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.gray,
  },
  buttonOpenBill: {
    position: 'absolute',
    zIndex: 100,
    bottom: 0,
    width: SIZES.width,
    height: 50,
    borderRadius: 4,
    backgroundColor: COLORS.primary,
    shadowColor: COLORS.black,
    shadowOpacity: 0.3,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtButton: {
    fontSize: 18,
    color: COLORS.white,
  },
  txtDescButton: {
    fontSize: 12,
    color: COLORS.white,
  },
});
