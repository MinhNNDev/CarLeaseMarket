import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {COLORS, STYLE} from '../../utils/Theme';
import {Header} from '../../common/components';

const About = () => {
  return (
    <View style={styles.flex}>
      <Header title="Thông tin" back />
      <View style={styles.container}>
        <View>
          <View style={styles.top}>
            <Text style={styles.name}>Car Lease</Text>
          </View>
          <View style={styles.infoBar}>
            <Text style={styles.title}>Version:</Text>
            <Text style={styles.content}>1.2.5</Text>
          </View>
        </View>
        <View style={styles.copyright}>
          <Text style={STYLE.textAlign}>All Rights reserved.</Text>
          <Text style={STYLE.textAlign}>Copyright © 2021 MinhNNdev</Text>
        </View>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  top: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.primary,
  },
  tinyLogo: {
    width: 80,
    height: 70,
  },
  infoBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  content: {
    fontSize: 16,
    fontWeight: '700',
    color: '#7f7b7b',
  },
  copyright: {
    paddingBottom: 20,
  },
});
