import React, { Suspense } from 'react'

const AboutPage = React.lazy(() => import('./AboutPage'))

const About:React.FunctionComponent = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <AboutPage />
  </Suspense>
)

export default About