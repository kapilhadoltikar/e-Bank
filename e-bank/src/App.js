import './App.css'
import { BrowserRouter } from "react-router-dom";
import { AuthWrapper } from './authenticator/AuthWrapper';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthWrapper />
      </BrowserRouter>
    </div>
  );
}
export default App;