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
                        <form action="" method="get" id="form-signup-volunteer">
                            <div className="namecard">
                                <div className="card-punchhole"></div>
                                <section className="card-content">
                                    <h2>Volunteer Info</h2>
                                    <div className="form-pic-name">
                                        <div className="profile-circle">
                                            <img className="profile-pic" src=""></img>
                                        </div>
                                        <input id="imageUploadVolunteer" type="file" name="imageUploadVolunteer" placeholder="Photo" capture></input>
                                        <div className="profile-name">
                                            <label for="userName">Full Name</label><br></br>
                                            <input name="userName" id="userName" type="text" value="Alex Nuss"></input><br></br>
                                            <span class="text-minor">A profile picture will help your students easily identify you.</span>
                                        </div>
                                    </div>
                                    <div>
                                        <label for="userEmail">Email</label><br></br>
                                        <input name="userEmail" id="userEmail" type="email" value="alex@email.com"></input>
                                    </div>
                                    <div>
                                        <label for="userPass">Password</label><br></br>
                                        <input name="userPass" id="userPass" type="password" value="12345678"></input>
                                    </div>
                                    <div>
                                        <label for="userPassConfirm">Confirm Password</label><br></br>
                                        <input name="userPassConfirm" id="userPassConfirm" type="password" value="12345678"></input>
                                    </div>
                                    <hr></hr>
                                    <h2>Additional Info</h2>
                                    <div>
                                        <label for="userTel">Phone Number</label><br></br>
                                        <input name="userTel" id="userTel" type="tel" value="604-123-4567"></input>
                                    </div>
                                    <div>
                                        <label for="userAge">Age</label><br></br>
                                        <input name="userAge" id="userAge" type="number" value="23"></input>
                                    </div>
                                    <div>
                                        <p>I prefer to be contacted via:</p>
                                        <input type="checkbox" id="email" name="contactPref"></input>
                                        <label for="email">Email</label>
                                        <input type="checkbox" id="sms" name="contactPref" checked></input>
                                        <label for="sms">SMS text</label>
                                        <input type="checkbox" id="call" name="contactPref"></input>
                                        <label for="call">Phone call</label>
                                    </div>
                                    
                                    <div>
                                        <label for="locationPref">Preferred Locations</label><br></br>
                                        <input name="locationPref" id="locationPref" type="text" value="Vancouver, Coquitlam"></input>
                                    </div>
                                    <div>
                                        <label for="accSkills">Accessibility Skills</label><br></br>
                                        <input name="accSkills" id="accSkills" type="text" value="Autism, ADHD"></input>
                                    </div>
                                    <div>
                                        <p>What do you like to teach?</p>
                                        <input type="checkbox" id="scratch" name="teachPref" checked></input>
                                        <label for="scratch">Scratch</label><br></br>
                                        <input type="checkbox" id="scratchAdv" name="teachPref" checked></input>
                                        <label for="scratchAdv">Scratch Advanced</label><br></br>
                                        <input type="checkbox" id="python" name="teachPref"></input>
                                        <label for="python">Python</label>
                                    </div>
                                    <Link to={`/calendar`}><input className="btn-primary" type="submit" value="Start teaching"></input></Link>
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