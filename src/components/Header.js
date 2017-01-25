import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import {} from '../AC'
import ChangeLang from './../components/ChangeLang'

class Header extends React.Component {

    static contextTypes = {
        localize: React.PropTypes.func
    }

    render() {
        const messages = this.context.localize(this.props.lang);
        return (
            <div>
                <ChangeLang />
                <h1>{messages.nameApp}</h1>
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