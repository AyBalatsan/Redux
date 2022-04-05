import './App.css';
import Likes from './components/likes';
import Title from './components/Title';
import Comment from './components/comments';
import Spin from './Spin';
import { useDispatch, useSelector } from "react-redux";

function App() {
  const spinner = useSelector(state => state.appReducer.loading)
  console.log('spinner', spinner);

  return (
    <div className="App">
      <div className="wrap">
        <Spin />
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
