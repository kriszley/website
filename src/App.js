import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import LandingPage from './components/landingpage';
import Contact from './components/contact';
import Projects from './components/projects';
import Resume from './components/resume';

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
          <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/website">Chris K. Lee</Link>} scroll>
              <Navigation>
                  <Link to="/website">Home</Link>
                  <Link to="/resume">Resume</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
              </Navigation>
          </Header>
          <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/website">Chris K. Lee</Link>}>
              <Navigation>
                  <Link to="/website">Home</Link>
                  <Link to="/resume">Resume</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Route render={({location}) => (
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    timeout={300}
                    classNames='fade'
                    >
                    <Switch key={location.key} location={location}>
                      <Route exact path="/website" component={ LandingPage } />
                      <Route exact path="/contact" component={ Contact } />
                      <Route exact path="/projects" component={ Projects } />
                      <Route exact path="/resume" component={ Resume } />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              )} />
              
              
              
          </Content>
      </Layout>
    </div>
  );
}

export default App;