import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import {Header} from '../../common/components';
import {formatCurrency} from '../../common/support/formatCurrency';
import {COLORS, SIZES} from '../../utils/Theme';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import {connect} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';

const InfoBar = props => {
  return (
    <View style={styles.infoBarConfirm}>
      <Text>{props.title}</Text>
      <Text>{props.price} VNĐ</Text>
    </View>
  );
};

const Invoice = props => {
  const navigation = useNavigation();
  const route = useRoute();

  const {item, dateIntance} = route.params;
  const {auth} = props;

  console.log('datePicker', dateIntance);

  const handelInvoice = () => {
    axios
      .get('http://45.119.212.43:1337/cars/' + item.id)
      .then(resVIP => {
        if (resVIP.status === 200 && resVIP.data.isRentaled === false) {
          axios
            .post('http://45.119.212.43:1337/rentals', {
              car: item.id,
              customer: auth.user.user.id,
              startDate: '2021-05-13',
              endDate: '2021-05-14',
              remarks: 'ghi chú thuê xe',
            })
            .then(res => {
              if (res.status === 200) {
                axios
                  .put('http://45.119.212.43:1337/cars/' + item.id, {
                    isRentaled: true,
                  })
                  .then(response => {
                    Toast.hide();
                    Toast.show({
                      type: 'success',
                      text1: 'Thành công',
                    });
                    Alert.alert(
                      'Đặt xe thành công',
                      `Chúng tôi sẽ xác nhận thông tin và gửi thông tin liên hệ cho bạn\nĐịa chỉ nhận xe: ${item.address}, ${item.province}`,
                    );

                    setTimeout(() => {
                      navigation.goBack();
                      navigation.goBack();
                    }, 3000);
                  })
                  .catch(err => {
                    console.error(err);
                  });
              }
            })
            .catch(err => {
              console.error(err);
              Toast.hide();
              Toast.show({
                type: 'error',
                text1: 'Lỗi',
                text2: 'Có lỗi xảy ra',
              });
            });
        } else {
          Alert.alert('Đặt xe không thành công', 'Xe đã được thuê rồi');
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <>
      <Header back title="Xác nhận đặt xe" />
      <View style={styles.container}>
        <View style={styles.block}>
          <InfoBar title="Đơn giá thuê" price={formatCurrency(item.price)} />
          {/* <View style={styles.infoBarConfirm}>
            <Text>Ngày nhận xe</Text>
            <Text>27/04/2021</Text>
          </View>
          <View style={styles.infoBarConfirm}>
            <Text>Ngày trả xe</Text>
            <Text>30/04/2021</Text>
          </View> */}
        </View>
        <View style={styles.block}>
          <InfoBar title="Giá ngày thường" price={formatCurrency(item.price)} />
          <InfoBar title="Giá cuối tuần" price="0" />
          <InfoBar title="Giá ngày lễ" price="0" />
          <InfoBar title="Giảm giá" price="0" />
          <View style={styles.infoBarConfirm}>
            <Text>Số ngày</Text>
            <Text>{dateIntance} ngày</Text>
          </View>
          <View style={styles.infoBarConfirm}>
            <Text style={styles.txtTitle}>Tổng tiền</Text>
            <Text style={styles.txtSumPrice}>
              {formatCurrency(item.price * dateIntance)} VND
            </Text>
          </View>
        </View>
        <View style={styles.block}>
          <Text style={styles.txtTitle}>Thông tin thanh toán</Text>
          <InfoBar
            title="Tiền cọc"
            price={formatCurrency(
              parseFloat((item.price * dateIntance * 30) / 100),
            )}
          />
          <InfoBar
            title="Thanh toán cho chủ xe"
            price={formatCurrency(
              item.price * dateIntance -
                parseFloat((item.price * dateIntance * 30) / 100),
            )}
          />
        </View>
        <TouchableOpacity
          onPress={handelInvoice}
          style={styles.buttonConfirmInvoice}>
          <Text style={styles.txtButton}>Thanh toán</Text>
          <Text style={styles.txtDescButton}>
            Ứng dụng và chủ xe sẽ liên hệ sớm đến bạn
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.authState,
  };
};

export default connect(mapStateToProps)(Invoice);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
  },
  infoBarConfirm: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  block: {
    marginTop: 30,
    padding: 10,
    width: SIZES.width - 40,
    borderRadius: 4,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOpacity: 0.3,
    elevation: 5,
  },

  buttonConfirmInvoice: {
    position: 'absolute',
    bottom: 0,
    width: SIZES.width,
    height: 50,
    marginHorizontal: 20,
    borderRadius: 4,
    backgroundColor: COLORS.primary,
    shadowColor: COLORS.black,
    shadowOpacity: 0.3,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtTitle: {
    fontSize: 14,
    color: COLORS.black,
    fontWeight: 'bold',
  },
  txtSumPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.success,
  },
  txtButton: {
    fontSize: 18,
    color: COLORS.white,
  },
  txtDescButton: {
    fontSize: 12,
    color: COLORS.white,
  },
});
