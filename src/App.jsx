// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { ProductDetails } from "./pages/ProductDetails";
import { ProductsPage } from "./pages/ProductsPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Root />,
      errorElement: <p>Erreur de chargement du composant ...</p>, // Générer une erreur
      children: [
        // Afficher les produits sur la page d'accueil
        { path: "", element: <HomePage /> },
        { path: "/produits", element: <ProductsPage /> },
        { path: "/produits/:id", element: <ProductDetails /> },
      ],
    },
  ]);

  function Root() {
    return (
      <>
        <Navbar />
        <div className="app-container">
          <Outlet />
        </div>
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
