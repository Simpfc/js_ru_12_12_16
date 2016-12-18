import React, { Component } from 'react'
import Comment from './Comment';
export default class CommentList extends Component {

    state = {
        isOpen: false
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    getTitle () {
        if (this.state.isOpen) {
             return "Hide comments";
        } else {
            return "Show comments";
        }
    }

    getCommentList() {
        if (!this.state.isOpen) return null
        return (
            <section>
                {this._createList()}
            </section>
        )
    }

    _createList () {
        //!this.props не стоит проверять, он всегда есть
        if (!this.props || !this.props.comments) return ;
        const { comments } = this.props;
        //в ul не завернул
        return comments.map(item => <li key = {item.id}><Comment item = {item} /></li>)
    }

    getButton () {
        if (!this.props || !this.props.comments) return ;
        return <a onClick={this.toggleOpen} href="javascript:void(0)">{this.getTitle()}</a>;
    }

    render () {
        return (
            <div>
                {this.getButton()}
                {this.getCommentList()}
            </div>
        )
    }
}
