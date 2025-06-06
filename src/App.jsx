import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header.jsx';
import Hero from './components/HeroSection/FirstPage.jsx';
import Features from './components/FeaturesSection/SecondPage.jsx';
import Faq from './components/FAQ/Faq.jsx';
import PreFooter from './components/PreFooter/PreFooter.jsx';
import Footer from './components/Footer/Footer.jsx';
import Pricing from './components/pricing-page/pricing.jsx';

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Faq />
      <PreFooter />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  );
}

export default App;
