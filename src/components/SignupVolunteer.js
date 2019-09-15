import React from 'react'
import { Link } from 'react-router-dom'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class SignupVolunteer extends React.Component {

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
                            <h1>Set up your account</h1>
                            <div className="signin-content">
                                <p className="info-header">What we collect</p>
                                <ul className="point">
                                    <li>All information is kept confidential</li>
                                    <li>We only collect information for your ease of booking</li>
                                </ul>
                            </div>
                        </div>
                        {/* User selected (independent) Learner */}
                        <form action="" method="get" className="form-signup-volunteer">
                            <div className="namecard">
                                <div className="card-punchhole"></div>
                                <section className="card-content">
                                    <h2>Volunteer Info</h2>
                                    <div>
                                        <input id="imageUploadVolunteer" type="file" name="profile_photo" placeholder="Photo" capture></input><br></br>
                                        <label>A profile picture will help your students easily identify you.</label>
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
                                        <label>Password</label><br></br>
                                        <input type="password"></input>
                                    </div>
                                    <div>
                                        <label>Confirm Password</label><br></br>
                                        <input type="password"></input>
                                    </div>
                                    <h2>Additional Info</h2>
                                    <div>
                                        <label>Phone Number</label><br></br>
                                        <input type="tel"></input>
                                    </div>
                                    <div>
                                        <label>Age</label><br></br>
                                        <input type="number"></input>
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
                                    <div>
                                        <label>Preferred Locations</label><br></br>
                                        <input type="text"></input>
                                    </div>
                                    <div>
                                        <label>Accessibility Skills</label><br></br>
                                        <input type="text"></input>
                                    </div>
                                    <div>
                                        <p>What do you like to teach?</p>
                                        <input type="checkbox" id="scratch" name="teachPref"></input>
                                        <label for="scratch">Scratch</label><br></br>
                                        <input type="checkbox" id="scratchAdv" name="teachPref"></input>
                                        <label for="scratchAdv">Scratch Advanced</label><br></br>
                                        <input type="checkbox" id="python" name="teachPref"></input>
                                        <label for="python">Python</label>
                                    </div>
                                    <input className="btn-primary" type="submit" value="Start teaching"></input>
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

const SignupVolunteerWithQuery = graphql(ALL_POSTS_QUERY, {
    name: 'allPostsQuery',
    options: {
        fetchPolicy: 'network-only',
    },
})(SignupVolunteer);

export default SignupVolunteerWithQuery