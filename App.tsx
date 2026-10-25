import { Host, Image, Text, VStack } from '@expo/ui/swift-ui';
import { padding } from '@expo/ui/swift-ui/modifiers';

export default function App() {
  return (
    <Host style={{ flex: 1 }}>
      <VStack alignment="leading" spacing={12} modifiers={[padding({ all: 16 })]}>
        <Text>Each line below should read the same as its label. The fragment and the Image are dropped.</Text>
        <Text>Expected "A-B-C":</Text>
        <Text>
          {'A'}
          <>
            <Text>{'-B'}</Text>
          </>
          <Text>{'-C'}</Text>
        </Text>
        <Text>Expected "A-★-C":</Text>
        <Text>
          {'A-'}
          <Image systemName="star.fill" />
          <Text>{'-C'}</Text>
        </Text>
      </VStack>
    </Host>
  );
}
