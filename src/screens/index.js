/*
* There are two ways to import screens
* import { HomeScreen } from '_screens';    --> default way (recommended)
* import HomeScreen from '_screens/home';   --> other way, in this case 'screens/index.js' is not required to export the screens
*/

export { default as HomeScreen } from './home/index.js';
export { default as AboutScreen } from './about/index.js';
