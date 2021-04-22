import React from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Header} from '../../common/components';
import {COLORS, STYLE} from '../../utils/Theme';

import {styles} from './styles';

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

const DetailsCar = ({navigation}) => {
  return (
    <View style={STYLE.container}>
      <Header back title="Thông tin chi tiết" />
      <ScrollView style={STYLE.flexScreen}>
        <View>
          <Image
            source={require('../../assets/img/data/MercedesBenzE300AMG_white.jpg')}
            style={styles.bannerDetailCar}
            resizeMode="cover"
          />
          <View style={styles.containerGeneral}>
            <View style={styles.infoGeneral}>
              <Text style={styles.nameCar}>Mercedes-Benz E300AMG</Text>
              <Text style={styles.price}>1.500.000 VNĐ</Text>
            </View>

            <View style={styles.infoGeneral}>
              <Text style={styles.member}>Nguyen Ngoc Minh</Text>
              <Text style={styles.desc}>
                Xe đời 2021 còn mới, chạy êm, nội thất đẹp, tiện nghi, có cửa
                hít ...
              </Text>
            </View>
            <View style={styles.infoDetails}>
              <View>
                <InfoCar
                  nameIcon="shield-checkmark-outline"
                  info="Mercedes-Benz"
                />
                <InfoCar nameIcon="today-outline" info="2021" />
                <InfoCar nameIcon="ios-flame-outline" info="Xăng" />
                <InfoCar nameIcon="people-outline" info="5 chổ" />
              </View>
              <View>
                <InfoCar nameIcon="pricetag-outline" info="E300" />
                <InfoCar nameIcon="ios-logo-ionic" info="Số tự động" />
                <InfoCar nameIcon="md-beaker-outline" info="8 lít" />
                <InfoCar nameIcon="car-outline" info="Sedan" />
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
