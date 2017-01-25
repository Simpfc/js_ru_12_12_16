import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class Menu extends Component {
    static propTypes = {

    };

    static contextTypes = {
        localize: PropTypes.func
    }

    render() {
        //console.log(this.context);
        const messages = this.context.localize(this.props.lang);
        return (
            <div>
                <h3>{messages.selectPath}</h3>
                <ul>
                    {this.props.children}
                </ul>
            </div>
        )
    }
}

export  default connect ((store)=> {
    return {
        lang: store.lang
    }
})(Menu)