import "./App.css";
import { Forms } from "./views";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Email from "./views/Email";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Forms />,
  },
  {
    path: "email",
    element: <Email />,
  },
]);

function App() {
  // useEffect(() => {
  //   localStorage.clear();
  // });
  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;
