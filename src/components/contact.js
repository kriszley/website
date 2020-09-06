import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Chris K. Lee</h2>
                        <img
                          src={process.env.PUBLIC_URL + '/kris_contact_pic.png'}
                          alt="avatar"
                          style={{height: '250px'}}>
                        </img>
                        <p style={{ 'font-size':'20px', width: '75%', margin: 'auto', paddingTop: '1em'}}>
                        I am currently looking for a <u>full-time</u> software engineer position.<br/><br/>
                        Please feel free to contact. I would love to hear from you!
                        </p>
                        <div style={{ 'font-size':'30px', width: '75%', margin: 'auto', paddingTop: '0.25em'}}>
                        :)
                        </div>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton', margin: 'auto'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                         (778) 325-6242</ListItemContent>
                                </ListItem>
                                
                                <ListItem>
                                    <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton', margin: 'auto'}}>
                                        <i className="fa fa-envelope" aria-hidden="true" style={{'font-size': '48px', 'padding-right': '3rem'}}/>
                                        krisley3094@gmail.com</ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton', margin: 'auto'}}>
                                        <i className="fa fa-skype" aria-hidden="true"/>
                                         krisley3094</ListItemContent>
                                </ListItem>
                            </List>
                        </div>

                        
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;