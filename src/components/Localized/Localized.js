import React, {PropTypes} from 'react'

export default class Localized extends React.Component {
    constructor (props) {
        super(props);
    }

    static childContextTypes = {
        localize: PropTypes.func
    };

    getChildContext () {
        const messages = this.props.messages;
        return   {
            localize: (lang) => {
                //console.log(this.props.messages, messages);
                if (!messages.hasOwnProperty(lang)) {
                    throw new Error('Localization data was not defined.');
                }
                return messages[lang];
            }
        }
    }


    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }

}