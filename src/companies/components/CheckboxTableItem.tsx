import { useAppDispatch } from '../../app/store';
import { changeSelected } from '../store/companySlice';

type CheckboxTableItemProps = {
	id: string;
	selected: boolean;
};

export const CheckboxTableItem: React.FC<CheckboxTableItemProps> = ({
	id,
	selected,
}) => {
	const dispatch = useAppDispatch();

	const onChecked = (e: React.SyntheticEvent) => {
		e.stopPropagation();
	};

	const onChange = () => {
		dispatch(changeSelected(id));
	};

	return (
		<td onClick={onChange}>
			<input type='checkbox' checked={selected} onChange={onChecked} />
		</td>
	);
};

