import { PureComponent } from 'react'
import { Card, CardContent, CardHeader, Typography } from 'material-ui'

export default class Resume extends PureComponent {
  render () {
    return (
      <Card>
        <CardHeader
          title='Professional knowledge and skills'
        />
        <CardContent>
          <Typography component='p'>
            HTML5/CSS3 - coding with <a href="https://en.bem.info/method/" target="_blank">BEM methodology</a>
            <br /><br />
            Strong knowledge of Javascript: native, HTML5-API, Javascript frameworks (BackboneJS, ReactJS), Javascript OOP,
            AMD/ES6 modules (RequireJS, BabelJS), JS-templates (EJS, Handlebars), WebSockets, Local Storage,
            CORS.
            <br /><br />
            Unit-testing: Jest, Jasmine, Karma, Code coverage (Istanbul)<br />
            Acceptance-testing: Selenium, CodeceptJS, WebdriverIO, CasperJs
            <br /><br />
            Front-end optimization, code refactoring. Working with GIT (Gitflow).
            Working with Continuous Static Analysis (<a href="https://codacy.com/" target="_blank">codacy</a>,
            <a href="https://codeclimate.com/" target="_blank">codeclimate</a>) and Continuous Integration
            tools (<a
            href="https://www.jetbrains.com/teamcity/" target="_blank">teamcity</a>,
            <a href="https://circleci.com/" target="_blank">circleci</a>,
            <a href="https://travis-ci.org/" target="_blank">Travis CI</a>)
            Experience in UX and UI design (<a href="http://www.google.com/design/" target="_blank">Material
            Design</a>). Certified Scrum-Master.
          </Typography>
        </CardContent>
      </Card>
    )
  }
}