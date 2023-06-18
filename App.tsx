import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import MyList from './src/components/MyList';

function App(): JSX.Element {

  return (
    <SafeAreaView>      
        <View>
          <MyList></MyList>
        </View>      
    </SafeAreaView>
  );
}

export default App;
