import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            type: ''
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePwChange = this.handlePwChange.bind(this);
        this.handleSignIn = this.handleSignIn.bind(this);
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handlePwChange(event) {
        this.setState({password: event.target.value});
    }

    handleSignIn = async () => {
        const {email, password, type} = this.state;
        await this.props.signInQuery({variables: {email, password, type}});
        this.props.history.replace('/');
    };

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
                        <div className="namecard">
                            <div className="card-punchhole"></div>
                            <section className="card-content">
                                <h2>Sign in</h2>
                                
                                <div>
                                    <label>Email</label><br></br>
                                    <input type="email" value={this.state.email} onChange={this.handleEmailChange}></input>
                                </div>
                                <div>
                                    <label>Password</label><br></br>
                                    <input type="password" value={this.state.password} onChange={this.handlePwChange}></input>
                                </div>
                                <input className="btn-primary" type="submit" onClick={this.handleSignIn} value="Sign In"></input>

                                <p><a className="link-minor" href="/signup">Sign up with Email</a></p>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

const SIGN_IN_QUERY = gql`
  mutation ($email: String!, $password: String!, $type: String!) {
      createUser(email: $email, password: $password, type: $type) {
        id
      }
  }
`;

const HomeWithQuery = graphql(SIGN_IN_QUERY, {name: 'signInQuery'})(Home);
export default HomeWithQuery