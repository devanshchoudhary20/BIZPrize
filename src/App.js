import Analysis2 from './Analysis/2';
import './App.css';
import Header from './Components/Header';
import OpeningBlock from './Components/OpeningBlock';
import ProjectDetails from './Components/ProjectDetails';
import Footer from './Components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <OpeningBlock />
      <Analysis2 />
      <ProjectDetails />
      <Footer />
    </div>
  );
}

export default App;
