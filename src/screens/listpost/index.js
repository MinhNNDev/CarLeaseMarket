import React from 'react';
import {
  ActivityIndicator,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Header} from '../../common/components';
import {SIZES, STYLE} from '../../utils/Theme';

import {useQuery, gql} from '@apollo/client';

import {styles} from './styles';
import {formatCurrency} from '../../common/support/formatCurrency';

import {GET_CAR} from '../../service/graphql/queries/cars';

const ItemPostCar = ({item}) => {
  const navigation = useNavigation();
  console.log(item);
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
          <Text style={styles.instance}>{item.province}</Text>
          <Text style={styles.priceCar}>Giá: {formatCurrency(item.price)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const ListPostCar = ({navigation}) => {
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
      <>
        <Header
          title="Xe đã đăng"
          iconbar
          icon="form"
          onPress={() => navigation.navigate('PostCar')}
        />
        <View style={styles.container}>
          <Text>Error :((</Text>
        </View>
      </>
    );
  }
  return (
    <>
      <Header
        title="Xe đã đăng"
        iconbar
        icon="form"
        onPress={() => navigation.navigate('PostCar')}
      />
      <View style={STYLE.container}>
        <FlatList
          data={data.cars}
          style={styles.containerListPost}
          keyExtractor={item => item.id}
          renderItem={item => <ItemPostCar item={item.item} />}
          ListEmptyComponent={
            <>
              <Image
                source={require('../../assets/img/post_vehicle_management.png')}
                style={styles.imgNotifyEmpty}
              />
              <TouchableOpacity
                onPress={() => navigation.navigate('PostCar')}
                style={styles.openPost}>
                <Text style={styles.txtNotify}>
                  Bạn chưa có bài đăng nào, đăng tin ngay
                </Text>
              </TouchableOpacity>
            </>
          }
        />
      </View>
    </>
  );
};

export default ListPostCar;
