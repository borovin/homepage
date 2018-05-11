import { PureComponent } from 'react'

export default class ProjectSlider extends PureComponent {
  static defaultProps = {
    project: {}
  }

  render () {
    return (
      <div className="slider">
        <div className="slider__mask">

          {this.props.project.items.map((item, i) => (
            <div key={`item-${i}`} className="slider__item">
              <a className="slider__itemLink"
                 target="_blank"
                 data-navigate="0"
                 href={item.url}>
                <img alt="#" src={item.screenUrl} />
              </a>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
