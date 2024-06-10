import LoginPage from './frontend/Pages/LoginPage';
import Billpage from './frontend/Pages/Billpage';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements, Outlet } from 'react-router-dom';

const PageLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

function App() {
  const customRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route element={<PageLayout />}>
          <Route index path="/" element={<LoginPage />}></Route>
          <Route path="/billpage" element={<Billpage />}></Route>
          <Route path="*" element={<p>Page under construction</p>} />
        </Route>
      </Route>
    )
  );

  return (
    <div className="app-container">
      <RouterProvider router={customRouter} />
    </div>
  );
}

export default App;
