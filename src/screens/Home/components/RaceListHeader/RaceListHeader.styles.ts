import {StyleSheet, Platform} from 'react-native';

import {presets, colors} from '_styles';

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: presets.spacing(1),
  },
  checkboxTouchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: presets.spacing(2),
  },
  checkbox: {
    width: presets.spacing(2),
    height: presets.spacing(2),
  },
  checkboxText: {
    color: colors.PRIMARY_TEXT_COLOR,
    fontSize: 15,
    fontWeight: '600',
    marginLeft: presets.spacing(Platform.OS === 'android' ? 2 : 1),
  },
});
