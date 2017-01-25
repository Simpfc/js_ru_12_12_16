import React, { Component, PropTypes } from 'react'
import store from '../store'
import { Provider } from 'react-redux'
import Menu from '../components/menu/Menu'
import MenuItem from '../components/menu/MenuItem'
import Header from '../components/Header'
import AddUserName from '../components/AddUserName'


class App extends Component {
    static propTypes = {

    };

    static contextTypes = {
        localize: PropTypes.func
    }

    render() {
        return (
            <Provider store = {store}>
                <div>
                    <Header />
                    <AddUserName>
                        <Menu>
                            <MenuItem path="/counter"/>
                            <MenuItem path="/articles"/>
                            <MenuItem path="/filters"/>
                        </Menu>
                        {this.props.children}
                    </AddUserName>
                </div>
            </Provider>
        )
    }
}

export default App
