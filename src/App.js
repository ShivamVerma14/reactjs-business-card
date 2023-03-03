import ProfilePhoto from "./components/ProfilePhoto";
import Details from "./components/Details";
import Footer from "./components/Footer";
import "./style.css";

function App() {
  return (
    <div className="container">
      <ProfilePhoto />
      <Details />
      <Footer />
    </div>
  );
}

export default App;
