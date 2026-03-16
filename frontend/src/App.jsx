import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import TakeTest from "./pages/TakeTest";
import TestPage from "./pages/TestPage";
import TestSummary from "./pages/TestSummary";
import Progress from "./pages/Progress";
import AskDoubt from "./pages/AskDoubt";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Authentication */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected pages */}
        <Route path="/home" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }/>

        <Route path="/take-test" element={
          <ProtectedRoute>
            <TakeTest />
          </ProtectedRoute>
        }/>

        <Route path="/test" element={
          <ProtectedRoute>
            <TestPage />
          </ProtectedRoute>
        }/>

        <Route path="/summary" element={
          <ProtectedRoute>
            <TestSummary />
          </ProtectedRoute>
        }/>

        <Route path="/progress" element={
          <ProtectedRoute>
            <Progress />
          </ProtectedRoute>
        }/>

        <Route path="/ask-doubt" element={
          <ProtectedRoute>
            <AskDoubt />
          </ProtectedRoute>
        }/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;