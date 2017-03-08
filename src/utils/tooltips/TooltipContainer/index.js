import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'

import styles from './styles.css'

import { Tooltip } from '../../..'
import getBestRelativePlacement from '../../positioning/getBestRelativePlacement'

class TooltipContainer extends Component {
  componentWillMount = () => {
    this.container = document.createElement('div')
    this.container.style.transform = 'matrix(1, 0, 0, 1, 0, 0)'
    this.container.style.position = 'absolute'
    this.container.style.visibility = 'hidden'
    this.container.style.top = '0px'
    this.container.style.left = '0px'
    this.container.style.width = '100%'
    document.body.appendChild(this.container)
  }

  componentWillReceiveProps = ({ content, placement }) => {
    if (!content) {
      this.setState({ tooltipBounds: null })

      return null
    }

    render(<Tooltip content={content} placement={placement} />,
      this.container,
      () => {
        const tooltipBounds = this.container
          .querySelector(`div`)
          .getBoundingClientRect()

        this.setState({ tooltipBounds })
      }
    )
  }

  render = () => {
    if (!(this.state && this.state.tooltipBounds)) {
      return null
    }

    const { tooltipBounds: tBounds } = this.state
    const { content, anchor, positions } = this.props

    const aBounds = anchor.getBoundingClientRect()

    const { rect: { left, top }, position } = getBestRelativePlacement({
      positions,
      anchor: {
        left: aBounds.left,
        right: aBounds.right,
        top: aBounds.top,
        bottom: aBounds.bottom,
        width: aBounds.width,
        height: aBounds.height,
        margins: { left: 10, top: 10, right: 10, bottom: 10 }
      },
      centerPoint: 0,
      target: {
        width: tBounds.width,
        height: tBounds.height
      },
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    })

    return (
      <div className={styles.container}>
        <Tooltip
          left={left}
          top={top}
          content={content}
          position={position}
        />
      </div>
    )
  }
}

TooltipContainer.propTypes = {
  positions: PropTypes.array
}

TooltipContainer.defaultProps = {
  positions: ['top', 'bottom', 'left', 'right']
}

export default TooltipContainer
