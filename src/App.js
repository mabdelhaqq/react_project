import './App.css';
import { TodoProvider } from './Context/DataContext';
import Todolist from './Component/Todolist';

function App() {
  return (
    <div className="App">
      <TodoProvider>
      <Todolist />
    </TodoProvider>
    </div>
  );
}

export default App;
