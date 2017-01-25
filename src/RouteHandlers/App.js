import React, { Component, PropTypes } from 'react'
import store from '../store'
import { Provider } from 'react-redux'
import Menu from '../components/menu/Menu'
import MenuItem from '../components/menu/MenuItem'

class App extends Component {
    static propTypes = {

    };

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

    static contextTypes = {
        localize: PropTypes.func
    }

    render() {
        //console.log('---', this.context);
        const messages = this.context.localize('ua');

        return (
            <Provider store = {store}>
                <div>
                    <h1>{messages.nameApp}</h1>
                    <div>
                        {messages.inputUsername}:
                        <input type="text" value={this.state.username} onChange={this.handleChange}/>
                    </div>
                    <Menu>
                        <MenuItem path="/counter"/>
                        <MenuItem path="/articles"/>
                        <MenuItem path="/filters"/>
                    </Menu>
                    {this.props.children}
                </div>
            </Provider>
        )
    }

    handleChange = ev => {
        this.setState({
            username: ev.target.value
        })
    }
}

export default App