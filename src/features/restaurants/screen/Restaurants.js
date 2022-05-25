import React from 'react';
import styled from 'styled-components/native';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
  FlatList,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import RestaurantInfoCard from '../components/RestaurantInfoCard';
import {Search} from '../components/Search';

const SearchContainer = styled(View)`
  padding: ${props => props.theme.space[3]};
`;
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const RestaurantsScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    /**the porpose of SafeAreaView is to render content within the safe area boundaries of a device
     * (only aplicable to iOS devices with iOS version 11 or latter)
     * SafeAreaView rerenders nested content and automatically applies padding to reflect the portion of the view that is not
     * covered by navigation bars, tab bars, toolbars and other ancestor views
     */
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SearchContainer>
        <Search />
      </SearchContainer>
      <RestaurantList
        data={[
          {name: 1},
          {name: 2},
          {name: 3},
          {name: 4},
          {name: 5},
          {name: 6},
          {name: 7},
          {name: 8},
        ]}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={item => item.name}
      />
    </SafeAreaView>
  );
};

export default RestaurantsScreen;
