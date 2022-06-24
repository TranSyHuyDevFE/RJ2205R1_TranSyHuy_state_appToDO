import logo from "../logo.svg";
import "../views/App.scss";
import ListToDo from "./TodoApp/ListToDo";
import "../styles/todostyle.scss";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ListToDo />
      </header>
    </div>
  );
}

export default App;
