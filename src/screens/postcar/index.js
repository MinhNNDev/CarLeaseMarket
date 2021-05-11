import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  TextInput,
} from 'react-native';
import MultipleImagePicker from '@baronha/react-native-multiple-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import {COLORS, STYLE} from '../../utils/Theme';
import {Header, InputValue} from '../../common/components';
import {styles} from './styles';

const {width} = Dimensions.get('window');

const IMAGE_WIDTH = (width - 24) / 3;

const PostCar = () => {
  const navigation = useNavigation();

  const [images, setImages] = useState([]);
  const [infoCar, setInfoCar] = useState({});
  const [uploadProgress, setUploadProgress] = useState(0);

  console.log(infoCar);
  const openPicker = async () => {
    try {
      const response = await MultipleImagePicker.openPicker({
        selectedAssets: images,
        mediaType: 'image',
        isPreview: false,
      });
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

  const handleSubmit = () => {
    // TODO: Validate dữ liệu đầu vào

    // Tên xe
    if (!infoCar.name || infoCar.name.trim().length < 10) {
      Toast.show({
        type: 'error',
        text1: 'Lỗi rồiiiiii',
        text2: 'Bạn ơi, tên của xe ít nhất phải có 10 kí tự nhé 😅!',
      });
      return;
    }

    // Giá xe
    if (!infoCar.price || parseInt(infoCar.price, 10) < 1000) {
      Toast.show({
        type: 'error',
        text1: 'Lỗi rồiiiiii',
        text2: 'Bạn ơi, giá cho thuê tối thiểu phải là 1.000vnđ 😅!',
      });
      return;
    }

    // Mô tả xe
    if (!infoCar.desc || infoCar.desc.trim().length < 10) {
      Toast.show({
        type: 'error',
        text1: 'Lỗi rồiiiiii',
        text2: 'Bạn ơi, mô tả của xe ít nhất phải có 10 kí tự nhé 😅!',
      });
      return;
    }

    // Năm sản xuất
    if (
      !infoCar.year ||
      parseInt(infoCar.yea, 10) < 1900 ||
      parseInt(infoCar.year, 10) > new Date().getFullYear() + 2
    ) {
      Toast.show({
        type: 'error',
        text1: 'Lỗi rồiiiiii',
        text2: 'Bạn ơi, năm sản xuất không hợp lệ rồi 😅!',
      });
      return;
    }

    // Dung tích nhiên liệu
    if (!infoCar.fuelCap || parseFloat(infoCar.fuelCap) < 1.0) {
      Toast.show({
        type: 'error',
        text1: 'Lỗi rồiiiiii',
        text2: 'Bạn ơi, dung tích bình nhiên liệu không hợp lệ rồi 😅!',
      });
      return;
    }

    // Số chỗ ngồi
    if (!infoCar.seats || parseInt(infoCar.seats, 10) < 1) {
      Toast.show({
        type: 'error',
        text1: 'Lỗi rồiiiiii',
        text2: 'Bạn ơi, số chỗ ngồi chưa hợp lệ kìa 😅!',
      });
      return;
    }

    // Validate xong rồi nha

    Toast.show({
      type: 'info',
      text1: 'Đợi chút xíu',
      text2:
        'Chúng tôi đang tải thông tin xe của bạn lên, vui lòng đợi trong giây lát !',
    });

    let imagesData = new FormData();
    Array.from(images).forEach(image => {
      imagesData.append('files', {
        uri: image.path,
        name: image.fileName,
        type: image.mine,
      });
    });

    axios
      .request({
        method: 'post',
        url: 'http://45.119.212.43:1337/upload',
        headers: {'Content-Type': 'multipart/form-data'},
        data: imagesData,
        // State lưu tiến độ tải ảnh lên hệ thống
        onUploadProgress: p => setUploadProgress(p.loaded / p.total),
      })
      .then(response => {
        if (response.status === 200) {
          axios
            .post('http://45.119.212.43:1337/cars', {
              title: infoCar.name,
              price: parseInt(infoCar.price, 10),
              brand: '60818bdc846210352069d679',
              description: infoCar.desc,
              year: infoCar.year,
              gear: 'manual',
              fuel: 'gasoline',
              fuelCapacity: parseFloat(infoCar.fuelCap),
              seats: parseInt(infoCar.seats, 10),
              classification: 'Sedan',
              images: response.data.map(image => image.id),
              address: infoCar.address_location,
              province: infoCar.address_province,
            })
            .then(res => {
              // TODO: Đăng xe lên hệ thống thành công, làm gì đó để hiển thị giao diện
              if (res.status === 200) {
                Toast.hide();
                Toast.show({
                  type: 'success',
                  text1: 'Chúc Mừng',
                  text2: 'Bạn đã đăng xe cho thuê thành công rồi 🎉🎉!',
                });
                navigation.navigate('Lease');
              }
            })
            .catch(err => {
              console.error(err);
            });
        }
      })
      .catch(error => {
        console.error(error);
      });
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
      <Header back title="Đăng xe" iconbar icon="save" onPress={handleSubmit} />
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
            <InputValue
              placeholder="Tên xe"
              icon="car"
              onChangeText={name => setInfoCar({...infoCar, ...{name}})}
            />
            <Text style={styles.txtDesc}>Mô tả xe của bạn: </Text>
            <TextInput
              multiline
              numberOfLines={5}
              textAlignVertical="top"
              style={styles.inputContent}
              onChangeText={desc => setInfoCar({...infoCar, ...{desc}})}
            />
            <InputValue
              placeholder="Năm sản xuất"
              icon="today-outline"
              onChangeText={year => setInfoCar({...infoCar, ...{year}})}
            />
            <InputValue
              placeholder="Hãng sản xuất"
              icon="shield-checkmark-outline"
              onChangeText={brand => setInfoCar({...infoCar, ...{brand}})}
            />
            <InputValue
              placeholder="Mã xe"
              icon="pricetag-outline"
              onChangeText={code => setInfoCar({...infoCar, ...{code}})}
            />
            <InputValue
              placeholder="Hộp số (Tự động/Sàn)"
              icon="ios-logo-ionic"
              onChangeText={gear => setInfoCar({...infoCar, ...{gear}})}
            />
            <InputValue
              placeholder="Nhiên liệu (Xăng/Dầu)"
              icon="ios-flame-outline"
              onChangeText={fuel => setInfoCar({...infoCar, ...{fuel}})}
            />
            <InputValue
              placeholder="Dung tích nhiên liệu"
              icon="pricetag-outline"
              onChangeText={fuelCap => setInfoCar({...infoCar, ...{fuelCap}})}
            />
            <InputValue
              placeholder="Số chỗ ngồi"
              icon="people-outline"
              onChangeText={seats => setInfoCar({...infoCar, ...{seats}})}
            />
            <InputValue
              placeholder="Loại xe (SUV, Sedan...)"
              icon="car-outline"
              onChangeText={type => setInfoCar({...infoCar, ...{type}})}
            />
            <View>
              <Text style={styles.txtDesc}>Địa chỉ nhận xe: </Text>
              <View style={styles.addressCar}>
                <TextInput
                  placeholder=" Xã/Thị trấn"
                  style={[styles.inputAddress, styles.location]}
                  onChangeText={address_location =>
                    setInfoCar({...infoCar, ...{address_location}})
                  }
                />
                <TextInput
                  placeholder=" Huyện/Thành phố, Tỉnh "
                  style={[styles.inputAddress, styles.province]}
                  onChangeText={address_province =>
                    setInfoCar({...infoCar, ...{address_province}})
                  }
                />
              </View>
            </View>
          </View>
          <View style={styles.mainPrice}>
            <Text style={styles.txtDesc}>Giá cho thuê xe của bạn: </Text>
            <TextInput
              style={styles.inputPrice}
              onChangeText={price => setInfoCar({...infoCar, ...{price}})}
            />
          </View>
          <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit}>
            <Text style={styles.subtext}>Đăng bài</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default PostCar;
