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

import {COLORS, STYLE} from '../../utils/Theme';
import {Header, InputValue} from '../../common/components';
import {styles} from './styles';

const {width} = Dimensions.get('window');

const IMAGE_WIDTH = (width - 24) / 3;

const PostCar = () => {
  const [images, setImages] = useState([]);
  const [infoCar, setInfoCar] = useState({});
  console.log(infoCar);

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

  const handleSubmit = () => {
    console.log('post');

    const formData = new FormData();

    Array.from(images).forEach(image => {
      formData.append('files', {
        uri: image.realPath,
        name: image.fileName,
        type: image.mine,
      });
    });

    axios
      .post('http://45.119.212.43:1337/upload', formData, {
        headers: {'Content-Type': 'multipart/form-data'},
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      });

    // axios
    //   .post('http://45.119.212.43:1337/cars', {
    //     title: infoCar.name,
    //     price: parseInt(infoCar.price, 10),
    //     brand: '60818bdc846210352069d679',
    //     description: infoCar.desc,
    //     year: infoCar.year,
    //     gear: 'manual',
    //     fuel: 'gasoline',
    //     fuelCapacity: parseFloat(infoCar.fuelCap),
    //     seats: parseInt(infoCar.seats, 10),
    //     classification: 'Sedan',
    //   })
    //   .then(response => {
    //     console.log(response);
    //   });
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
