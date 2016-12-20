//decorator === HOC(Higher Order Component)
import React from 'react'

export default function accordionToggleOpen(Component) {

    return class WrapperComponent extends React.Component {
        state = {
            openArticleId: null
        }

        render() {
            return <Component {...this.props} {...this.state} toggleOpenArticle = {this.toggleOpenArticle}/>
        }

        /**
         * ###HT 2.3: сделать возможность закрывать статью при повторном клике
         */
        toggleOpenArticle = id => ev => {
            if (this.state.openArticleId === id ) {
                this.setState({
                    openArticleId: null
                })
                return;
            }

            this.setState({
                openArticleId: id
            })
        }
    }
}