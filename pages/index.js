import React, { PureComponent } from 'react'
import jobs from '../resources/jobs'
import projects from '../resources/projects'
import ProjectSlider from '../components/ProjectSlider/ProjectSlider'
import Resume from '../components/Resume/Resume'
import Experience from '../components/Experience/Experience'
import { Divider, Typography } from 'material-ui'
import LocationIcon from 'material-ui-icons/LocationOn'
import WorkIcon from 'material-ui-icons/Work'
import EmailIcon from 'material-ui-icons/Email'
import PhoneIcon from 'material-ui-icons/Phone'
import PublicIcon from 'material-ui-icons/Public'

export default class MainPage extends PureComponent {
  render () {
    return (
      <div id="page">

        <div className="page__content">
          <Typography variant='display2'>
            Andrew Borovin
          </Typography>

          <div className="resume">
            <div className="resume__top">
              <div className="resume__photo">
                <img src="/static/img/ava2.jpg" alt="Андрей Боровин" />
              </div>
              <div className="resume__info">
                <div className="resume__infoRow">
                  <div className="resume__infoTitle">
                    <LocationIcon />
                  </div>
                  <div className="resume__infoText">Saint-Petersburg</div>
                </div>

                <div className="resume__infoRow">
                  <div className="resume__infoTitle">
                    <WorkIcon />
                  </div>
                  <div className="resume__infoText">Front-end developer</div>
                </div>

                <div className="resume__infoRow">
                  <div className="resume__infoTitle">
                    <PhoneIcon />
                  </div>
                  <div className="resume__infoText" locator="phone">+7-921-890-2868</div>
                </div>

                <div className="resume__infoRow">
                  <div className="resume__infoTitle">
                    <EmailIcon />
                  </div>
                  <div className="resume__infoText">
                    <a href="mailto:a@borovin.com"
                       data-navigate="0"
                       locator="email">a@borovin.com</a>
                  </div>
                </div>

                <div className="resume__infoRow">
                  <div className="resume__infoTitle">
                    <PublicIcon />
                  </div>
                  <div className="resume__infoText">
                    <a locator="githubLink"
                       target="_blank"
                       data-navigate="0"
                       href="https://github.com/borovin">github.com/borovin</a>
                  </div>
                </div>
              </div>

            </div>
            <Divider style={{margin: '40px 0'}} />
            <Experience jobs={jobs} />
            <Divider style={{marginBottom: '40px'}} />
            <Resume />
          </div>
        </div>


        <div className="page__content page__content_projects">

          <div className="page__header">
            <h1 className="page__headerTitle">Projects</h1>
          </div>

          <noindex>

            <div className="portfolio">
              {projects.map((project, i) => (
                <div key={`project-${i}`} className="portfolio__item">
                  <h3 className="portfolio__itemTitle">
                    {project.title}
                  </h3>
                  <ProjectSlider project={project} />
                </div>
              ))}
            </div>

          </noindex>
        </div>

      </div>
    )
  }
}
