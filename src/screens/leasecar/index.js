import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InputValue from '../../common/components/InputValue';
import {STYLE} from '../../utils/Theme';

import {styles} from './styles';

const ItemPostCar = ({navigation}) => {
  return (
    <TouchableOpacity style={styles.containerItemCar}>
      <Image
        source={require('../../assets/img/data/MercedesBenzE300AMG_white.jpg')}
        style={styles.bannerItemPostCar}
      />
      <View style={styles.infoCarGen}>
        <Text style={styles.nameCar}>Mercedes-Benz E300AMG</Text>
        <View style={STYLE.RowBetweenAlign}>
          <Text style={styles.instance}>Cách bạn 538m</Text>
          <Text style={styles.priceCar}>Giá: 800.000 VNĐ</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const LeaseCar = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dateTime, setDateTime] = useState('30/4');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = date => {
    console.log('A date has been picked: ', date);
    hideDatePicker();
  };
  const onDateChange = (event, selectedDate) => {
    setDateTime(selectedDate);
  };
  return (
    <View style={STYLE.container}>
      <View style={styles.inpSearch}>
        <InputValue
          icon="map-pin"
          placeholder="Nhập địa chỉ để tìm chính xác hơn..."
        />
      </View>

      <View style={styles.containerSelectDate}>
        <TouchableOpacity onPress={showDatePicker} style={styles.btnPickDate}>
          <Text style={styles.titleDate}>Ngày nhận xe</Text>
          <Text style={styles.dateSelected}>15/04</Text>
        </TouchableOpacity>
        <Ionicons name="ios-arrow-forward" size={35} color="#31a34c" />
        <TouchableOpacity onPress={showDatePicker} style={styles.btnPickDate}>
          <Text style={styles.titleDate}>Ngày trả xe</Text>
          <Text style={styles.dateSelected}>30/04</Text>
        </TouchableOpacity>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        onDateChange={date => setDateTime(date)}
      />
      <View style={styles.containerListCar}>
        <ScrollView>
          <ItemPostCar />
          <ItemPostCar />
          <ItemPostCar />
          <ItemPostCar />
          <ItemPostCar />
          <ItemPostCar />
          <ItemPostCar />
          <ItemPostCar />
        </ScrollView>
        {/* <FlatList /> */}
      </View>
    </View>
  );
};

export default LeaseCar;
