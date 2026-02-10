import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import LoanPackages from './pages/LoanPackages';
import Apply from './pages/Apply';
import Verify from './pages/Verify';
import Eligibility from './pages/Eligibility';
import Repayment from './pages/Repayment';
import About from './pages/About';
import FAQs from './pages/FAQs';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/loan-packages" element={<LoanPackages />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/verify/:applicationId" element={<Verify />} />
          <Route path="/eligibility" element={<Eligibility />} />
          <Route path="/repayment" element={<Repayment />} />
          <Route path="/about" element={<About />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
