import MainContainer from '../../DesignSystem/atoms/Container/MainContainer';
import useConfigureScreen from '@common-hooks/useConfigureScreen';
import { SearchInput } from '@molecules/SearchInput/SearchInput';
import Tabs from '@molecules/Tabs/Tabs';
import MainUserList from './components/MainListOfUsers/MainUserList';
import FavoriteList from './components/MainListOfUsers/FavoriteList';
import { View } from 'tamagui';
import useSelectedTabSectionAtom from 'src/common-atoms/useSelectedTabSectionAtom';
import useSearchUserResultAtom from 'src/common-atoms/useSearchUserResultAtom';

const Home = () => {
  useConfigureScreen({ header_title: 'Github users' });
  const { selectedIndex } = useSelectedTabSectionAtom();

  const tabsMapper: Record<number, React.ReactNode> = {
    0: <MainUserList />,
    1: <FavoriteList />,
  };

  return (
    <MainContainer>
      <View rowGap={'$gap.md'}>
        <SearchInput placeholder="Buscar usuarios de GitHub..." />
        <Tabs />
      </View>
      {tabsMapper[selectedIndex]}
    </MainContainer>
  );
};

export default Home;
