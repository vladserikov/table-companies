import { Provider } from 'react-redux';
import { CompaniesTable } from '../companies/components/CompaniesTable';
import { store } from './store';

function App() {
	return (
		<Provider store={store}>
			<main className='app'>
				<CompaniesTable />
			</main>
		</Provider>
	);
}

export default App;

