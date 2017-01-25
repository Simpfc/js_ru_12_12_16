import React, { Component, PropTypes } from 'react'

class Menu extends Component {
    static propTypes = {

    };

    static contextTypes = {
        localize: PropTypes.func
    }

    render() {
        //console.log(this.context);
        const messages = this.context.localize('ua');
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

export default Menu