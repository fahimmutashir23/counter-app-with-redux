import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrementActions, incrementActions, resetActions } from './components/actions/CounterActions';

function App() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Count App with Redux</h1>
      <h2>{count}</h2>
      <div className='btn'>
      <button onClick={() => dispatch(incrementActions())}>INCREMENT</button>
      <button onClick={() => dispatch(resetActions())}>RESET</button>
      <button onClick={() => dispatch(decrementActions())}>DECREMENT</button>
      </div>
    </div>
  )
}

export default App
