import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

class Radio extends Component {
  constructor() {
    super()
    this.state = {
      radioClick: "name"
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(type) {
    // on radio state change handler
    this.props.sortBy(type)
  }

  render() {
    return (
      <div className='radioButtons'>
        <div className='left'>
          <input type='radio' name='sortBy' onChange={() => this.onChange('name')} />
          <label>&nbsp;&nbsp;Sort by name</label>
        </div>
        <div className='right'>
          <input type='radio' name='sortBy' onChange={() => this.onChange('age')} />
          <label>&nbsp;&nbsp;Sort by age</label>
        </div>
      </div>
    )

  }
}

// Uncomment the snippet below
Radio.propTypes = {
  sortBy: PropTypes.func
}

export default Radio
