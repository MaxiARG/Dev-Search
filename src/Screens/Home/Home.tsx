import MainContainer from '../../DesignSystem/atoms/Container/MainContainer';
import useConfigureScreen from '@common-hooks/useConfigureScreen';
import { SearchInput } from '@molecules/SearchInput/SearchInput';
import Tabs from '@molecules/Tabs/Tabs';
import UserRow from '@molecules/UserRow/UserRow';
import { View } from 'tamagui';
import useGetUsers from './hooks/useGetUsers';

const Home = () => {
  useConfigureScreen({ header_title: 'Github users' });
  const { users, error, loading } = useGetUsers();

  return (
    <MainContainer>
      <SearchInput />
      <Tabs />
      {loading && <View>Loading...</View>}
      {error && <View>Error: {error.message}</View>}
      {users && users.length > 0 && (
        <View rowGap={'$gap.lg'} marginTop={22}>
          {users.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </View>
      )}
    </MainContainer>
  );
};

export default Home;
