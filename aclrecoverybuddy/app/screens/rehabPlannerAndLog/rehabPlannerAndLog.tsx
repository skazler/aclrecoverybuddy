import { ThemedText } from '@/components/ThemedText';
import { useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import HeaderWithSettings from '@/components/HeaderWithSettings';
import Spacer from '@/components/Spacer';
import { CollapsibleOptions } from '@/components/CollapsibleOptions';
import { Avatar, Button, Card, Text } from 'react-native-paper';

export default function RehabPlannerAndLog() {
  const router = useRouter();

  return (
    <View>
      <HeaderWithSettings title='Rehab Planner & Log' />

      <View style={styles.textContainer}>
        <Spacer height={16}/>

        <CollapsibleOptions title="Planner">
        <Card>
    <Card.Title title="Card Title" subtitle="Card Subtitle" left="left context" />
    <Card.Content>
      <Text variant="titleLarge">Card title</Text>
      <Text variant="bodyMedium">Card content</Text>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
        </CollapsibleOptions>
        <Spacer height={10}/>
        <CollapsibleOptions title="Log">
          <ThemedText>
            Coming Soon
          </ThemedText>
        </CollapsibleOptions>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    padding: 16,
    backgroundColor: "transparent",
  },
});

