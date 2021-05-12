import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

import {useQuery} from '@apollo/client';

import Ionicons from 'react-native-vector-icons/Ionicons';
import InputValue from '../../common/components/InputValue';
import {STYLE} from '../../utils/Theme';

import {styles} from './styles';
import {formatCurrency} from '../../common/support/formatCurrency';

import {GET_CAR} from '../../service/graphql/queries/cars';
var dateIntance = 0;

const LeaseCar = () => {
  // Search Fillter
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [masterData, setMasterData] = useState([]);
  //----------------//
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isDatePickerVisibleE, setDatePickerVisibilityE] = useState(false);
  const [startDate, setStartDate] = useState(
    new Date().getDate().toString().padStart(2, '0'),
  );
  const [startMonth, setStartMonth] = useState(
    (new Date().getMonth() + 1).toString().padStart(2, '0'),
  );
  const [endDate, setEndDate] = useState(
    (new Date().getDate() + 1).toString().padStart(2, '0'),
  );
  const [endMonth, setEndMonth] = useState(
    (new Date().getMonth() + 1).toString().padStart(2, '0'),
  );

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const showDatePickerE = () => {
    setDatePickerVisibilityE(true);
  };

  const hideDatePickerE = () => {
    setDatePickerVisibilityE(false);
  };
  const handleConfirmStartDate = date => {
    hideDatePicker();
    setStartDate(moment(date).format('DD'));
    setStartMonth(moment(date).format('MM'));
  };
  const handleConfirmEndDate = date => {
    hideDatePickerE();
    setEndDate(moment(date).format('DD'));
    setEndMonth(moment(date).format('MM'));
  };

  const intStartDate = parseInt(startDate, 10);
  const intStartMonth = parseInt(startMonth, 10);
  const intEndtDate = parseInt(endDate, 10);
  const intEndMonth = parseInt(endMonth, 10);

  var ndate = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (intEndMonth - intStartMonth > 6) {
    setEndDate('--');
    setEndMonth('--');
    Alert.alert('Ngoài thời gian cho phép', 'Hãy chọn lại ngày kết thúc');
  } else if (intStartMonth === intEndMonth) {
    dateIntance = intEndtDate - intStartDate + 1;
    if (dateIntance < 0) {
      setEndDate('--');
      setEndMonth('--');
      Alert.alert('Thời gian không hợp lệ', 'Hãy chọn lại ngày kết thúc');
    }
  } else if (intEndMonth > intStartMonth) {
    dateIntance = ndate[intStartMonth - 1] - intStartDate + intEndtDate;
  }

  const {loading, error, data} = useQuery(GET_CAR);
  useEffect(() => {
    if (!loading && data) {
      setFilteredData(data.cars);
      setMasterData(data.cars);
    }
  }, [loading, data]);
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

  const ItemPostCar = ({item}) => {
    const navigation = useNavigation();
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Details', {
            item,
            dateIntance,
            startDate,
            startMonth,
            endDate,
            endMonth,
          })
        }
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
            <Text style={styles.instance}>{item.province}</Text>
            <Text style={styles.priceCar}>
              Giá: {formatCurrency(item.price)} VND
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const searchFilterFunction = text => {
    if (text) {
      const newData = masterData.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
      setSearch(text);
    } else {
      setFilteredData(masterData);
      setSearch(text);
    }
  };

  return (
    <View style={STYLE.container}>
      <View style={styles.inpSearch}>
        <InputValue
          icon="location"
          placeholder="Nhập địa chỉ để tìm chính xác hơn..."
          onChangeText={text => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
        />
      </View>

      <View style={styles.containerSelectDate}>
        <TouchableOpacity onPress={showDatePicker} style={styles.btnPickDate}>
          <Text style={styles.titleDate}>Ngày nhận xe</Text>
          <Text style={styles.dateSelected}>
            {startDate}/{startMonth}
          </Text>
          <DateTimePickerModal
            minimumDate={new Date()}
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirmStartDate}
            onCancel={hideDatePicker}
          />
        </TouchableOpacity>
        <Ionicons name="ios-arrow-forward" size={35} color="#31a34c" />
        <TouchableOpacity onPress={showDatePickerE} style={styles.btnPickDate}>
          <Text style={styles.titleDate}>Ngày trả xe</Text>
          <Text style={styles.dateSelected}>
            {endDate}/{endMonth}
          </Text>
        </TouchableOpacity>
        <DateTimePickerModal
          minimumDate={new Date()}
          isVisible={isDatePickerVisibleE}
          mode="date"
          onConfirm={handleConfirmEndDate}
          onCancel={hideDatePickerE}
        />
      </View>
      <View style={styles.containerListCar}>
        <FlatList
          data={filteredData}
          style={styles.containerListPost}
          keyExtractor={item => item.id}
          renderItem={item => <ItemPostCar item={item.item} />}
        />
      </View>
    </View>
  );
};

export default LeaseCar;
