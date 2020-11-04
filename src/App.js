import './App.css';
import Signin from './components/Screen1/Signin';
import Dashboard from './components/Screen2/Dashboard';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Route exact path="/">
					<Signin />
				</Route>
				<Route exact path="/dashboard">
					<Dashboard />
				</Route>
			</BrowserRouter>
		</div>
	);
}

export default App;
