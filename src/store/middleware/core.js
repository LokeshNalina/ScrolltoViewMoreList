import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';


const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnchancers = devtools || compose;
const enhancedStore = composeEnchancers(applyMiddleware(thunk));

export { enhancedStore };

