import './App.css';
import Likes from './components/likes';
import Title from './components/Title';
import Comment from './components/comments';



function App() {
  return (
    <div className="App">
      <div className="wrap">
        <div className="card">
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing"/>
            <Title />
            <Likes />
          </div>
          <Comment />
        </div>
      </div>
    </div>
  );
}

export default App;
