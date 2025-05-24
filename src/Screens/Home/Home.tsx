import { NavigationProp, useNavigation } from "@react-navigation/native"
import { useLayoutEffect, } from "react"
import { Text, View } from "tamagui"
import { AppScreensParams } from "../../Navigator/ScreenTypes"
import MainContainer from "../../DesignSystem/atoms/Container/MainContainer"
import { SearchInput } from "../../DesignSystem/atoms/Input/Input"
import { StatusBar } from "react-native"

const Home = () => {
    const navigation = useNavigation<NavigationProp<AppScreensParams>>()

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Github users',
        })
    }
        , [])

    return (
        <MainContainer>
            <StatusBar barStyle={'light-content'} />
            <SearchInput />
        </MainContainer>
    )
}

export default Home

