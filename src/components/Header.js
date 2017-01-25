import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import {} from '../AC'
import ChangeLang from './../components/ChangeLang'

class Header extends React.Component {

    static contextTypes = {
        localize: React.PropTypes.func
    }

    state = {
        username: ''
    }

    static childContextTypes = {
        user: PropTypes.string
    }

    getChildContext() {
        return {
            user: this.state.username
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
                <ChangeLang />
                <h1>{messages.nameApp}</h1>
                <div>
                    {messages.inputUsername}:
                    <input type="text" value={this.state.username} onChange={this.handleChange}/>
                </div>
            </div>
        )
    }
}

export default connect(
    (state) => {
        return {
            lang: state.lang
        }
    },
    {}
)(Header)