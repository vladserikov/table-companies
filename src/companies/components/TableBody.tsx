import { useAllIds } from '../hooks/companyHooks';
import { TableItem } from './TableItem';

export const TableBody = () => {
	const allIds = useAllIds();
	return (
		<tbody>
			{allIds.map((id) => (
				<TableItem id={id} key={id} />
			))}
		</tbody>
	);
};

