import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as userinfoActions from './actions/userinfo'

import A from './components/A'
import B from './components/B'
import C from './components/C'

class App extends Component {
    render() {
        return (
            <div>
                <p>hello world</p>
                <hr/>
                <A userinfo={this.props.userinfo}/>
                <hr/>
                <B userinfo={this.props.userinfo}/>
                <hr/>
                <C userinfoActions={this.props.userinfoActions}/>
            </div>
        )
    }
    componentDidMount() {
        this.props.userinfoActions.login({
            userid: '333',
            city: 'wenzhou'
        })
    }
}

const mapStateToProps = (state) => {
    return {userinfo: state.userinfo}
}

const mapDispatchToProps = (dispatch) => {
    return {
        userinfoActions: bindActionCreators(userinfoActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)