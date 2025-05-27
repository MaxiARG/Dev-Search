import MainContainer from '../../DesignSystem/atoms/Container/MainContainer';
import useConfigureScreen from '@common-hooks/useConfigureScreen';
import { SearchInput } from '@molecules/SearchInput/SearchInput';
import Tabs, { sectionAtom } from '@molecules/Tabs/Tabs';
import MainUserList from './components/MainListOfUsers/MainUserList';
import { useAtomValue } from 'jotai/react';
import FavoriteList from './components/MainListOfUsers/FavoriteList';
import { View } from 'tamagui';

const Home = () => {
  useConfigureScreen({ header_title: 'Github users' });
  const selectedIndex = useAtomValue(sectionAtom);
  return (
    <MainContainer>
      <View rowGap={'$gap.md'}>
        <SearchInput />
        <Tabs />
      </View>
      {selectedIndex === 0 ? <MainUserList /> : <FavoriteList />}
    </MainContainer>
  );
};

export default Home;
