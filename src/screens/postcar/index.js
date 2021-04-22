import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  TextInput,
} from 'react-native';
import MultipleImagePicker from '@baronha/react-native-multiple-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {COLORS, STYLE} from '../../utils/Theme';
import {Header, InputValue} from '../../common/components';
import {styles} from './styles';

const {width} = Dimensions.get('window');

const IMAGE_WIDTH = (width - 24) / 3;

const App = () => {
  const [images, setImages] = useState([]);

  const openPicker = async () => {
    try {
      const response = await MultipleImagePicker.openPicker({
        selectedAssets: images,
        isExportThumbnail: true,
        maxVideo: 1,
      });
      console.log('done: ', response);
      setImages(response);
    } catch (e) {
      console.log(e);
    }
  };

  const onDelete = value => {
    const data = images.filter(
      item =>
        item?.localIdentifier &&
        item?.localIdentifier !== value?.localIdentifier,
    );
    setImages(data);
  };

  const renderItem = ({item, index}) => {
    return (
      <View>
        <Image
          width={IMAGE_WIDTH}
          source={{
            uri: item?.type === 'video' ? item?.thumbnail ?? '' : item?.path,
          }}
          style={styles.media}
        />
        <TouchableOpacity
          onPress={() => onDelete(item)}
          activeOpacity={0.9}
          style={styles.buttonDelete}>
          <Ionicons name="close" size={25} color={COLORS.black} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={STYLE.container}>
      <Header back title="Đăng xe" iconbar icon="save" />
      <ScrollView>
        <View style={styles.main}>
          <Text style={styles.title}>Chọn nhiều hình để bán chạy hơn</Text>
          <FlatList
            style={[styles.containerList]}
            data={images}
            keyExtractor={(item, index) =>
              (item?.filename ?? item?.path) + index
            }
            renderItem={renderItem}
            numColumns={3}
            ListEmptyComponent={
              <TouchableOpacity style={styles.openPicker} onPress={openPicker}>
                <Ionicons name="camera-sharp" size={25} color="gray" />
                <Text style={styles.subtext}> Thêm hình</Text>
              </TouchableOpacity>
            }
          />
          <View style={styles.form}>
            <InputValue placeholder="Tên xe" icon="car" />
            <Text style={styles.txtDesc}>Mô tả xe của bạn: </Text>
            <TextInput
              multiline
              numberOfLines={5}
              textAlignVertical="top"
              style={styles.inputContent}
            />
            <InputValue placeholder="Năm sản xuất" icon="today-outline" />
            <InputValue
              placeholder="Hãng sản xuất"
              icon="shield-checkmark-outline"
            />
            <InputValue placeholder="Mã xe" icon="pricetag-outline" />
            <InputValue
              placeholder="Hộp số (Tự động/Sàn)"
              icon="ios-logo-ionic"
            />
            <InputValue
              placeholder="Nhiên liệu (Xăng/Dầu)"
              icon="ios-flame-outline"
            />
            <InputValue
              placeholder="Dung tích nhiên liệu"
              icon="pricetag-outline"
            />
            <InputValue placeholder="Số chỗ ngồi" icon="people-outline" />
            <InputValue
              placeholder="Loại xe (SUV, Sedan...)"
              icon="car-outline"
            />
          </View>
          <View style={styles.mainPrice}>
            <Text style={styles.txtDesc}>Giá cho thuê xe của bạn: </Text>
            <TextInput style={styles.inputPrice} />
          </View>
          <TouchableOpacity style={styles.buttonSave} onPress={openPicker}>
            <Text style={styles.subtext}>Lưu</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default App;
