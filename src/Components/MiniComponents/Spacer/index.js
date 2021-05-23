import React from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet, View} from 'react-native';

const Spacer = ({size}) => <View style={{flex: 1, height: size}} />;

Spacer.propTypes = {
  size: PropTypes.number,
};

Spacer.defaultProps = {
  size: 20,
};

export default Spacer;
