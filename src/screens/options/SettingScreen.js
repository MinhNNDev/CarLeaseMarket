import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Header} from '../../common/components';
import {COLORS, STYLE} from '../../utils/Theme';

const Setting = () => {
  return (
    <View style={STYLE.container}>
      <Header title="Cài đặt" back />
      <Text style={styles.block}>V1.2.5</Text>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  block: {
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: COLORS.white,
    padding: 30,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 8,
    color: COLORS.lightGray,
    fontWeight: '700',
    fontSize: 18,
  },
});
