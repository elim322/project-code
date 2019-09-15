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
                        <form action="" method="get" id="form-signup">
                            <div className="namecard">
                                <div className="card-punchhole"></div>
                                <section className="card-content">
                                    <h2>Sign up</h2>
                                    <div>
                                        <label for="userEmail">Email</label><br></br>
                                        <input name="userEmail" id="userEmail" type="email" value="sam@email.com"></input>
                                    </div>
                                    <div>
                                        <label for="userPass">Password</label><br></br>
                                        <input name="userPass" id="userPass" type="password" value="12345678"></input>
                                    </div>
                                    <div>
                                        <label for="userPassConfirm">Confirm Password</label><br></br>
                                        <input name="userPassConfirm" id="userPassConfirm" type="password" value="12345678"></input>
                                    </div>
                                    <Link to={`/profile-setup`}><input className="btn-primary" type="submit" value="Create Account"></input></Link>
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