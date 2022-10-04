import "./App.css";
import {useFetch1} from './FetchHook1'

function App() {
  const {_post} = useFetch1("https://jsonplaceholder.typicode.com/todos?")
  // const {a,b} ={a:"A",b:"B"}
  const FetchHandler =async()=>{
    const data =await _post({ userId: 1,title: "abc", completed: true })
    console.log(data)
  }
  return (
    <div className="App">
      <button onClick={FetchHandler}>Fetch</button>
    </div>
  );
}
export default App;
