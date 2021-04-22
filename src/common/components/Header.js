import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../utils/Theme';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Header = props => {
  const navigation = useNavigation();
  const {back, iconbar} = props;
  return (
    <View style={styles.header}>
      {back && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={23} />
        </TouchableOpacity>
      )}
      <Text style={styles.name}>{props.title}</Text>
      {iconbar ? (
        <TouchableOpacity onPress={props.onPress}>
          <AntDesign name={props.icon} size={23} />
        </TouchableOpacity>
      ) : (
        <View style={styles.view} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
  view: {
    width: 20,
  },
});

export default Header;
