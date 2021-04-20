import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import InputValue from '../../common/components/InputValue';
import {COLORS, SIZES, STYLE} from '../../utils/Theme';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

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
      <View>
        <TouchableOpacity onPress={showDatePicker}>
          <Text>Chọn ngày bắt đầu</Text>
          <Text>{dateTime}</Text>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          onDateChange={onDateChange}
        />
        <TouchableOpacity onPress={showDatePicker}>
          <Text>Chọn ngày kết thúc</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LeaseCar;

const styles = StyleSheet.create({
  inpSearch: {
    margin: 20,
  },
});
