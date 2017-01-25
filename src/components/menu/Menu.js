import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class Menu extends Component {
    static propTypes = {

    };

    static contextTypes = {
        //тут и в других местах: лучше сделай вукоратор либо компонент-обертку для локализации, чтоб не обращатся кажды раз к контексту, иначе потом тяжело будет что-либо поменять
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
        //если ты уже используешь редакс для хранения языка, то лучше и локализацию туда положить, нет смысла разбивать их
        lang: store.lang
    }
})(Menu)
