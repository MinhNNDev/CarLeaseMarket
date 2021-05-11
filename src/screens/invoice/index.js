import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import {Header} from '../../common/components';
import {formatCurrency} from '../../common/support/formatCurrency';
import {COLORS, SIZES} from '../../utils/Theme';

const InfoBar = props => {
  return (
    <View style={styles.infoBarConfirm}>
      <Text>{props.title}</Text>
      <Text>{props.price} VNĐ</Text>
    </View>
  );
};

const Invoice = ({navigation, route}) => {
  const {item, dateIntance} = route.params;

  const handelInvoice = () => {
    Alert.alert(
      'Đặt xe thành công',
      `Chúng tôi sẽ xác nhận thông tin và gửi thông tin liên hệ cho bạn\nĐịa chỉ nhận xe: ${item.address}, ${item.province}`,
    );
    setTimeout(() => {
      navigation.goBack();
    }, 3000);
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

export default Invoice;

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
