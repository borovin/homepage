import { Fragment, PureComponent } from 'react'
import styles from './Experience.css'
import { Card, CardContent, CardHeader, Typography } from 'material-ui'

export default class Experience extends PureComponent {
  static defaultProps = {
    jobs: []
  }

  render () {
    return (
      <Fragment>
        {this.props.jobs.map((job, i) =>
          <Card key={`job-${i}`} className={styles.card}>
            <CardHeader
              title={job.url ? (<a href={job.url}>{job.company}</a>) : job.company}
              subheader={<Fragment>{job.dateFrom} - {job.dateTo}</Fragment>}
            />
            <CardContent>
              <Typography component='p'>
                {job.Description}
              </Typography>
            </CardContent>
          </Card>
        )}
      </Fragment>
    )
  }
}