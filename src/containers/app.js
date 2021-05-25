import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Loader from '../components/loader/loader'
import Routes from './routes'

function App () {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes />
      </Suspense>
    </BrowserRouter>
  )
}

export default App
