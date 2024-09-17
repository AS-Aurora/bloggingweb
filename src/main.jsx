import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import SlidingBanner from './components/SlidingBanner.jsx'
import Layout from './Layout.jsx'
import Body from './components/body/body.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import Protected from './components/AuthLayout.jsx'
import AddFile from './components/parts/AddFile.jsx'
import SeeFiles from './components/parts/SeeFiles.jsx'
import Home from './home/Home.jsx'
import Login from './components/parts/Login.jsx'
import Signup from './components/parts/Signup.jsx'
import File from './components/parts/File.jsx'
import EditFile from './components/parts/EditFile.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={
        <>
        <SlidingBanner />
        <Body />
        </>
        } />
        {/* <Route path='/home' element={<Home />} />
        <Route path='/login' element={
          <Protected authentication={false} >
            <Login />
          </Protected>
        } />
        <Route path='/signup' element={
          <Protected authentication={false} >
            <Signup />
          </Protected>
          } />
          <Route path='/addfile' element={
            <Protected authentication>
              <AddFile />
            </Protected>
          } />
          <Route path='/editfile/:slug' element={
            <Protected authentication>
              <EditFile />
            </Protected>
          } />
          <Route path='/seefiles' element={
            <Protected authentication>
              <SeeFiles />
            </Protected>
          } />
          <Route path='/file/:slug' element={
            <Protected authentication>
              <File />
            </Protected>
          } /> */}
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
