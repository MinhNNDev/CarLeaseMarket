import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {COLORS, SIZES, STYLE} from '../../utils/Theme';

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
          {/* <ImageBackground> */}

          {/* </ImageBackground> */}
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
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
    
    shadowColor: '#000',
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
    height: 200,
  },
  eventTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
});
