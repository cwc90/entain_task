import React from 'react';
import {ActivityIndicator, View, ActivityIndicatorProps} from 'react-native';

import styles from './LoadingView.styles';

export type LoadingViewProps = {
  size?: ActivityIndicatorProps['size'];
};

const LoadingView: React.FC<LoadingViewProps> = ({size = 'large'}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} />
    </View>
  );
};

export default LoadingView;
