import './App.css';
import Header from './Header';
import Footer from './Footer';
import Employees from './Employees';
import Nav from './Nav';
import GroupedTeamMembers from './GroupedTeamMembers';
import NotFound from './NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DataProvider } from './context/DataContext';

const App = () => {
  return (
    <DataProvider>
      <Router>
        <Nav />
        <Header />
        <Routes>
          <Route path="/" element={<Employees />} />
          <Route path="/groupedteammembers" element={<GroupedTeamMembers />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </DataProvider>
  );
};

export default App;
