import {StyleSheet} from 'react-native';

import {presets} from '_styles';

export default StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },
  itemSeparator: {
    width: '100%',
    height: presets.spacing(1),
  },
});
