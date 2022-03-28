import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import styles from './RaceListHeader.styles';
import {RACING_CATEGORIES} from '_constants';
import {colors} from '_styles';

export type RacingListHeaderProps = {
  selectedCategoryIds: string[];
  setSelectedCategoryIds: React.Dispatch<React.SetStateAction<string[]>>;
};

const RaceListHeader: React.FC<RacingListHeaderProps> = ({
  selectedCategoryIds,
  setSelectedCategoryIds,
}) => {
  // if only one category is selected , disable the check box
  const isCheckBoxDisabled = (categoryId: string) => {
    return (
      selectedCategoryIds[0] === categoryId && selectedCategoryIds.length === 1
    );
  };

  const onCheckBoxPress = (categoryId: string) => {
    const newCheckValue = selectedCategoryIds.includes(categoryId);
    if (newCheckValue) {
      setSelectedCategoryIds(prevCategoryIds =>
        prevCategoryIds.filter(prevCategoryId => prevCategoryId !== categoryId),
      );
    } else {
      setSelectedCategoryIds(prevCategoryIds => [
        ...prevCategoryIds,
        categoryId,
      ]);
    }
  };

  return (
    <View style={styles.container}>
      {Object.keys(RACING_CATEGORIES).map(categoryId => (
        <TouchableOpacity
          key={categoryId}
          disabled={isCheckBoxDisabled(categoryId)}
          onPress={() => onCheckBoxPress(categoryId)}
          style={styles.checkboxTouchContainer}
        >
          <CheckBox
            value={selectedCategoryIds.includes(categoryId)}
            disabled={isCheckBoxDisabled(categoryId)}
            style={styles.checkbox}
            // Android
            tintColors={{
              true: colors.PRIMARY_COLOR,
              false: colors.PRIMARY_COLOR,
            }}
            // IOS
            tintColor={colors.PRIMARY_COLOR}
            onCheckColor={colors.WHITE}
            onFillColor={colors.PRIMARY_COLOR}
            onTintColor={colors.PRIMARY_COLOR}
            animationDuration={0.1}
          />
          <Text style={styles.checkboxText}>
            {RACING_CATEGORIES[categoryId]}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default RaceListHeader;
