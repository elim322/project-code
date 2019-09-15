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

        return (
            <main>
                <div className="signin">
                    <div className="grid-container">
                        <div className="signin-info">
                            <div className="logo"><img src={require('../img/code-logo.png')}></img></div>
                            <h1>Welcome to C.O.D.E.</h1>
                            <div className="signin-content">
                                <p className="info-header">Program Information</p>
                                <ul className="point">
                                    <li>Recommended for ages 8 to 18</li>
                                    <li>Easy pairing with tutors</li>
                                    <li>Manage your booking online</li>
                                </ul>
                            </div>
                        </div>
                        {/* User selected (independent) Learner */}
                        <form action="" method="get" className="form-signin">
                            <div className="namecard">
                                <div className="card-punchhole"></div>
                                <section className="card-content">
                                    <h2>Sign up</h2>
                                    <div>
                                        <label>Email</label><br></br>
                                        <input type="email"></input>
                                    </div>
                                    <div>
                                        <label>Password</label><br></br>
                                        <input type="password"></input>
                                    </div>
                                    <div>
                                        <label>Confirm Password</label><br></br>
                                        <input type="password"></input>
                                    </div>
                                    <input className="btn-primary" type="submit" value="Create Account"></input>
                                </section>
                            </div>
                        </form>
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