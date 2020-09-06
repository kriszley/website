import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
    render() {
        return(
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>    
                <Cell col={8}>
                    <h4 style={{marginTop:'0px'}}>{this.props.jobName}
                        <div className="resume-job-location">{this.props.jobLocation}
                        </div>
                    </h4>
                        <div className='resume-job-description'>{this.props.jobDescription1}</div>
                        <div className='resume-job-description'>{this.props.jobDescription2}</div>
                        <div className='resume-job-description'>{this.props.jobDescription3}</div>
                        <div className='resume-job-description'>{this.props.jobDescription4}</div>
                        <div className='resume-job-description'>{this.props.jobDescription5}</div>
                        <div className='resume-job-description'>{this.props.jobDescription6}</div>
                </Cell>
            </Grid>
        )
        
    }
}

export default Experience;