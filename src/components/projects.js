import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton, Dialog, DialogContent, DialogTitle } from 'react-mdl';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import ModalVideo from 'react-modal-video';

class Projects extends Component {


    render() {
        return(
            <div className="projects-body">
                <Grid>
                    <Cell col={12}>
                    <div className='projects-grid'>
                    <Card className='projects-cards' shadow={5}>
                        <CardTitle style={{color: '#000', height: '176px', background:
                    'url(https://msandbu.org/wp-content/uploads/2019/09/microsoft-azure-managed-services-2-1.png) center / cover'}} >
                            Cloud InfraViz
                        </CardTitle>
                        <CardText>
                        A web application that dynamically fetches information about as-is deployed Azure services infrastructure, and graphically
    displays a human-readable representation and analysis of the overall services.
                        </CardText>
                        <CardActions>
                            <a href="https://youtu.be/Q-OGx0rTlyA" rel="noopener noreferrer" target="_blank">
                                <Button colored>LiveDemo</Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card className='projects-cards' shadow={5}>
                        <CardTitle style={{color: '#000', height: '176px', background:
                    'url(https://f0.pngfuel.com/png/739/158/health-physical-fitness-icon-healthy-living-running-fitness-line-graph-illustration-png-clip-art.png) center / cover'}} >
                            Fitness SmartWatch
                        </CardTitle>
                        <CardText>
                        An integrated system of DE1(GPS, HR sensor, Touch sensor, SD card, Microphone) and Android application that provides current/previous exercise data and data analysis to keep track of improvement.
                        </CardText>
                        <CardActions>
                            <a href="https://github.com/kriszley/Fitness_Smart_Watch" rel="noopener noreferrer" target="_blank">
                                <Button colored>Github</Button>
                            </a>
                            <a href="https://youtu.be/ty6aD7KTIVk" rel="noopener noreferrer" target="_blank">
                                <Button colored>LiveDemo</Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
{/* 
                    </div>
                    <div className='projects-grid'> */}

                    <Card className='projects-cards' shadow={5}>
                        <CardTitle style={{color: '#000', height: '176px', background:
                    'url(https://cdn.dribbble.com/users/915711/screenshots/5827197/calorie_tracker.png) center / cover'}} >
                            Android Calorie Tracker
                        </CardTitle>
                        <CardText>
                        An Android calorie tracking system which fetches calorie data using an Open-source API and also provides social network service to allow users to share health status.
                        </CardText>
                        <CardActions>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    
                    <Card className='projects-cards' shadow={5}>
                        <CardTitle style={{color: '#000', height: '176px', background:
                    'url(https://image.flaticon.com/icons/png/512/1699/1699553.png) center / cover'}} >
                            IoT Pet Feeder
                        </CardTitle>
                        <CardText>
                        An Internet of Things (IoT) Smart Pet Feeding system which notifies via Twitter a pet’s feeding status, including the time at which it dispensed food, pet began to eat, and whether the food was emptied or left.
                        </CardText>
                        <CardActions>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>


                    <Card className='projects-cards' shadow={5}>
                        <CardTitle style={{color: '#000', height: '176px', background:
                    'url(https://www.iconsdb.com/icons/preview/guacamole-green/turtle-xxl.png) center / cover'}} >
                            Auto TurtleBot
                        </CardTitle>
                        <CardText>
                        A robot which repeatedly travels forward and turns 90° at an obstacle. Also listens and initiates motions based on the clap patterns.
                        </CardText>
                        <CardActions>
                            <a href="https://youtu.be/XQ8KnBO2ZMM" rel="noopener noreferrer" target="_blank">
                                <Button colored>LiveDemo 1</Button>
                            </a>
                            <a href="https://youtu.be/VirHec8ARtY" rel="noopener noreferrer" target="_blank">
                                <Button colored>LiveDemo 2</Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;