import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import CityList from "./components /CityList";
import CountryList from "./components /CountryList";
import City from "./components /City";
import Form from "./components /Form";
import SpinnerFullPage from "./components /SpinnerFullPage";

import { CitiesProvider } from "./contexts /CitiesContext";
import { AuthProvider } from "./contexts /AuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";

// import Login from "./pages/Login";
// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import HomePage from "./pages/HomePage";
//import PageNotFound from "./pages/PageNotFound";
// import AppLayout from "./pages/AppLayout";

const Login = lazy(() => import("./pages/Login"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <CitiesProvider>
      <AuthProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<CityList />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>

              <Route path="login" element={<Login />} />

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AuthProvider>
    </CitiesProvider>
  );
}

export default App;
