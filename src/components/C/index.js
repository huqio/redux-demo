import React, {Component} from 'react'

class C extends Component {
    changeUserinfo = () => {
        this.props.userinfoActions.login({
            userid: '888',
            city: 'beijing'
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.changeUserinfo}>修改</button>
            </div>
        )
    }
}

export default C