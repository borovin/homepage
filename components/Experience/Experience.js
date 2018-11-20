import { Fragment, PureComponent } from 'react'
import styles from './Experience.css'
import { Divider, Typography } from '@material-ui/core'

export default class Experience extends PureComponent {
  static defaultProps = {
    jobs: []
  }

  render () {
    return (
      <Fragment>
        {this.props.jobs.map((job, i) =>
          <Fragment key={job.company}>
            <Typography variant='title' style={{paddingBottom: '8px'}}>
              {job.url ? (<a href={job.url}>{job.company}</a>) : job.company}
            </Typography>
            <Typography variant='caption' style={{paddingBottom: '20px'}}>
              {job.dateFrom} - {job.dateTo}
            </Typography>
            <Typography component='p'>
              {job.Description}
            </Typography>
            <Divider style={{margin: '40px 0'}} />
          </Fragment>
        )}
      </Fragment>
    )
  }
}