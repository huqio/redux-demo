import {createStore} from 'redux'
import rootReduer from '../reducers'

const store = createStore(rootReduer, window.devToolsExtension ? window.devToolsExtension() : undefined)
export default store