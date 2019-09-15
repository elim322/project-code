import React from 'react'
import { Link } from 'react-router-dom'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class ProfileSetup extends React.Component {

    componentWillReceiveProps(nextProps) {
        if (this.props.location.key !== nextProps.location.key) {
            this.props.allPostsQuery.refetch()
        }
    }
    
    constructor(props){
        super(props)
            this.state={
                learner: false
            }
        //this.handleClickLearner = this.handleClickLearner.bind(this);
        //this.handleClickParent = this.handleClickParent.bind(this);
    }

    handleClickParent = () => {
        this.setState({learner: false});

    }
 
    handleClickLearner = () => {
        this.setState({learner: true});
    }

    render() {

        if(this.state.learner){
            return (

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
                                <h2>Sign up as</h2>
                                <div className="radio-usertype">
                                    <input type="radio" onClick={this.handleClickParent} id="userTypeParent" name="userType" value="parent"></input>
                                    <label for="userTypeParent">Parent</label>
                                    <input type="radio" onClick={this.handleClickLearner} id="userTypeLearner" name="userType" value="learner" checked></input>
                                    <label for="userTypeLearner">Learner</label>
                                </div>
                            </div>
                            {/* User selected (independent) Learner */}
                            <form action="" method="get" id="form-signup-sololearner">
                                <div className="namecard">
                                    <div className="card-punchhole"></div>
                                    <section className="card-content">
                                        <h2>Learner Info</h2>
                                        <div className="form-pic-name">
                                            <div className="profile-circle">
                                                <img className="profile-pic" src=""></img>
                                            </div>
                                            <input id="imageUploadSoloLearner" type="file" name="imageUploadSoloLearner" placeholder="Photo" capture></input>
                                            <div className="profile-name">
                                                <label for="userName">Full Name</label><br></br>
                                                <input name="userName" id="userName" type="text"></input><br></br>
                                                <span class="text-minor">A profile picture will help your students easily identify you.</span>
                                            </div>
                                        </div>
                                        <div>
                                            <label for="userEmail">Email</label><br></br>
                                            <input name="userEmail" id="userEmail" type="email"></input>
                                        </div>
                                        <div>
                                            <label for="userTel">Phone Number</label><br></br>
                                            <input name="userTel" id="userTel" type="tel"></input>
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
                                        <hr></hr>
                                        <h2>Additional Info</h2>
                                        <div>
                                            <label for="userAge">Age</label><br></br>
                                            <input name="userAge" id="userAge" type="number"></input>
                                        </div>
                                        <div>
                                            <label for="locationPref">Preferred Locations</label><br></br>
                                            <input name="locationPref" id="locationPref" type="text"></input>
                                        </div>
                                        <div>
                                            <label for="accAcc">Accessibility Accommodations</label><br></br>
                                            <input name="accAcc" id="accAcc" type="text"></input>
                                        </div>
                                        <Link to={`/calendar`}><input className="btn-primary" type="submit" value="Start booking sessions"></input></Link>
                                    </section>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            )
        } else {
            return (

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
                                <h2>Sign up as</h2>
                                <div className="radio-usertype">
                                    <input type="radio" onClick={this.handleClickParent} id="userTypeParent" name="userType" value="parent" checked></input>
                                    <label for="userTypeParent">Parent</label>
                                    <input type="radio" onClick={this.handleClickLearner} id="userTypeLearner" name="userType" value="learner"></input>
                                    <label for="userTypeLearner">Learner</label>
                                </div>
                            </div>
                            <form action="" method="get" id="form-signup-parent">
                                <div className="namecard">
                                    <div className="card-punchhole"></div>
                                    <section className="card-content">                                        
                                        <h2>Parent / Guardian Info</h2>
                                        <div className="form-pic-name">
                                            <div className="profile-circle">
                                                <img className="profile-pic" src=""></img>
                                            </div>
                                            <input id="imageUploadParent" type="file" name="imageUploadParent" placeholder="Photo" capture></input>
                                            <div className="profile-name">
                                                <label for="parentName">Full Name</label><br></br>
                                                <input name="parentName" id="parentName" type="text"></input><br></br>
                                                <span class="text-minor">A profile picture will help your students easily identify you.</span>
                                            </div>
                                        </div>
                                        <div>
                                            <label for="parentEmail">Email</label><br></br>
                                            <input name="parentEmail" id="parentEmail" type="email"></input>
                                        </div>
                                        <div>
                                            <label for="parentTel">Phone Number</label><br></br>
                                            <input name="parentTel" id="parentTel" type="tel"></input>
                                        </div>
                                        <div>
                                            <p>I prefer to be contacted via:</p>
                                            <input type="checkbox" id="email" name="parentContactPref"></input>
                                            <label for="email">Email</label>
                                            <input type="checkbox" id="sms" name="parentContactPref"></input>
                                            <label for="sms">SMS text</label>
                                            <input type="checkbox" id="call" name="parentContactPref"></input>
                                            <label for="call">Phone call</label>
                                        </div>
                                    </section>
                                </div>
                                {/* Parent's learner */}
                                {/* learner - add more and change id numbers */}
                                <div className="namecard">
                                    <div className="card-punchhole"></div>
                                    <section className="card-content">    
                                        <div id="parent-learner1">
                                            <h2>Learner 1 Info</h2>
                                            <div className="form-pic-name">
                                                <div className="profile-circle">
                                                    <img className="profile-pic" src=""></img>
                                                </div>
                                                <input id="imageUploadLearner1" type="file" name="imageUploadLearner1" placeholder="Photo" capture></input>
                                                <div className="profile-name">
                                                <label for="learner1Name">Full Name</label><br></br>
                                                    <input name="learner1Name" id="learner1Name" type="text"></input><br></br>
                                                    <span class="text-minor">A profile picture will help your students easily identify you.</span>
                                                </div>
                                            </div>
                                            <div>
                                                <label for="learner1Age">Age</label><br></br>
                                                <input name="learner1Age" id="learner1Age" type="number"></input>
                                            </div>
                                            <div>
                                                <label for="learner1LocationPref">Preferred Locations</label><br></br>
                                                <input name="learner1LocationPref" id="learner1LocationPref" type="text"></input>
                                            </div>
                                            <div>
                                                <label for="learner1AccAcc">Accessibility Accommodations</label><br></br>
                                                <input name="learner1AccAcc" id="learner1AccAcc" type="text"></input>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                                <div className="namecard">
                                    <section className="card-content">    
                                        <p><a href="" className="btn-secondary" id="learnerAddAnother">Add another learner</a></p>
                                        <Link to={`/calendar`}><input className="btn-primary" type="submit" value="Start booking sessions"></input></Link>
                                    </section>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>

            )
        }
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

const ProfileSetupWithQuery = graphql(ALL_POSTS_QUERY, {
    name: 'allPostsQuery',
    options: {
        fetchPolicy: 'network-only',
    },
})(ProfileSetup);

export default ProfileSetupWithQuery