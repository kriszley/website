import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Skills extends Component { 
    render() {
        return(
            <Grid>
                <Cell col={4}>
                    <p className="resume-skill-category">{this.props.skillCategory}:</p>
                </Cell>
                <Cell col={8}>
                    <div className="resume-skills" style={{display: 'flex'}}>{this.props.skills}</div>
                </Cell>
            </Grid>
        )
    }
}

export default Skills;