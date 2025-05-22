import { useFonts } from 'expo-font';

const useFontLoader = () => {
    const [fontsLoaded, fontError] = useFonts({
        'Manrope-SemiBold': require('../../assets/fonts/Manrope-SemiBold.ttf'),
        'Roboto-Regular': require('../../assets/fonts/roboto/Roboto-Regular.ttf'),
        'Roboto-Medium': require('../../assets/fonts/roboto/Roboto-Medium.ttf'),
        'Roboto-Light': require('../../assets/fonts/roboto/Roboto-Light.ttf'),
        'Roboto-Thin': require('../../assets/fonts/roboto/Roboto-Thin.ttf'),
    });

    return ({ fontsLoaded, fontError })
}

export default useFontLoader