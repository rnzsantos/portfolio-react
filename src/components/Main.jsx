import { Route, Routes } from "react-router-dom"

import About from "../pages/aboutPage/About"
import Projects from "../pages/projectsPage/Projects"

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </main>
  )
}
