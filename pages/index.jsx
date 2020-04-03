import { Typography } from '@material-ui/core';
import Page from '../components/Page';
import pageStyles from '../components/Page/Page.module.css';
import Profile from '../components/Profile';
import Job from '../components/Job';
import Project from '../components/Project';
import projects from '../data/projects';

const MainPage = () => (
  <Page>
    <div className={pageStyles.column}>
      <Typography variant="h4">Andrew Borovin</Typography>
      <Profile />
      <Typography variant="h5">Experience</Typography>
      <Job
        title={<a href="https://reltio.com">Reltio</a>}
        dates="01.07.2015 - current time"
      >
        Working on UI services for MDM (Master Data Management) system
        (Single Page Application, ReactJS, ES6, NodeJS).
        Integration with REST API and metadata configuration.
        Implementing SSO (Single Sign On) flow for all internal services
        (OAuth2, NodeJS auth-middleware)
        Contributing to the cross-project UI kit and NodeJS libraries.
        Working on UI localization workflow and internal localization tools
        Unit and integration testing (Jest, CodeceptJS).
        Participating in process management as kanban-master.
      </Job>
      <Job
        title={<a href="https://crystals.ru/">Crystal Services</a>}
        dates="19.04.2013 - 18.12.2014"
      >
        Development of front-end automation system for retail trade
        (Single Page Application, Backbone).
        Working with RESTful API. The introduction of modular architecture
        (AMD, BEM, Requirejs, Bower).
        Unit-testing (Jasmine, Karma, Code-coverage).
        Working with CI-server (Teamcity).
        Using Agile methodology (Scrum)
      </Job>
      <Job
        title={<a href="http://aintsysgroup.com/">AIS Group</a>}
        dates="15.03.2012 - 18.04.2013"
      >
        Develop multi window online terminal for currency exchange
        (Single Page Application, WebSockets).
        Working with exchange server via WebSockets (SocketIO).
        Templating and rendering highly dynamic data on the client side (KnockoutJS, CanJS).
        The modular architecture design (BEM, RequireJS).
      </Job>
      <Job
        title={<a href="https://money.yandex.ru/">Yandex.Money</a>}
        dates="25.07.2011 - 14.03.2012"
      >
        Html-coding, refactoring
        The introduction of the BEM methodology, development of javascript components
        Development of the build system for project
        Participation in the development of the third version of Yandex.Money
        {' '}
        <a href="http://www.artlebedev.ru/everything/yandex/money3/">http://www.artlebedev.ru/everything/yandex/money3/</a>
      </Job>
      <Job
        title={<a href="http://geometria.ru/">Geometria.ru</a>}
        dates="17.02.2010 - 18.07.2011"
      >
        Front-end development of new functionality of the media site (photo, video, music)
        Refactoring and optimization of existing code
        Interface design and usability
      </Job>
      <Job
        title={<a href="http://inline-ltd.ru/">Inline</a>}
        dates="01.07.2008 - 16.02.2009"
      >
        Front-end development of new functionality of the media site (photo, video, music)
        Refactoring and optimization of existing code
        Interface design and usability
      </Job>
      <Job
        title={<a href="http://devellab.ru/">Devellab</a>}
        dates="01.02.2007 - 01.07.2008"
      >
        HTML-coding, client-side graphics optimization,
        Development and testing of dynamic features (Animations, AJAX).
        Participation in the design of interfaces in conjunction with the designer.
        Working closely with web programmer in integrating client side with popular
        CMS(Drupal, Bitrix, ModX) and other solutions on PHP, JSP.
      </Job>
      <div className="indent" />
      <Typography variant="h5">Professional knowledge and skills</Typography>
      <div className="indent" />
      <Typography>
        HTML5/CSS3 - coding with BEM methodology
      </Typography>
      <div className="indent" />
      <Typography>
        Strong knowledge of Javascript: native, HTML5-API,
        Javascript frameworks (BackboneJS, ReactJS),
        Javascript OOP, AMD/ES6 modules (RequireJS, BabelJS),
        JS-templates (EJS, Handlebars), WebSockets, Local Storage, CORS.
      </Typography>
      <div className="indent" />
      <Typography>
        Unit-testing: Jest, Jasmine, Karma, Code coverage (Istanbul)
        Acceptance-testing: Selenium, CodeceptJS, WebdriverIO, CasperJs
      </Typography>
      <div className="indent" />
      <Typography>
        Front-end optimization, code refactoring. Working with GIT (Gitflow).
        Working with Continuous Static Analysis (codacy,codeclimate)
        and Continuous Integration tools (teamcity,circleci,Travis CI)
        Experience in UX and UI design (Material Design).
        Certified Scrum-Master.
      </Typography>
    </div>
    <div className={pageStyles.column}>
      <Typography variant="h4">Projects</Typography>
      {projects.map((project) => (
        <Project key={project.name} title={project.title} items={project.items} />
      ))}
    </div>
  </Page>
);

export async function getStaticProps() {
  return {
    props: {
      projects,
    },
  };
}

export default MainPage;
