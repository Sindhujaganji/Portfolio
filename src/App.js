import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EducationPage from "./components/EducationPage";
import ExperiencePage from "./components/ExperiencePage";
import HomePage from "./components/HomePage";
import ProjectsPage from "./components/ProjectsPage";
import ContactPage from "./components/ContactPage";
import "./styles.css";
import RootLayout from "./components/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/education", element: <EducationPage /> },
      { path: "/experience", element: <ExperiencePage /> },
      { path: "/projects", element: <ProjectsPage /> },
      { path: "/contact", element: <ContactPage /> }
    ]
  }
]);

const App = () => {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
