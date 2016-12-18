import React, { Component } from 'react'

export default class Comment extends Component {
    getTitle (item) {
        if (!item.hasOwnProperty('title')) {
            return '';
        }
        return `" ${item.title}"`;
    }

    getUser (item) {
        if (!item.hasOwnProperty('user')) {
            return '';
        }
        return `${item.user}`;
    }

    render() {
        const { item } = this.props
        return (
            <div>
                <div>
                    <b>{this.getUser(item)}</b>  <em>{this.getTitle(item)}</em>
                    <div>{item.text}</div>
                </div>
            </div>
        )
    }
}