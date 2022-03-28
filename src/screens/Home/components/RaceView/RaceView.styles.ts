import {StyleSheet} from 'react-native';

import {colors, presets} from '_styles';

export default StyleSheet.create({
  raceView: {
    backgroundColor: colors.WHITE,
    flexDirection: 'row',
    padding: presets.spacing(2),
  },
  raceViewLeft: {
    flex: 1,
    marginRight: presets.spacing(2),
  },
  raceViewRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  raceViewTitle: {
    fontSize: 16,
    color: colors.PRIMARY_TEXT_COLOR,
    fontWeight: '700',
  },
  raceViewSubtitle: {
    color: colors.SECONDARY_TEXT_COLOR,
  },
  raceViewCountdown: {
    color: colors.PRIMARY_COLOR,
  },
});
