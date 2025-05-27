import Text from '@atoms/Text/Text';
import { Keyboard } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { View } from 'tamagui';
import NoResultsWasFound from 'assets/svgs/no-results.svg';
const str = {
  no_results: 'No se encontraron resultados',
};

const NoResultsFound = () => {
  const svgSize = 200;
  return (
    <View flex={1} onPress={() => Keyboard.dismiss()}>
      <Animated.View
        entering={FadeIn}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <NoResultsWasFound width={svgSize} height={svgSize} />
        <Text style={{ fontSize: 18, color: '#888' }}>{str.no_results}</Text>
      </Animated.View>
    </View>
  );
};

export default NoResultsFound;
