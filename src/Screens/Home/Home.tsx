import MainContainer from '../../DesignSystem/atoms/Container/MainContainer';
import { SearchInput } from '../../DesignSystem/atoms/Input/Input';
import useConfigureScreen from '@common-hooks/useConfigureScreen';

const Home = () => {
  useConfigureScreen({ header_title: 'Github users' });

  return (
    <MainContainer>
      <SearchInput />
    </MainContainer>
  );
};

export default Home;
