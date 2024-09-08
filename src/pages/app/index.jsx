import './index.css';

import { Link } from 'react-router-dom';
 
export default function App() {
  return (
    <div className="App">
      <h1>Reaaaact</h1>
      
      <ul>
        <li>
          <Link to='/contato'> Ir para contato </Link>
        </li>
      </ul>
    </div>
  );
}
