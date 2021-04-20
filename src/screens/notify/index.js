import React, {useState} from 'react';
import {Text, View, TouchableOpacity, FlatList, Image} from 'react-native';

import {STYLE, COLORS} from '../../utils/Theme';
import {styles} from './styles';
import {data} from './data';

const AllNotify = () => {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return (
            <View style={styles.containerItemNotify}>
              <Image
                source={require('../../assets/img/ic_notification_rental.png')}
                style={styles.imgIcNotifyRental}
                resizeMode="cover"
              />
              <View style={styles.itemContent}>
                <Text style={styles.txtTitle}>{item.title}</Text>
                <Text style={styles.txtDesc} numberOfLines={2}>
                  {item.desc}
                </Text>
                <Text style={styles.txtTime}>{item.time}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const ServiceNotify = () => {
  return (
    <View style={styles.containerEmptyNotify}>
      <Image
        source={require('../../assets/img/empty_notifications.png')}
        style={styles.imgNotifyEmpty}
        resizeMode="cover"
      />
      <Text>Hiện chưa có thông báo mới</Text>
    </View>
  );
};

const Notify = () => {
  const [tab, setTab] = useState(0);
  return (
    <View style={STYLE.container}>
      <View style={styles.header}>
        <Text style={styles.name}>Thông báo</Text>
      </View>
      <View style={styles.listTab}>
        <TouchableOpacity
          onPress={() => setTab(0)}
          style={[
            styles.button,
            tab === 0 && {borderBottomColor: COLORS.primary},
          ]}>
          <Text
            style={[styles.buttonText, tab === 0 && {color: COLORS.primary}]}>
            Tất cả
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setTab(1)}
          style={[
            styles.button,
            tab === 1 && {borderBottomColor: COLORS.primary},
          ]}>
          <Text
            style={[styles.buttonText, tab === 1 && {color: COLORS.primary}]}>
            Dịch vụ xe
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.wrapper}>
        {tab === 0 && <AllNotify />}
        {tab === 1 && <ServiceNotify />}
      </View>
    </View>
  );
};
export default Notify;
