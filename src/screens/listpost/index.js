import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Header} from '../../common/components';
import {SIZES, STYLE} from '../../utils/Theme';

const ListPostCar = ({navigation}) => {
  return (
    <View style={STYLE.container}>
      <Header
        title="Danh sách bài đăng"
        iconbar
        icon="form"
        onPress={() => navigation.navigate('PostCar')}
      />
      <FlatList
        style={styles.containerListPost}
        ListEmptyComponent={
          <>
            <Image
              source={require('../../assets/img/post_vehicle_management.png')}
              style={styles.imgNotifyEmpty}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate('PostCar')}
              style={styles.openPost}>
              <Text style={styles.txtNotify}>
                Bạn chưa có bài đăng nào, đăng tin ngay
              </Text>
            </TouchableOpacity>
          </>
        }
      />
    </View>
  );
};

export default ListPostCar;

const styles = StyleSheet.create({
  containerListPost: {
    flex: 1,
    margin: 10,
    alignContent: 'center',
  },
  openPost: {
    marginTop: 10,
    height: 50,
    marginHorizontal: 20,
    borderColor: 'gray',
    borderWidth: 0.5,
    // borderStyle: 'dashed',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgNotifyEmpty: {
    marginVertical: 20,
    width: 220,
    height: 170,
    marginHorizontal: 60,
  },
  txtNotify: {
    textAlign: 'center',
  },
});
