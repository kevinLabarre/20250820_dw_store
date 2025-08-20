// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Root />,
      errorElement: <p>Erreur de chargement ...</p>, // Générer une erreur
      children: [
        { path: "", element: <h1>Page d'accueil</h1> },
        { path: "/produits", element: <h1>Mes produits</h1> },
      ],
    },
  ]);

  function Root() {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  }

  return <RouterProvider router={router} />;
}

export default App;

// return (
//   <BrowserRouter>
//     <Navbar />
//     <Routes>
//       <Route path="" element={<h1>Page d'accueil</h1>} />
//       <Route path="/produits" element={<h1>Mes produits</h1>} />
//     </Routes>
//   </BrowserRouter>
// );
