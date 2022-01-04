import './App.css';
import LabelBottomNavigation from './components/Footer';

const footerStyle = {
  position: "absolute",
  bottom: "0px",
  left: "500px",
}

function App() {
  return (
    <div className="App">
      <div style={footerStyle}>
        <LabelBottomNavigation />
      </div>
    </div>
  );
}

export default App;
