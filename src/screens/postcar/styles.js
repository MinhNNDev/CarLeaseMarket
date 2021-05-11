import {StyleSheet, Text, View} from 'react-native';
import {COLORS, SIZES, STYLE} from '../../utils/Theme';

const IMAGE_WIDTH = (SIZES.width - 24) / 3;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  media: {
    marginLeft: 6,
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH,
    marginBottom: 6,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  containerList: {
    paddingTop: 10,
  },
  main: {
    marginVertical: 20,
  },
  title: {
    marginHorizontal: 20,
    fontSize: 17,
    fontWeight: 'bold',
  },
  openText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  openPicker: {
    marginTop: 10,
    height: 100,
    marginHorizontal: 20,
    borderColor: 'gray',
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDelete: {
    paddingHorizontal: 6,
    paddingVertical: 3,
    position: 'absolute',
    top: 6,
    right: 6,
    backgroundColor: '#ffffff92',
    borderRadius: 4,
  },
  buttonSave: {
    marginTop: 10,
    height: 50,
    marginHorizontal: 20,
    borderRadius: 4,
    backgroundColor: COLORS.primary,
    shadowColor: COLORS.black,
    shadowOpacity: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    margin: 20,
  },
  inputContent: {
    marginBottom: 20,
    backgroundColor: '#f8f9fa',
    borderColor: '#d3d4d5',
    borderWidth: 1,
    borderRadius: 3,
  },
  mainPrice: {
    marginHorizontal: 20,
    marginVertical: 5,
  },
  inputPrice: {
    backgroundColor: '#f8f9fa',
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: 3,
  },
  addressCar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputAddress: {
    backgroundColor: '#f8f9fa',
    borderColor: COLORS.gray,
    borderWidth: 1,
    borderRadius: 3,
  },
  location: {
    width: (SIZES.width - 40) / 3 - 5,
  },
  province: {
    width: ((SIZES.width - 40) * 2) / 3 - 5,
  },
});
