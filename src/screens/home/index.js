import React from 'react';
import {
  StatusBar,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {SIZES, STYLE} from '../../utils/Theme';
import {styles} from './styles';

const Header = () => {
  return (
    <>
      <StatusBar backgroundColor="transparent" />
      <View style={styles.header}>
        <View style={[STYLE.row, styles.containerUser]}>
          <Image
            source={require('../../assets/img/blank.jpg')}
            style={styles.iconUser}
          />
          <Text>Xin chào, Nguyễn Ngọc Minh</Text>
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

const Home = () => {
  const iconName = ['idcard', 'calendar', 'barschart', 'message1'];
  return (
    <View style={STYLE.container}>
      <Header />
      <ScrollView>
        <View style={styles.container}>
          <View style={STYLE.row}>
            <View style={styles.containerBox}>
              <Text>XE TỰ LÁI</Text>
              <MaterialIcons name="car" size={30} style={styles.iconHead} />
            </View>
            <View style={styles.containerBox}>
              <Text>XE CÓ LÁI</Text>
              <MaterialIcons name="car" size={30} style={styles.iconHead} />
            </View>
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
              <TouchableOpacity>
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
              <TouchableOpacity>
                <Text style={styles.txtContact}>Fanpage</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.txtContact}>Zalo</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
