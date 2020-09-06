import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
class LandingPage extends Component {
    render() {
        return(
            <div className="landing-body">
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src={process.env.PUBLIC_URL + '/kris_avatar.png'}
                             alt="avatar"
                             className="avatar-img"
                             />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>

                            <hr style={{borderTop: '3px solid #678EFF', width: '80%'}}/>
                            

                            <p>Python | Java | NodeJS | Express | React | Angular | SQL | AWS/Azure | Docker | TeamCity/Jenkins | Git</p>
                            <div className="social-links">

                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/krisley3094" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* GitHub */}
                                <a href="https://github.com/kriszley" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                                
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;