import { AddTableItem } from './AddTableItem';
import { TableHeaderColumns } from './TableHeaderColumns';

/* const CountItems = () => {
	const count = useCountItems();
	return <span>{count}</span>;
}; */

export const TableHeader = () => {
	return (
		<thead>
			<AddTableItem />
			<TableHeaderColumns />
			{/* <CountItems /> */}
		</thead>
	);
};

