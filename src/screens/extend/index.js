import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS, SIZES} from '../../utils/Theme';
import {styles} from './styles';

const Icon = ({name}) => {
  return (
    <AntDesign
      name={name}
      size={28}
      color={COLORS.darkgray}
      style={{marginHorizontal: 10}}
    />
  );
};

const OptionsBar = props => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.optionBar}>
        <Icon name={props.icon} />
        <Text style={styles.content}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Extend = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.containerUser}>
          <Image
            source={require('../../assets/img/blank.jpg')}
            style={styles.iconUser}
          />
          <Text style={styles.txtUser}>Đăng nhập/Đăng ký</Text>
        </View>
        <View style={styles.blockOptions}>
          <OptionsBar
            icon="user"
            title="Tài khoản"
            onPress={() => navigation.navigate('Auth')}
          />
          <OptionsBar icon="car" title="Lịch sử thuê xe" />
          <OptionsBar icon="car" title="Lịch sử cho thuê xe" />
          <OptionsBar icon="car" title="Quản lí thông tin xe" />
        </View>
        <View style={styles.blockOptions}>
          <OptionsBar icon="customerservice" title="Hỗ trợ và tư vấn" />
          <OptionsBar icon="lock" title="Chính sách CarLease" />
          <OptionsBar icon="Safety" title="Góp ý" />
        </View>
        <View style={styles.blockOptions}>
          <OptionsBar icon="setting" title="Cài đặt" />
          <OptionsBar icon="info" title="CarLease" />
        </View>
        <Text style={styles.version}>Version 1.4.3</Text>
      </ScrollView>
    </View>
  );
};

export default Extend;
