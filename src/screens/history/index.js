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

import {GET_HISTORY} from '../../service/graphql/queries/rentals';

const ItemPostCar = ({item}) => {
  const navigation = useNavigation();
  console.log(item);
  return (
    <TouchableOpacity style={styles.containerItemCar}>
      <Image
        source={{
          uri: `http://45.119.212.43:1337${
            item.car.images.length > 0 ? item.car.images[0].url : ''
          }`,
        }}
        style={styles.bannerItemPostCar}
      />
      <View style={styles.infoCarGen}>
        <Text style={styles.nameCar}>{item.car.title}</Text>
        <View style={STYLE.RowBetweenAlign}>
          <Text style={styles.instance}>{item.startDate}</Text>
          <Text style={styles.instance}>{item.endDate}</Text>
        </View>
        <Text style={styles.instance}>{item.remarks}</Text>
      </View>
    </TouchableOpacity>
  );
};

const ListPostCar = ({navigation}) => {
  const {loading, error, data} = useQuery(GET_HISTORY);
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
  console.log(data);
  return (
    <View style={STYLE.container}>
      <Header title="Lịch sử thuê xe" back />
      <FlatList
        data={data.rentals}
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
