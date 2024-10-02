import { useHeaderControls } from '../hooks/tableHooks';

export const TableHeaderColumns = () => {
	const { allSelected, onChecked, onRemoveSelected } = useHeaderControls();

	return (
		<tr>
			<th>
				<div className='row-item'>
					<label htmlFor='selectAll'>Select All</label>
					<input
						type='checkbox'
						name='selectAll'
						checked={allSelected}
						onChange={onChecked}
					/>
				</div>
			</th>
			<th>
				<div className='row-item'>Name</div>
			</th>
			<th>
				<div className='row-item'>Address</div>
			</th>
			<th>
				<div className='row-item'>
					<button onClick={onRemoveSelected}>Remove selected</button>
				</div>
				{/* <CountItems /> */}
			</th>
		</tr>
	);
};

