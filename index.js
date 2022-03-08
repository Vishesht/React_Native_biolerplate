/**
 * @format
 */
import * as React from 'react'
import { AppRegistry, LogBox } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './src/common/Redux/Reducers/rootReducer'
const store = createStore(reducers, compose(applyMiddleware(thunk)))

export default function Main() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}
AppRegistry.registerComponent(appName, () => Main);
console.disableYellowBox = true
LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);