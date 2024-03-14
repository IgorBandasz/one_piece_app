import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigator from './navigator/HomeNavigador';

const App = () => {
    return(
        <NavigationContainer>
            <HomeNavigator/>
        </NavigationContainer>
    );
}

export default App;