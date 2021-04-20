import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../utils/Theme';
export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOpacity: 0.7,
    elevation: 10,
  },
  iconUser: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: COLORS.lightGray,
    borderWidth: 2,
    marginHorizontal: 10,
  },
  iconHead: {
    marginHorizontal: 10,
  },
  containerUser: {
    width: (SIZES.width * 40) / 100,
    alignItems: 'center',
  },
  containerBox: {
    width: SIZES.width / 2 - 40,
    height: 100,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.radius,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 30,

    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  FlatListIcon: {
    marginBottom: 30,
  },
  listTouchIcon: {
    margin: 10,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    backgroundColor: COLORS.white,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  containerTouchIcon: {
    width: 90,
    alignItems: 'center',
  },
  toucdIconName: {
    fontSize: 12,
    color: COLORS.black,
  },
  containerNews: {
    width: SIZES.width - 20,
  },
  containerEvent: {
    paddingHorizontal: 20,
    backgroundColor: 'rgba(119, 197, 255, 0.2)',
    paddingBottom: 20,
  },
  imgEvent: {
    width: SIZES.width - 60,
    height: 180,
  },
  eventTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  imgbgBlack: {
    marginTop: 20,
    width: SIZES.width - 60,
    height: 100,
    justifyContent: 'center',
  },
  containerRent: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  txtRentCar: {
    color: COLORS.white,
    fontSize: 13,
  },
  txtSignUp: {
    fontSize: 13,
    color: COLORS.white,
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderWidth: 1,
    borderColor: COLORS.white,
  },
  txtSocial: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 10,
  },
  txtContact: {
    paddingHorizontal: 20,
    paddingVertical: 3,
    borderRadius: 20,
    backgroundColor: COLORS.white,
  },
});
