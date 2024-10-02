import { useElementOnVisible } from '../hooks/tableHooks';
import { AddTableItem } from './AddTableItem';

export const TableFooter = () => {
	const { ref } = useElementOnVisible();

	return (
		<tfoot ref={ref}>
			<AddTableItem />
		</tfoot>
	);
};

