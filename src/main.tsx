import React from 'react'
import ReactDOM from 'react-dom/client'
import {Info} from './Jacob-info.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { SkillsPage } from './skills/Skills.tsx';
import { ProjectsPage } from './projects/Projects.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Info/>,
  },
  {
    path: "skills",
    element: <SkillsPage/>,
  },
  {
    path: "projects",
    element: <ProjectsPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <Info /> */}
  </React.StrictMode>,
)
