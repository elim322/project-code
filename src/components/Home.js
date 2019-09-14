import React from 'react'
import { Link } from 'react-router-dom'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class Home extends React.Component {

    componentWillReceiveProps(nextProps) {
        if (this.props.location.key !== nextProps.location.key) {
            this.props.allPostsQuery.refetch()
        }
    }

    render() {
        /*if (this.props.allPostsQuery.loading) {
            return (
                <div className='flex w-100 h-100 items-center justify-center pt7'>
                    <div>
                        Loading
                        (from {process.env.REACT_APP_GRAPHQL_ENDPOINT})
                    </div>
                </div>
            )
        }

        let blurClass = ''
        if (this.props.location.pathname !== '/') {
            blurClass = ' blur'
        }*/

        return (
            /*<div className={'w-100 flex justify-center pa6' + blurClass}>
                <div className='w-100 flex flex-wrap' style={{maxWidth: 1150}}>
                    <Link
                        to='/create'
                        className='ma3 box new-post br2 flex flex-column items-center justify-center ttu fw6 f20 black-30 no-underline'
                    >
                        <img
                            src={require('../assets/plus.svg')}
                            alt=''
                            className='plus mb3'
                        />
                        <div>New Post</div>
                    </Link>
                    {this.props.allPostsQuery.allPosts && this.props.allPostsQuery.allPosts.map(post => (
                        <Post
                            key={post.id}
                            post={post}
                            refresh={() => this.props.allPostsQuery.refetch()}
                        />
                    ))}
                </div>
                {this.props.children}
            </div>*/
            <div class="grid-container">
                <div class="signin-info">
                    <img src="../assets/logo.png" class="logo"></img>
                    <h1>Welcome to C.O.D.E.</h1>
                    <p class="info-header">Program Information</p>
                    <ul>
                        <li>Recommended for ages 8 to 18</li>
                        <li>Easy pairing with tutors</li>
                        <li>Manage your booking online</li>
                    </ul>
                </div>
                <div class="signin-card">
                    <div class="card-punchhole"></div>
                    <div>
                        <label>Email</label><br></br>
                        <input type="email"></input>
                    </div>
                    <div>
                        <label>Password</label><br></br>
                        <input type="password"></input>
                    </div>
                    <input type="submit" value="Sign In"></input>
                </div>
            </div>

        )
    }
}

const ALL_POSTS_QUERY = gql`
  query AllPostsQuery {
    allPosts(orderBy: createdAt_DESC) {
      id
      imageUrl
      description
    }
  }
`;

const HomeWithQuery = graphql(ALL_POSTS_QUERY, {
    name: 'allPostsQuery',
    options: {
        fetchPolicy: 'network-only',
    },
})(Home);

export default HomeWithQuery