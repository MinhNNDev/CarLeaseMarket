import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/Theme';
export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    height: 60,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOpacity: 0.7,
    elevation: 7,
  },
  name: {
    color: COLORS.black,
    fontSize: 20,
    fontWeight: 'bold',
  },
  listTab: {
    marginVertical: 10,
    flexDirection: 'row',
  },
  wrapper: {
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 10,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingVertical: 10,
    borderBottomWidth: 3,
    borderBottomColor: COLORS.lightGray,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'gray',
  },
  containerEmptyNotify: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgNotifyEmpty: {
    width: 240,
    height: 250,
  },
  containerItemNotify: {
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.lightGray,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  imgIcNotifyRental: {
    width: 50,
    height: 50,
    margin: 10,
  },
  itemContent: {
    flex: 1,
    flexDirection: 'column',
  },
  txtTitle: {
    fontSize: 13,
    fontWeight: '700',
  },
  txtDesc: {
    fontSize: 13,
  },
  txtTime: {
    fontSize: 12,
    color: COLORS.primary,
  },
});
