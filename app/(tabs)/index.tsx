import { Text } from 'react-native';
import styled from '@emotion/native';
import { Typo } from '@shared/ui/atoms';

export default function HomeScreen() {
  return (
    <Section>
      <Text>Home</Text>
      <Typo>Typo</Typo>
      <Typo.Regular>Typo.Regular</Typo.Regular>
      <Typo.Medium>Typo.Medium</Typo.Medium>
      <Typo.SemiBold>Typo.SemiBold</Typo.SemiBold>
      <Typo.Bold>Typo.Bold</Typo.Bold>
    </Section>
  );
}

const Section = styled.View({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
});
