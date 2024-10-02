import { useItemById } from '../hooks/companyHooks';
import { CheckboxTableItem } from './CheckboxTableItem';
import { EditWrapperTableItem } from './EditWrapperTableItem';

import { RemoveTableItem } from './RemoveTableItem';

type TableItemProps = {
	id: string;
};

export const TableItem: React.FC<TableItemProps> = ({ id }) => {
	const { selected, name, address } = useItemById(id);

	return (
		<tr className={selected ? 'selected' : ''}>
			<CheckboxTableItem id={id} selected={selected} />
			<EditWrapperTableItem id={id} value={name} type='name' />
			<EditWrapperTableItem id={id} value={address} type='address' />
			<RemoveTableItem id={id} />
		</tr>
	);
};

