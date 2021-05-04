import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import {COLORS, STYLE} from '../../utils/Theme';
import {Header} from '../../common/components/';

const About = ({route}) => {
  const {auth} = route.params;
  return (
    <View style={STYLE.container}>
      <Header back title="Tài khoản" />
      <View style={styles.container}>
        <View>
          <View style={styles.marginHorizontal}>
            <View style={styles.top}>
              <Text style={styles.name}>Car Lease</Text>
              <Image
                source={require('../../assets/img/logo.png')}
                style={styles.tinyLogo}
              />
            </View>
            <View style={styles.infoBar}>
              <Text style={styles.title}>Tài khoản:</Text>
              <Text style={styles.content}>{auth.user.user.username}</Text>
            </View>
            <View style={styles.infoBar}>
              <Text style={styles.title}>Tên người dùng:</Text>
              <Text style={styles.content}>{auth.user.user.fullname}</Text>
            </View>
            <View style={styles.infoBar}>
              <Text style={styles.title}>Số điện thoại:</Text>
              <Text style={styles.content}>{auth.user.user.phone}</Text>
            </View>
            <View style={styles.infoBar}>
              <Text style={styles.title}>Email:</Text>
              <Text style={styles.content}>{auth.user.user.email}</Text>
            </View>
            <View style={styles.infoBar}>
              <Text style={styles.title}>Version:</Text>
              <Text style={styles.content}>1.4.3</Text>
            </View>
          </View>
        </View>
        <View style={styles.copyright}>
          <Text style={styles.textAlign}>All Rights reserved.</Text>
          <Text style={styles.textAlign}>Copyright © 2021 CarLease Inc.</Text>
        </View>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  textAlign: {
    textAlign: 'center',
  },
  marginHorizontal: {
    marginHorizontal: 10,
  },
  top: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  name: {
    fontSize: 30,
    fontWeight: '700',
    color: COLORS.primary,
  },
  tinyLogo: {
    width: 110,
    height: 70,
  },
  infoBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
  },
  content: {
    fontSize: 17,
    fontWeight: '700',
    color: '#7f7b7b',
  },
  copyright: {
    paddingBottom: 20,
  },
});
