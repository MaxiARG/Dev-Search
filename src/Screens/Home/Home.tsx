import { SearchInput } from '@atoms/Input/Input';
import MainContainer from '../../DesignSystem/atoms/Container/MainContainer';
import useConfigureScreen from '@common-hooks/useConfigureScreen';
import IconButton from '@molecules/IconButton/IconButton';

const Home = () => {
  useConfigureScreen({ header_title: 'Github users' });

  return (
    <MainContainer>
      <SearchInput />
      <IconButton
        selected={false}
        iconSelectedName="heart"
        iconUnselectedName="heart-o"
      />
    </MainContainer>
  );
};

export default Home;
