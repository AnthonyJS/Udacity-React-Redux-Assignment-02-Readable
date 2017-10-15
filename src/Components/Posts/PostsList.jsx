import React, { Component } from 'react'
import { connect } from 'react-redux'
import { get } from 'lodash'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { GetPosts } from '../../Features/Posts/postActions'
import { GetCategories } from '../../Features/Categories/categoryActions'
import CreatePost from './CreatePost'
import PostRow from './PostRow'

class PostsList extends Component {
    componentDidMount() {
        const { getPosts, getCategories, match } = this.props

        getCategories()

        this.category = get(match, 'params.category')

        getPosts(this.category)
    }

    render() {
        const { posts, categories } = this.props

        return (
            <div>
                <Link to="/">Link to all</Link>
                <ul>
                    {categories.map(cat => (
                        <li key={cat.name}>
                            <Link
                                to={`/${cat.name}`}
                                onClick={() => this.props.getPosts(cat.name)}
                            >
                                {cat.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul>
                    {posts.map(post => <PostRow key={post.id} {...post} />)}
                </ul>

                {this.category && <CreatePost category={this.category} />}
            </div>
        )
    }
}

PostsList.propTypes = {
    posts: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    getPosts: PropTypes.func.isRequired,
    getCategories: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired
}

const mapStateToProps = ({ posts, category }) => ({
    posts: Object.values(posts),
    categories: category.categories
})

const mapDispatchToProps = dispatch => ({
    getPosts: category => dispatch(GetPosts(category)),
    getCategories: () => dispatch(GetCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsList)
