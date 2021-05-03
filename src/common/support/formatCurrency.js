import React from 'react';
import {
  Text,
} from 'react-native';
import NumberFormat from 'react-number-format';

export const formatCurrency = price => {
  return (
    <NumberFormat
      value={price}
      displayType={'text'}
      thousandSeparator={'.'}
      decimalSeparator={','}
      suffix={' đ/ngày'}
      renderText={formattedValue => <Text style={{fontSize: 16}}>{formattedValue}</Text>}
    />
  );
};
