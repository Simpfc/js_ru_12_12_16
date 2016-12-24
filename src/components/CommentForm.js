import React, { Component, PropTypes } from 'react'

class CommentForm extends Component {
    static propTypes = {
    };

    state = {
        username: '',
        email: '',
        comment: ''
    }

    render() {
        return (
            <div className="comment__form">
                <form onSubmit={this.onSubmitHandler}>
                    Your name:<br/>
                    <input type="text" value={this.state.username} onChange={this.handleNameChange}/>
                    <br/>
                    Your email:<br/>
                    <input type="text" value={this.state.email} onChange={this.handleEmailChange}/>
                    <br/>
                    Comment:<br/>
                    <textarea onChange={this.handleCommentChange}  value={this.state.comment}></textarea>
                    <br/>
                    <button>Send</button>
                </form>
            </div>
        )
    }

    onSubmitHandler = ev => {
        ev.preventDefault();
        if(!this.state.email || !this.state.username || !this.state.comment) {
            alert('All fields should be filled');
            return;
        }
        console.log(this.state);
        alert('Form was sent');
    }

    handleNameChange = ev => {
        this.setState({
            username: ev.target.value
        })
    }

    handleEmailChange = ev => {
        this.setState({
            email: ev.target.value
        })
    }

    handleCommentChange = ev => {
        this.setState({
            comment: ev.target.value
        })
    }
}

export default CommentForm