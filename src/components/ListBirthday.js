/* eslint-disable prettier/prettier */

import React, {useState} from 'react';
import ActionBar from './ActionBar';
import AddBirthday from './AddBirthday';
import {StyleSheet, Text, View} from 'react-native';

export default function ListBirthday() {
  const [showList, setShowList] = useState(true);

  return (
    <View style={styles.container}>
      {showList ? (
        <>
          <Text>LIST</Text>
          <Text>LIST</Text>
          <Text>LIST</Text>
          <Text>LIST</Text>
          <Text>LIST</Text>
        </>
      ) : (
        <AddBirthday />
      )}
      <ActionBar showList={showList} setShowList={setShowList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
  },
});
