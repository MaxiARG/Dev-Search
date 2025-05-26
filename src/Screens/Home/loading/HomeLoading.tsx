import React from 'react';
import { Skeleton } from 'moti/skeleton';
import { View } from 'tamagui';

const HomeLoading = () => {
  return (
    <View flex={1}>
      <View marginTop={'$margin.xxl'}>
        <Skeleton
          colorMode={'dark'}
          radius="square"
          height={75}
          width={'100%'}
        />
      </View>
      <View
        rowGap={'$gap.xxl'}
        justifyContent="space-between"
        alignItems="center"
        marginTop={'$margin.xxl'}
      >
        <Skeleton
          colorMode={'dark'}
          radius="round"
          height={40}
          width={'100%'}
        />
        <Skeleton
          colorMode={'dark'}
          radius="round"
          height={40}
          width={'100%'}
        />
        <Skeleton
          colorMode={'dark'}
          radius="round"
          height={40}
          width={'100%'}
        />
        <Skeleton
          colorMode={'dark'}
          radius="round"
          height={40}
          width={'100%'}
        />
        <Skeleton
          colorMode={'dark'}
          radius="round"
          height={40}
          width={'100%'}
        />
        <Skeleton colorMode={'dark'} radius="round" height={40} width={'80%'} />
      </View>
    </View>
  );
};

export default HomeLoading;
