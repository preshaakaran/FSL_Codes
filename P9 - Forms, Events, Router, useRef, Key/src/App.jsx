import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormDemo from "./FormDemo";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<FormDemo />} />
    </Routes>
  </Router>
);

export default App;
