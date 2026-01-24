import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AppLayout } from "../layouts/AppLayout"
import { ScrollToTop } from "../components/ui/ScrollToTop"
import { HomeView } from "../views/HomeView"
import { ProjectsView } from "../views/projects/ProjectsView"
import { ProjectDetailView } from "../views/projects/ProjectDetailView"
import { ErrorView } from "../views/ErrorView"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route element={<AppLayout />}>

          <Route path='/' element={<HomeView />} index />

          <Route path='/proyectos' element={<ProjectsView />} index />

          <Route path='/proyectos/:slug' element={<ProjectDetailView />} index />
        </Route>

         <Route path="*" element={<ErrorView />} />
      </Routes>

    </BrowserRouter>
  )
}
