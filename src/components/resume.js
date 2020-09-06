import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return(
            <div className='resume-body'>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                              src={process.env.PUBLIC_URL + '/kris.png'}
                              alt="avatar"
                              style={{height: '350px'}}
                              ></img>
                        </div>

                        <h2 style={{paddingTop: '1em'}}>Chris K. Lee</h2>
                        <h4 style={{color: 'grey'}}>Full Stack Web Developer</h4>
                        <hr style={{borderTop: '3px solid #678EFF', width: '50%'}}/>
                        <p>A new graduate from Computer Engineering at the University of British Columbia, who is highly interested in Full-stack Web Development, Cloud, and DevOps. Actively looking for a full-time Software Engineering position for January 2021.
                        </p>
                        <hr style={{borderTop: '3px solid #678EFF', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>11 E 11th Ave., Vancouver, BC, V5T 2B9</p>
                        <h5>Phone</h5>
                        <p>(778) 325-6242</p>
                        <h5>Email</h5>
                        <p>krisley3094@gmail.com</p>
                        <h5>Web</h5>
                        <p>kriszley.github.io/website</p>
                        <hr style={{borderTop: '3px solid #678EFF', width: '50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>

                    <hr style={{borderTop: '3px solid #FF5F5F'}} />

                    <h2>Experience</h2>

                    <Experience
                    startYear="May 2019"
                    endYear="Present"
                    jobName="UBC Mobile Health R&D"
                    jobLocation="Vancouver, Canada."
                    jobDescription1="● Developed Smart Text Analytics SaaS with Python, React, and Angular, which uses NLP to identify patient needs from patient-doctor conversational datasets, in collaboration with UBC NLP Research Group"
                    jobDescription2="● Introduced containerization of all services, microservice architecture, AWS EB multi-container instances, and automation which increased modularity, and reduced the total deployment time by 90%"
                    jobDescription3="● Migrated cloud services from Azure to AWS and optimized the services which reduced the monthly cost by 90%"
                    jobDescription4="● Implemented an automated daily export pipeline using AWS S3, SQS, Lambda, and EB, that processes a big SMS conversational dataset, calls NLP microservices and parse results into JSON for visualization in D3.js"
                    jobDescription5="● Designed the Authentication and Authorization system including JWT, role-based access control, and API keys which enhanced the security and interoperability with third-party applications"
                    jobDescription6="● Collaborated with medical experts to train/test custom NLP text classifier model to detect COVID-19 related topics from the real-world conversational datasets (CIHR federal government-funded project)"
                    />

                    <Experience
                    startYear="Jan 2019"
                    endYear="Apr 2019"
                    jobName="Teradici Inc."
                    jobLocation="Burnaby, Canada."
                    jobDescription1="● Conducted build/test automation, CI/CD using script languages such as Bash, Python, and Powershell using tools such as TeamCity, and AWS CLI, EC2, and S3"
                    jobDescription2="● Migrated traditional on-premise TeamCity build infrastructure to the Cloud environment"
                    jobDescription3="● Implemented simple front-end UIs for the ‘PCoIP Management Console’ using jQuery"
                    jobDescription4="● Designed a Threat Model by identifying and analyzing possible security threats to the build processes"
                    />

                    <Experience
                    startYear="Sept 2018"
                    endYear="Nov 2018"
                    jobName="CA Technologies Inc."
                    jobLocation="Vancouver, Canada."
                    jobDescription1="● Completed migration project of CA Microgateway solution from a legacy test automation tool to the Java-based REST-Assured
                    framework"
                    jobDescription2="● Conducted code refactorings and improved the maintainability based on DRY, SOLID, KISS principles"
                    jobDescription3="● Diagnosed and resolved defects in REST-Assured test suites, TeamCity build pipelines, and Docker images"
                    jobDescription4="● Improved the Wiki documentation by reviewing through resources and updating the outdated information"
                    />

                    <Experience
                    startYear="May 2018"
                    endYear="Sept 2018"
                    jobName="JOMAR Softcorp International Inc."
                    jobLocation="Vancouver, Canada."
                    jobDescription1="● Improved the web-based ERP Software by maintaining and enhancing features using Java Servlet, Microsoft SQL Server/Oracle,
                    JSP, and XML/XSL"
                    jobDescription2="● Enhanced existing backend implementations by adding and modifying features based on client specifications"
                    jobDescription3="● Used JDBC to write and execute SQL queries to invoke CRUD operations with the Microsoft SQL Server/Oracle"
                    />

                    <Experience
                    startYear="Aug. 2015"
                    endYear="May. 2017"
                    jobName="U.S. Army"
                    jobLocation="Dongducheon, South Korea."
                    jobDescription1="● Won the ‘Best Soldier of the Year Award’ out of 70 soldiers from the Division Commanding General"
                    jobDescription2="● Installed and maintained military-grade hardware and software systems and minimized the delays in missions"
                    />

                    <hr style={{borderTop: '3px solid #FF5F5F'}} />

                    <h2>Skills</h2>
                    <Skills 
                        skillCategory="Programming"
                        skills="Python | Java | Javascript | HTML5/CSS3 | C/C++ | SQL"/>

                    <Skills 
                        skillCategory="DevOps"
                        skills="AWS/Azure | Docker | TeamCity/Jenkins | Git"/>

                    <Skills 
                        skillCategory="Frameworks/Libraries"
                        skills="Flask | Express | Angular | JQuery | Pandas | Scikit-learn | spaCy | StanfordCoreNLP"/>

                    <hr style={{borderTop: '3px solid #FF5F5F'}} />

                    <h2>Education</h2>
                    <Education
                        startYear={2013}
                        endYear={2020}
                        schoolName="University of British Columbia"
                        schoolLocation="B.ASc. in Computer Engineering."
                        schoolDescription="● Honors: Graduation with Academic Distinction"
                    />
                
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;