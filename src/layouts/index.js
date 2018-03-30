import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="A. Capelo - Frontend Engineer and all-around good guy"
      meta={[
        { name: 'description', content: 'António Capelo personal homepage' },
        { name: 'keywords', content: 'web developer, engineer, porto, portugal, capelo, antónio capelo, frontend engineer' },
      ]}
    />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 1280,
        padding: '0',
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
