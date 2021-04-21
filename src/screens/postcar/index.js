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
import {Header} from '../../common/components';

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
      <Header title="Đăng xe" />
      <Text style={styles.title}>Chọn nhiều hình để bán chạy hơn</Text>
      <FlatList
        style={[styles.containerList]}
        data={images}
        keyExtractor={(item, index) => (item?.filename ?? item?.path) + index}
        renderItem={renderItem}
        numColumns={3}
        ListEmptyComponent={
          <TouchableOpacity style={styles.openPicker} onPress={openPicker}>
            <Ionicons name="camera-sharp" size={25} color="gray" />
            <Text style={styles.subtext}> Thêm hình</Text>
          </TouchableOpacity>
        }
      />
      <View>
        <Text style={styles.title}>Mô tả xe của bạn: </Text>
        <TextInput
          multiline
          numberOfLines={5}
          textAlignVertical="top"
          style={styles.inpDesc}
        />
        <Text style={styles.title}>Tên Xe: </Text>
        <TextInput style={styles.inpDesc} />
        <Text style={styles.title}>Năm sản xuất: </Text>
        <TextInput style={styles.inpDesc} />
      </View>
      <TouchableOpacity style={styles.buttonSave} onPress={openPicker}>
        <Text style={styles.subtext}>Lưu</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  media: {
    marginLeft: 6,
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH,
    marginBottom: 6,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  containerList: {
    paddingTop: 10,
    // backgroundColor: 'blue',
  },
  openText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  openPicker: {
    marginTop: 10,
    height: 100,
    marginHorizontal: 20,
    borderColor: 'gray',
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDelete: {
    paddingHorizontal: 6,
    paddingVertical: 3,
    position: 'absolute',
    top: 6,
    right: 6,
    backgroundColor: '#ffffff92',
    borderRadius: 4,
  },
  buttonSave: {
    marginTop: 10,
    height: 50,
    marginHorizontal: 20,
    borderRadius: 4,
    backgroundColor: COLORS.primary,
    shadowColor: COLORS.black,
    shadowOpacity: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inpDesc: {
    borderWidth: 0.5,
    backgroundColor: COLORS.lightGray2,
  },
});
