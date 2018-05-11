import { Fragment } from 'react'

const ReltioJobDescription = (
  <Fragment>
    Working on UI services for MDM (Master Data Management) system (Single Page Application, ReactJS, ES6, NodeJS). <br />
    Integration with REST API and metadata configuration. <br />
    Implementing SSO (Single Sign On) flow for all internal services (OAuth2, NodeJS auth-middleware) <br />
    Contributing to the cross-project UI kit and NodeJS libraries. <br />
    Working on UI localization workflow and internal localization tools <br />
    Unit and integration testing (Jest, CodeceptJS). <br />
    Participating in process management as kanban-master.
  </Fragment>
)

const CrystalsJobDescription = (
  <Fragment>
    Development of front-end automation system for retail trade (Single Page Application, Backbone).
    <br />
    Working with RESTful API. The introduction of modular architecture (AMD, BEM, Requirejs, Bower). <br />
    Unit-testing (Jasmine, Karma, Code-coverage). <br />
    Working with CI-server (Teamcity). <br />
    Using Agile methodology (Scrum)
  </Fragment>
)

const AISJobDescription = (
  <Fragment>
    Develop multi window online terminal for currency exchange (Single Page Application, WebSockets).<br />
    Working with exchange server via WebSockets (SocketIO).<br />
    Templating and rendering highly dynamic data on the client side (KnockoutJS, CanJS).<br />
    The modular architecture design (BEM, RequireJS).
  </Fragment>
)

const YandexMoneyJobDescription = (
  <Fragment>
    Html-coding, refactoring<br />
    The introduction of the BEM methodology, development of javascript components<br />
    Development of the build system for project<br />
    Participation in the development of the third version of Yandex.Money
    <a href="http://www.artlebedev.ru/everything/yandex/money3/"
       target="_blank">http://www.artlebedev.ru/everything/yandex/money3/</a>
  </Fragment>
)

const GeometriaJobDescription = (
  <Fragment>
    Front-end development of new functionality of the media site (photo, video, music)<br />
    Refactoring and optimization of existing code<br />
    Interface design and usability
  </Fragment>
)

const InlineJobDescription = (
  <Fragment>
    Optimization and refactoring of the client part high load
    Internet services (<a href="http://meatinfo.ru/" target="_blank">meatinfo.ru</a>,
    <a href="http://foodretail.ru/" target="_blank">foodretail.ru</a> and others)
    <br />
    Development, interface design, html-coding, javascript programming
    (JQuery, AJAX) and integration (Smarty template engine) of new components and modules.
    <br />
    Close interaction with a team of PHP programmers. Work on AGILE methodology. Work
    with version control systems (SVN/GIT).
  </Fragment>
)

const DevellabJobDescription = (
  <Fragment>
    HTML-coding, client-side graphics optimization, Development and testing of dynamic features (Animations,
    AJAX). <br />
    Participation in the design of interfaces in conjunction with the designer. <br />
    Working closely with web programmer in integrating client side with popular CMS(Drupal, Bitrix, ModX) and other
    solutions on PHP, JSP.
  </Fragment>
)

const SpbAllianceJobDescription = (
  <Fragment>
    Cross-browser(ie6+, FF2+, Opera9+), valid coding based on .psd-layouts. Close interactions with php programmer,
    flash developer and designer.
  </Fragment>
)

const jobs = [
  {
    title: 'Senior Front-end Developer',
    company: 'Reltio',
    url: 'http://www.reltio.com/',
    dateFrom: '01.07.2015',
    dateTo: 'current time',
    Description: ReltioJobDescription
  },
  {
    title: 'Senior Front-end Developer',
    company: 'Crystal Services',
    url: 'http://www.crystals.ru/',
    dateFrom: '19.04.2013',
    dateTo: '18.12.2014',
    Description: CrystalsJobDescription
  },
  {
    title: 'Senior Front-end Developer',
    company: 'AIS Group',
    url: 'http://aintsysgroup.com/',
    dateFrom: '15.03.2012',
    dateTo: '18.04.2013',
    Description: AISJobDescription
  },
  {
    title: 'Front-end Developer',
    company: 'Yandex.Money',
    url: 'https://money.yandex.ru/',
    dateFrom: '25.07.2011',
    dateTo: '14.03.2012',
    Description: YandexMoneyJobDescription
  },
  {
    title: 'Front-end Developer',
    company: 'Geometria.ru',
    url: 'http://geometria.ru/',
    dateFrom: '17.02.2010',
    dateTo: '18.07.2011',
    Description: GeometriaJobDescription
  },
  {
    title: 'Front-end Developer',
    company: 'Inline',
    url: 'http://inline-ltd.ru/',
    dateFrom: '01.07.2009',
    dateTo: '16.02.2010',
    Description: InlineJobDescription
  },
  {
    title: 'Html-coder',
    company: 'Devellab',
    url: 'http://devellab.ru/',
    dateFrom: '01.02.2009',
    dateTo: '01.07.2010',
    Description: DevellabJobDescription
  },
  {
    title: 'Html-coder',
    company: 'SpbAlliance',
    dateFrom: '01.03.2008',
    dateTo: '01.02.2009',
    Description: SpbAllianceJobDescription
  }
]

export default jobs
