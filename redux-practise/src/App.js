import './App.css';
import {Provider} from 'react-redux'
import CounterUsingRedux from './components/CounterRedux';
import store from './components/CounterRedux/store';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CounterUsingRedux />
      </div>

    </Provider>
    
  );
}

export default App;
