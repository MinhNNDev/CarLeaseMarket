import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import {useQuery, gql} from '@apollo/client';

import Ionicons from 'react-native-vector-icons/Ionicons';
import InputValue from '../../common/components/InputValue';
import {STYLE} from '../../utils/Theme';

import {styles} from './styles';
import {formatCurrency} from '../../common/support/formatCurrency';

import {GET_CAR} from '../../service/graphql/queries/cars';

const ItemPostCar = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', {item})}
      style={styles.containerItemCar}>
      <Image
        source={{
          uri: `http://45.119.212.43:1337${
            item.images.length > 0 ? item.images[0].url : ''
          }`,
        }}
        style={styles.bannerItemPostCar}
      />
      <View style={styles.infoCarGen}>
        <Text style={styles.nameCar}>{item.title}</Text>
        <View style={STYLE.RowBetweenAlign}>
          <Text style={styles.instance}>{item.brand.name}</Text>
          <Text style={styles.priceCar}>
            Giá: {formatCurrency(item.price)} VNĐ
          </Text>
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

  const {loading, error, data} = useQuery(GET_CAR);
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }
  if (error) {
    console.error(error);
    return (
      <View style={styles.container}>
        <Text>Error :((</Text>
      </View>
    );
  }

  return (
    <View style={STYLE.container}>
      <View style={styles.inpSearch}>
        <InputValue
          icon="location"
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
      />
      <View style={styles.containerListCar}>
        <ScrollView>
          {data.cars.map(item => (
            <ItemPostCar item={item} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default LeaseCar;
