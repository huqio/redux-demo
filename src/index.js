import React from 'react'
import {render} from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import store from './store'
import registerServiceWorker from "./registerServiceWorker"

/*// 引用并执行 redux-demo
import fn from './redux-demo.js'
fn()*/

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker()