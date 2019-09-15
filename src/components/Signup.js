import React from 'react'
import { Link } from 'react-router-dom'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class Signup extends React.Component {

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
            <main>
                <div className="signin">
                    <div className="grid-container">
                        <div className="signin-info">
                            <div className="logo"><img src={require('../img/code-logo.png')}></img></div>
                            <h1>Welcome to C.O.D.E.</h1>
                            <div className="signin-content">
                                <p className="info-header">What we collect</p>
                                <ul className="point">
                                    <li>All information is kept confidential</li>
                                    <li>We only collect information for your ease of booking</li>
                                </ul>
                            </div>
                            <div>
                                <h2>Sign up as</h2>
                                <label><input type="radio" name="userType" value="parent"></input>Parent</label>
                                <label><input type="radio" name="userType" value="learner"></input>Learner</label>
                            </div>
                        </div>
                        <div className="namecard">
                            <div className="card-punchhole"></div>

                            {/* User selected Parent! */}
                            <section className="card-content">
                                <h2>Parent / Guardian Info</h2>
                                <div>
                                <input id="imageUpload" type="file" name="profile_photo" placeholder="Photo" capture></input>
                                </div>
                                <div>
                                    <label>Full Name</label><br></br>
                                    <input type="text"></input>
                                </div>
                                <div>
                                    <label>Email</label><br></br>
                                    <input type="email"></input>
                                </div>
                                <div>
                                    <label>Phone Number</label><br></br>
                                    <input type="tel"></input>
                                </div>
                                <div>
                                    <p>I prefer to be contacted via:</p>
                                    <input type="checkbox" id="email" name="contactPref"></input>
                                    <label for="email">Email</label>
                                    <input type="checkbox" id="sms" name="contactPref"></input>
                                    <label for="sms">SMS text</label>
                                    <input type="checkbox" id="call" name="contactPref"></input>
                                    <label for="call">Phone call</label>
                                </div>
                                <p><a href="" className="btn-primary">Next</a></p>
                                


                                
                                <input className="btn-primary" type="submit" value="Create Account"></input>

                                <p>By signing up you agree to our Terms of Use and Privacy Policy.</p>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
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

const SignupWithQuery = graphql(ALL_POSTS_QUERY, {
    name: 'allPostsQuery',
    options: {
        fetchPolicy: 'network-only',
    },
})(Signup);

export default SignupWithQuery