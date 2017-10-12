import React, { Component } from 'react'
import ReduxFormForm from './ReduxFormForm'
import { connect } from 'react-redux'
import { AddPost } from '../actions/postActions'

class ReduxFormContainer extends Component {
    showResults = values => {
        this.props.addPost(values)
    }

    render() {
        return (
            <div className="App">
                {console.log('woooosoo', this.props.posts)}
                <ReduxFormForm onSubmit={this.showResults} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addPost: post => dispatch(AddPost(post))
})

const mapStateToProps = state => ({
    posts: state.content.posts
})

export default connect(mapStateToProps, mapDispatchToProps)(ReduxFormContainer)
