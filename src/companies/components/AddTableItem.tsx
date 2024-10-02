import { useState } from 'react';

import { useAppDispatch } from '../../app/store';
import { addCompany, fetchCompanies } from '../store/companySlice';

export const AddTableItem = () => {
	const dispatch = useAppDispatch();
	const [name, setName] = useState('');
	const [address, setAddress] = useState('');

	const onAdd = () => {
		dispatch(addCompany({ name, address }));
		setName('');
		setAddress('');
	};

	const generateManyItems = () => {
		dispatch(fetchCompanies());
	};

	return (
		<tr>
			<td colSpan={3}>
				<button onClick={onAdd}>Add new company</button>
				<input
					type='text'
					value={name}
					placeholder='Name'
					onChange={(e) => setName(e.target.value)}
				/>

				<input
					type='text'
					value={address}
					placeholder='Address'
					required
					onChange={(e) => setAddress(e.target.value)}
				/>
			</td>
			<td>
				<button onClick={generateManyItems}>Generate many</button>
			</td>
		</tr>
	);
};

