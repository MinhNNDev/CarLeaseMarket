import React from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Linking,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {SIZES, STYLE} from '../../utils/Theme';
import {styles} from './styles';

const Header = props => {
  return (
    <>
      <View style={styles.header}>
        <View style={[STYLE.row, styles.containerUser]}>
          <Image
            source={require('../../assets/img/blank.jpg')}
            style={styles.iconUser}
          />
          <Text>Xin chào, {props.phone}</Text>
        </View>
        <View style={STYLE.row}>
          <AntDesign name="wallet" size={20} style={styles.iconHead} />
          <AntDesign name="bells" size={20} style={styles.iconHead} />
          <AntDesign name="setting" size={20} style={styles.iconHead} />
        </View>
      </View>
    </>
  );
};

const Home = props => {
  const navigation = useNavigation();
  const {auth} = props;
  const iconName = ['idcard', 'calendar', 'barschart', 'message1'];
  return (
    <View style={STYLE.container}>
      <Header phone={auth.isLoggedIn ? auth.user.user.phone : '...'} />
      <ScrollView>
        <View style={styles.container}>
          <View style={STYLE.row}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Lease')}
              style={styles.containerBox}>
              <Text>THUÊ XE</Text>
              <MaterialIcons name="car" size={30} style={styles.iconHead} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('ListPost')}
              style={styles.containerBox}>
              <Text>CHO THUÊ XE</Text>
              <MaterialIcons name="car" size={30} style={styles.iconHead} />
            </TouchableOpacity>
          </View>
          <FlatList
            style={styles.FlatListIcon}
            horizontal
            data={iconName}
            keyExtractor={(item, index) => index.toString()}
            renderItem={item => {
              return (
                <View style={styles.containerTouchIcon}>
                  <TouchableOpacity>
                    <View style={styles.listTouchIcon}>
                      <AntDesign name={item.item} size={25} />
                    </View>
                  </TouchableOpacity>
                  <Text style={styles.toucdIconName}>{item.item}</Text>
                </View>
              );
            }}
          />
          <View style={styles.containerNews}>
            <View style={styles.containerEvent}>
              <View style={styles.eventTitle}>
                <Text>Ưu đãi nổi bật</Text>
                <AntDesign name="ellipsis1" size={18} />
              </View>
              <Image
                source={require('../../assets/img/lenghibanner.png')}
                style={styles.imgEvent}
              />
            </View>
          </View>
          <ImageBackground
            source={require('../../assets/img/black_bg.png')}
            style={styles.imgbgBlack}
            imageStyle={{borderRadius: SIZES.radius}}>
            <View style={styles.containerRent}>
              <View>
                <Text style={styles.txtRentCar}>BẠN MUỐN CHO THUÊ XE</Text>
                <Text style={[styles.txtRentCar, {fontSize: 8}]}>
                  Trở thành khách hàng đối tác của chúng tôi
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => Linking.openURL('http://google.com')}>
                <Text style={styles.txtSignUp}>Đăng ký</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <ImageBackground
            source={require('../../assets/img/blue_bg.png')}
            style={[styles.imgbgBlack, {marginBottom: 20, height: 80}]}
            imageStyle={{borderRadius: SIZES.radius}}>
            <Text style={styles.txtSocial}>facebook - Contact</Text>
            <View style={styles.containerRent}>
              <TouchableOpacity>
                <Text style={styles.txtContact}>Group</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => Linking.openURL('http://google.com')}>
                <Text style={styles.txtContact}>Fanpage</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => Linking.openURL('http://google.com')}>
                <Text style={styles.txtContact}>Zalo</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.authState,
  };
};

export default connect(mapStateToProps)(Home);
