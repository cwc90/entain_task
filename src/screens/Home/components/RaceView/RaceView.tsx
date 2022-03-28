import React from 'react';
import {View, Text} from 'react-native';
import styles from './RaceView.styles';

import {RaceSummary} from '_types';

import {RACING_CATEGORIES} from '_constants';
import {countdownFormatter} from '_utils';
import useCountdown from '../../hooks/useCountdown';
import useUpdateRace from '../../hooks/useUpdateRace';

export type RaceViewProps = {
  summary: RaceSummary;
  removeRace: (oldRaceId: string) => void;
};

const RaceView: React.FC<RaceViewProps> = ({summary, removeRace}) => {
  const {countdownInSeconds} = useCountdown(summary.advertised_start.seconds);
  useUpdateRace(countdownInSeconds, summary.race_id, removeRace);
  return (
    <View style={styles.raceView}>
      <View style={styles.raceViewLeft}>
        <Text style={styles.raceViewTitle}>
          {summary.meeting_name} - {RACING_CATEGORIES[summary.category_id]}
        </Text>
        <Text style={styles.raceViewSubtitle}>
          Race Number: {summary.race_number}
        </Text>
      </View>
      <View style={styles.raceViewRight}>
        <Text style={styles.raceViewCountdown}>
          {countdownFormatter(countdownInSeconds)}
        </Text>
      </View>
    </View>
  );
};

export default RaceView;
