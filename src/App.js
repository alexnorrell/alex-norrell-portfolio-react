import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  let Page;

  switch(window.location.pathname){
    case '/':
      Page = About
      break;
    case '/about':
      Page = About
      break;
    case '/portfolio':
      Page = Portfolio
      break;
    case '/resume':
      Page = Resume
      break;
    case '/contact':
      Page = Contact;
      break;
      default:
      break;
  }
  return (
    <div>
      <Navbar />

      <Page />
    </div>
  );
}

export default App;
