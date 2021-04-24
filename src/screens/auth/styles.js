import {StyleSheet} from 'react-native';

import {COLORS, SIZES} from '../../utils/Theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 270,
    height: 180,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    padding: 25,
  },
  listTab: {
    flexDirection: 'row',
  },
  wrapper: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingVertical: 10,
    borderBottomWidth: 3,
    borderBottomColor: COLORS.primary,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'gray',
  },
  btnLog: {
    marginVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.radius,
    height: 50,
    backgroundColor: COLORS.primary,
  },
  footer: {
    paddingHorizontal: 40,
    paddingVertical: 5,
  },
  footerText: {
    fontSize: 16,
    color: 'gray',
    fontWeight: '600',
    textAlign: 'center',
  },
  listButtonAccount: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  box: {
    width: 20,
    height: 20,
    backgroundColor: '#F8F9FA',
    borderWidth: 1,
    borderColor: '#D3D4D5',
    borderRadius: 4,
  },
  policy: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    marginBottom: 40,
  },
  policyText: {
    fontSize: 16,
    color: COLORS.gray,
    fontWeight: '500',
    marginLeft: 10,
  },
  policyTextColor: {
    color: COLORS.primary,
  },
});
