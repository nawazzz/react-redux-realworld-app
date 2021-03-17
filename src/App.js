import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div >
      <div className="container is-flex is-justify-content-space-between">
        <h1 className="has-text-success title is-3" >conduit</h1>
        <div className="p-3">
            <a href="/" className="p-2 has-text-grey-light">Home</a>
            <a href="/" className="p-2 has-text-grey-light">Sign in</a>
            <a href="/" className="p-2 has-text-grey-light">Sign up</a>
        </div>
      </div>  
    </div>
  );
}

export default App;
