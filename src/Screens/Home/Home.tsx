import MainContainer from "../../DesignSystem/atoms/Container/MainContainer"
import { SearchInput } from "../../DesignSystem/atoms/Input/Input"
import useGetNavigation from "@common-hooks/useGetNavigation"
import useConfigureScreen from "@common-hooks/useConfigureScreen"

const Home = () => {
    const navigation = useGetNavigation();
    useConfigureScreen({header_title: 'Github users'})

    return (
        <MainContainer>
            <SearchInput />
        </MainContainer>
    )
}

export default Home

