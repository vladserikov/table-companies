import { useCallback, useState } from 'react';

import { useAppDispatch } from '../../app/store';
import { updateProperty } from '../store/companySlice';
import { EditingElement } from './InputTextElement';
import { TextElement } from './TextElement';

type EditWrapperTableItemProps = {
	id: string;
	value: string;
	type: 'name' | 'address';
};

export const EditWrapperTableItem: React.FC<EditWrapperTableItemProps> = ({
	id,
	value,
	type,
}) => {
	const [editing, setEditing] = useState(false);
	const dispatch = useAppDispatch();

	const onUpdate = useCallback(
		(updateValue: string) => {
			dispatch(updateProperty({ id, property: type, value: updateValue }));
			setEditing(false);
		},
		[dispatch, id, type]
	);

	return (
		<td>
			<div className='row-item'>
				<div className='item-text'>
					{editing ? (
						<EditingElement onUpdate={onUpdate} value={value} />
					) : (
						<TextElement text={value} />
					)}
				</div>
				<button className='item-button' onClick={() => setEditing(!editing)}>
					{editing ? 'Save' : 'Edit'}
				</button>
			</div>
		</td>
	);
};

