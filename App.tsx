import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import MyList from './src/components/MyList';

function App(): JSX.Element {

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <MyList></MyList>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
