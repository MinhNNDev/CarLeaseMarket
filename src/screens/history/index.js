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
import {STYLE} from '../../utils/Theme';

import {useQuery} from '@apollo/client';

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
        <Text style={styles.priceCar}>Giá: {formatCurrency(item.price)}</Text>
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
      <View style={styles.container}>
        <Text>Error :((</Text>
      </View>
    );
  }
  return (
    <View style={STYLE.container}>
      <Header title="Lịch sử thuê xe" back />
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
              onPress={() => navigation.navigate('Lease')}
              style={styles.openPost}>
              <Text style={styles.txtNotify}>
                Bạn chưa thuê xe nào, thuê xe ngay
              </Text>
            </TouchableOpacity>
          </>
        }
      />
    </View>
  );
};

export default ListPostCar;
