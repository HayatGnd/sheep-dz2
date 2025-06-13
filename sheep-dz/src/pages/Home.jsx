import Header from '../components/header';
import Sidebar from '../components/sidebare';
import WelcomeCard from '../components/WelcomeCard';
import SheepList from '../components/sheeplist';
import '../App.css';

const sheeps = [
  { id: 1, name: "Sheep #1001", weight: 25, age: 2, price: 40000, image: "/sheep1.jpg" },
  { id: 2, name: "Sheep #1002", weight: 28, age: 2, price: 40000, image: "/sheep2.jpg" },
  { id: 3, name: "Sheep #1003", weight: 29, age: 3, price: 40000, image: "/sheep3.jpg" },
];

function Home() {
  return (
    <div className="app-root">
      <Header />
      <div className="app-main">
        <Sidebar />
        <div className="app-content">
          <WelcomeCard />
          <SheepList sheeps={sheeps} />
        </div>
      </div>
    </div>
  );
}

export default Home;