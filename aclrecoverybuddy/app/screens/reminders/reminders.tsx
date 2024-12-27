import { ThemedText } from '@/components/ThemedText';
import { useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import HeaderWithSettings from '@/components/HeaderWithSettings';
import Spacer from '@/components/Spacer';
import { useState } from 'react';
import { WheelPicker } from 'react-native-infinite-wheel-picker';

export default function Reminders() {
  const router = useRouter();
  const [date, setDate] = useState(new Date());
  const initialData = [1, 2, 3, 4, 5, 6, 7, 8];
  const [selectedIndex, setSelectedIndex] = useState(3);

  return (
    <View>
      <HeaderWithSettings title='Reminders' />
      {/* TODO
      <WheelPicker
        initialSelectedIndex={3}
        data={initialData}
        restElements={2}
        elementHeight={30}
        onChangeValue={value => {
          console.log(value);
        }}
        infiniteScroll={false}
        selectedIndex={selectedIndex}
        containerStyle={styles.containerStyle}
        selectedLayoutStyle={styles.selectedLayoutStyle}
        elementTextStyle={styles.elementTextStyle}
      />;
      */}
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    padding: 16,
    backgroundColor: "transparent",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  selectedLayoutStyle: {
    backgroundColor: '#00000026',
    borderRadius: 2,
  },
  containerStyle: { 
    backgroundColor: '#0000001a', 
    width: 150 
  },
  elementTextStyle: { 
    fontSize: 18 
  },
});

