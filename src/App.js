import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Itinerary from './components/Itinerary/Itinerary';
import Costs from './components/Costs/Costs';
import TermsAndConditions from './components/TermsAndConditions/TermsAndConditions';
import PaymentTermsAndCancellation from './components/PaymentTermsAndCancellation/PaymentTermsAndCancellation';
import Inclusions from './components/Inclusions/Inclusions';
import Exclusions from './components/Exclusions/Exclusions';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
          
        <Route exact path="/Itinerary" element={<Itinerary/>} />
        <Route exact path="/costs" element={<Costs />} />
        <Route exact path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route exact path="/payment-terms-and-cancellation-policy" element={<PaymentTermsAndCancellation />} />
        <Route exact path="/inclusions" element={<Inclusions />} />
        <Route exact path="/exclusions" element={<Exclusions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;