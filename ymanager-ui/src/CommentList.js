import React, { Component } from 'react'
import CommentTip from './CommentTip'

class CommentList extends Component {
    static defaultProps = {
        comments: []
    }

    render() {
        return (
        <div>
            {this.props.comments.map((comment, i) => <CommentTip comment={comment} key={i} />)}
        </div>
        )
    }
}

export default CommentList