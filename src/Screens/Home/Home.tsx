import { NavigationProp, useNavigation } from "@react-navigation/native"
import {  useLayoutEffect, } from "react"
import { ScrollView, View } from "tamagui"
import Text from "../../DesignSystem/atoms/Text"
import { AppScreensParams } from "../../Navigator/ScreenTypes"

const Home = () => {
    const navigation = useNavigation<NavigationProp<AppScreensParams>>()

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Home'
        })
    }
    , [])

    return (
        <>
            <View flex={0.4} backgroundColor={'white'}></View>
            <ScrollView
                flex={1}
                contentContainerStyle={{
                    paddingVertical: '$padding.md',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white'
                }}
            >
                <View rowGap={10} alignItems="center">
                    <Text link onPress={() => navigation.navigate('UserProfile')}>❤️ User Profile</Text>
                    <Text>Just another placeholder User Profile</Text>
                </View>
            </ScrollView>
            <View flex={0.4} backgroundColor={'white'}></View>
        </>
    )
}

export default Home

