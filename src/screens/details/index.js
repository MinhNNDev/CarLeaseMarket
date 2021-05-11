import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Header} from '../../common/components';
import {COLORS, STYLE} from '../../utils/Theme';

import {styles} from './styles';
import {formatCurrency} from '../../common/support/formatCurrency';

const InfoCar = props => {
  return (
    <View style={styles.iconInfo}>
      <Ionicons
        name={props.nameIcon}
        size={22}
        color={props.color}
        style={styles.icon}
      />
      <Text style={styles.fontSize}>{props.info}</Text>
    </View>
  );
};

const DetailsCar = props => {
  const {auth} = props;
  console.log(auth);
  const navigation = useNavigation();
  const route = useRoute();
  const {item, dateIntance} = route.params;

  return (
    <View style={STYLE.container}>
      <Header back title="Thông tin chi tiết" />
      <ScrollView style={STYLE.flexScreen}>
        <View>
          <FlatList
            horizontal
            pagingEnabled
            data={item.images}
            // eslint-disable-next-line no-shadow
            keyExtractor={item => item.index}
            renderItem={image => {
              return (
                <Image
                  source={{
                    uri: `http://45.119.212.43:1337${image.item.url}`,
                  }}
                  style={styles.bannerDetailCar}
                  resizeMode="cover"
                />
              );
            }}
          />
          <View style={styles.containerGeneral}>
            <View style={styles.infoGeneral}>
              <Text style={styles.nameCar}>{item.title}</Text>
              <Text style={styles.price}>{formatCurrency(item.price)} VNĐ</Text>
              <Text style={styles.member}>Số ngày thuê xe: {dateIntance}</Text>
            </View>

            <View style={styles.infoGeneral}>
              <Text style={styles.member}>
                {auth.isLoggedIn ? auth.user.user.fullname : '...'}
              </Text>
              <Text style={styles.desc}>{item.description}</Text>
            </View>
            <View style={styles.infoDetails}>
              <View>
                <InfoCar
                  nameIcon="shield-checkmark-outline"
                  info={item.brand.name}
                />
                <InfoCar nameIcon="today-outline" info={item.year} />
                <InfoCar nameIcon="ios-flame-outline" info={item.fuel} />
                <InfoCar nameIcon="people-outline" info={item.seats} />
              </View>
              <View>
                <InfoCar nameIcon="pricetag-outline" info="E300" />
                <InfoCar nameIcon="ios-logo-ionic" info={item.gear} />
                <InfoCar
                  nameIcon="md-beaker-outline"
                  info={item.fuelCapacity}
                />
                <InfoCar nameIcon="car-outline" info={item.classification} />
              </View>
            </View>
            <View>
              <Text style={styles.title}>Yêu cầu khi nhận xe</Text>
              <InfoCar
                nameIcon="laptop-outline"
                color={COLORS.success}
                info="CNND/Hộ khẩu"
              />
              <InfoCar
                nameIcon="card-outline"
                color={COLORS.success}
                info="Bằng lái B1/B2/C"
              />
            </View>
            <View style={STYLE.flexScreen}>
              <Text style={styles.title}>Thế chấp khi nhận xe</Text>
              <InfoCar
                nameIcon="ios-checkmark-circle"
                color={COLORS.success}
                info="Tiền mặt, xe máy (kèm cà vẹt), hoặc vật có giá trị tương đương =< 15.000.000"
              />
              <InfoCar
                nameIcon="ios-checkmark-circle"
                color={COLORS.success}
                info="Hộ Khẩu/KT3"
              />
              <InfoCar
                nameIcon="ios-checkmark-circle"
                color={COLORS.success}
                info="Bằng lái B1/B2/C"
              />

              <View>
                <Text style={styles.title}>Giới hạn về quãng đường</Text>
                <InfoCar
                  nameIcon="ios-checkmark-circle"
                  color={COLORS.warring}
                  info="300km/ngày, + 10.000/km (khi S > 300km)"
                />
              </View>
              <View>
                <Text style={styles.title}>Giao xe tận nơi</Text>
                <InfoCar
                  nameIcon="ios-checkmark-circle"
                  color={COLORS.warring}
                  info="Miễn phí trong bán kính 5km, + 10.000/km (khi S > 5km) "
                />
              </View>

              <View>
                <Text style={styles.title}>
                  Địa chỉ nhận xe (Sau khi đặt xe sẽ nhận được địa chỉ chính
                  xác):
                </Text>
                <InfoCar
                  nameIcon="ios-checkmark-circle"
                  color={COLORS.warring}
                  info={item.province}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate('Invoice', {item, dateIntance})}
        style={styles.buttonOpenBill}>
        <Text style={styles.txtButton}>Đặt xe</Text>
        <Text style={styles.txtDescButton}>Xem hoá đơn chi tiết</Text>
      </TouchableOpacity>
    </View>
  );
};
const mapStateToProps = state => {
  return {
    auth: state.authState,
  };
};

export default connect(mapStateToProps)(DetailsCar);
