import React, {PropTypes} from 'react'
//import { changeSiteLang } from '../AC/index';
import { connect } from 'react-redux'

class AddUserName extends React.Component {

    state = {
        username: ''
    }

    static contextTypes = {
        localize: React.PropTypes.func
    }

    static childContextTypes = {
        user: PropTypes.string
    }

    getChildContext() {
        return {
            user:  this.state.username

        }
    }

    handleChange = ev => {
        this.setState({
            username: ev.target.value
        })
    }

    render() {
        const messages = this.context.localize(this.props.lang);
        return (
            <div>
                {messages.inputUsername}:
                <input type="text" value={this.state.username} onChange={this.handleChange}/>
                {this.props.children}
            </div>
        )
    }
}

export default connect(
    (state) => {
        return {
            lang: state.lang
        }
    }
)(AddUserName)