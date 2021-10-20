import './App.css';
import Navigation from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/styles/vendor/nucleo/css/nucleo.css";
import "../src/styles/vendor/font-awesome/css/font-awesome.min.css";
import "../src/styles/argon-design-system-react.css";
import Greetings from './components/greeting';

function App() {
  return (

    <div>
      <Navigation></Navigation>
      <Greetings></Greetings>
    </div>
  );
}

export default App;
