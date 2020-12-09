import Header from './header/Header';
import About from './about/About'
import Features from './features/Features';
import Tours from './tours/Tours';
import Stories from './stories/Stories'
import Booking from './booking/Booking';
import Footer from './footer/Footer';
import Navigation from './navigation/Navigation';
import Popup from './popup/Popup';
function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <main>
        <About />
        <Features />
        <Tours />
        <Stories />
        <Booking />
      </main>
      <Footer />
      <Popup />
    </div>
  );
}

export default App;
