import React, {PropTypes} from 'react'
import { changeSiteLang } from '../AC/index';
import { connect } from 'react-redux'

class ChangeLang extends React.Component {
    handlerSelect = (event) => {
        console.log(event.target.value, changeSiteLang);
        this.props.changeSiteLang(event.target.value)
    }

    render() {
        return (
                <select onChange={this.handlerSelect}>
                    <option value="en">English</option>
                    <option value="ua">Українська</option>
                </select>
        )
    }
}

export default connect(
    (state) => {
        return {
            lang: state.lang
        }
    },
    { changeSiteLang }
)(ChangeLang)