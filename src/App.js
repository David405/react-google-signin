import logo from './logo.svg';
import './App.css';
import OneTap from './components/onetap';
import SignUp from './components/signup';
//import Logout from './components/logout';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <SignUp /> */}
        {/* <Logout /> */}
        <OneTap />
      </header>
    </div>
  );
}

export default App;
