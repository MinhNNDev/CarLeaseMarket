import React from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
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

const DetailsCar = ({navigation, route}) => {
  const {item} = route.params;
  return (
    <View style={STYLE.container}>
      <Header back title="Thông tin chi tiết" />
      <ScrollView style={STYLE.flexScreen}>
        <View>
          <Image
            source={{
              uri: `http://45.119.212.43:1337${
                item.images.length > 0 ? item.images[0].url : ''
              }`,
            }}
            style={styles.bannerDetailCar}
            resizeMode="cover"
          />
          <View style={styles.containerGeneral}>
            <View style={styles.infoGeneral}>
              <Text style={styles.nameCar}>{item.title}</Text>
              <Text style={styles.price}>{formatCurrency(item.price)} VNĐ</Text>
            </View>

            <View style={styles.infoGeneral}>
              <Text style={styles.member}>Nguyen Ngoc Minh</Text>
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
            <View>
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
            </View>
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
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate('Invoice')}
        style={styles.buttonOpenBill}>
        <Text style={styles.txtButton}>Xem hoá đơn chi tiết</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailsCar;
