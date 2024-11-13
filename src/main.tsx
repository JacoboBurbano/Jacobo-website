import React from 'react'
import ReactDOM from 'react-dom/client'
import {Info} from './Jacob-info.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { SkillsPage } from './skills/Skills.tsx';
import { ProjectsPage } from './projects/Projects.tsx';
import { ContactPage } from './contact/Contact.tsx';
import { ExperiencePage } from './experience/Experience.tsx';
import { Language } from './language/Language.tsx';
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
  },
  {
    path: "contact",
    element: <ContactPage/>
  },
  {
    path: "experience",
    element: <ExperiencePage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Language>
      <RouterProvider router={router}/>
    </Language>
  </React.StrictMode>
)
