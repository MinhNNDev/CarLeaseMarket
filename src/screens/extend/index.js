import React from 'react';
import {Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import {connect} from 'react-redux';
import {LogOutAuthAction} from '../../common/redux/actions/AuthAction';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../../utils/Theme';
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
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.optionBar}>
        <Icon name={props.icon} />
        <Text style={styles.content}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Extend = props => {
  const {auth, logout} = props;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.containerUser}>
          <Image
            source={require('../../assets/img/blank.jpg')}
            style={styles.iconUser}
          />
          <Text style={styles.txtUser}>
            {auth.isLoggedIn ? auth.user.user.username : 'Đăng nhập/Đăng ký'}
            {/*
            phone: Số điện thoại
            username: Tên người dùng
            email: Email
             */}
          </Text>
        </View>
        <View style={styles.blockOptions}>
          <OptionsBar
            icon="user"
            title="Tài khoản"
            onPress={() =>
              navigation.navigate(`${auth.isLoggedIn ? 'Users' : 'Auth'}`, {
                auth,
              })
            }
          />
          <OptionsBar
            onPress={() => navigation.navigate('History')}
            icon="car"
            title="Lịch sử thuê xe"
          />
          {/*   <OptionsBar icon="car" title="Lịch sử cho thuê xe" />
          <OptionsBar icon="car" title="Quản lí thông tin xe" /> */}
        </View>
        <View style={styles.blockOptions}>
          <OptionsBar
            onPress={() => navigation.navigate('Support')}
            icon="customerservice"
            title="Hỗ trợ và tư vấn"
          />
          <OptionsBar
            onPress={() => navigation.navigate('Privacy')}
            icon="lock"
            title="Chính sách CarLease"
          />
          <OptionsBar
            onPress={() => navigation.navigate('Support')}
            icon="Safety"
            title="Góp ý"
          />
        </View>
        <View style={styles.blockOptions}>
          <OptionsBar
            onPress={() => navigation.navigate('Setting')}
            icon="setting"
            title="Cài đặt"
          />
          <OptionsBar
            onPress={() => navigation.navigate('About')}
            icon="info"
            title="CarLease"
          />
        </View>
        <View style={styles.blockOptions}>
          <OptionsBar
            icon="logout"
            title="Đăng xuất"
            onPress={() => logout(navigation)}
          />
        </View>
        <Text style={styles.version}>Version 1.4.3</Text>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.authState,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: navigation => {
      dispatch(LogOutAuthAction(navigation));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Extend);
