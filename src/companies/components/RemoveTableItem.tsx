import { useAppDispatch } from '../../app/store';
import { removeCompany } from '../store/companySlice';

type RemoveTableItemProps = {
	id: string;
};

export const RemoveTableItem: React.FC<RemoveTableItemProps> = ({ id }) => {
	const dispatch = useAppDispatch();
	const onRemove = (id: string) => {
		dispatch(removeCompany(id));
	};
	return (
		<td>
			<div className='row-item'>
				<button onClick={() => onRemove(id)}>Remove</button>
			</div>
		</td>
	);
};

