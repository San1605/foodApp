import './App.css';
import { RouterProvider } from "react-router-dom"
import appRouter from './Router';

function App() {
  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}


export default App;
