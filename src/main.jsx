import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import About from './pages/About.jsx'
import Profiles from './pages/Profiles.jsx'
import SingleProfile from './pages/SingleProfile.jsx'
import FocusInput from './pages/FocusInput.jsx'
import PreviousState from './pages/PreviousState.jsx'
import RenderCount from './pages/RenderCount.jsx'
import ChangeColors from './pages/ChangeColors.jsx'
import Stopwatch from './pages/Stopwatch.jsx'
import Fetch from './pages/Fetch.jsx'
import AutoSaveForm from './pages/AutosaveForm.jsx'
import ClickCounter from './pages/ClickCounter.jsx'
import ChangeBackground from './pages/ChangeBackground.jsx'
import ToggleVisibility from './pages/ToggleVisibility.jsx'
import CountDownTimer from './pages/CountdownTimer.jsx'
import DynamicFontSize from './pages/DynamicFontSize.jsx'
import AddClassList from './pages/AddClassList.jsx'
import SmoothScroll from './pages/SmoothScroll.jsx'

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home/>,
  }, 
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/profiles",
    element: <Profiles/>,
  },
  {
    path: "/profiles/:profilesId",
    element: <SingleProfile/>,
  },
  {
    path: '/focusinput',
    element: <FocusInput/>
  },
  {
    path: '/prev',
    element: <PreviousState/>
  },
  {
    path: '/render',
    element: <RenderCount/>
  },
  {
    path: '/colors',
    element: <ChangeColors/>
  },
  {
    path:'/stopwatch',
    element: <Stopwatch/>
  },
  {
    path:'/fetch',
    element: <Fetch/>
  },
  {
    path:'/autosaveform',
    element: <AutoSaveForm />
  },
  {
    path:'/clickcounter',
    element: <ClickCounter />
  },{
    path:'/changebackground',
    element: <ChangeBackground />
  },{
    path:'/toggle',
    element: <ToggleVisibility />
  },{
    path:'/countdowntimer',
    element: <CountDownTimer />
  },{
    path:'/dynamic',
    element: <DynamicFontSize />
  },{
    path:'/addclass',
    element: <AddClassList />
  },{
    path:'/smooth',
    element: <SmoothScroll />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
