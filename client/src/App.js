import { Landing, Register, Error, ProtectedRoute } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  AllJobs,
  AddJob,
  SharedLayout,
  Stats,
  Profile,
} from "./pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout></SharedLayout>
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats></Stats>}></Route>
          <Route path="profile" element={<Profile></Profile>}></Route>
          <Route path="addJob" element={<AddJob></AddJob>}></Route>
          <Route path="allJobs" element={<AllJobs></AllJobs>}></Route>
        </Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/landing" element={<Landing></Landing>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
