import { useEffect } from 'react';
import { useAppDispatch } from '../../app/store';
import { TableBody } from './TableBody';
import { TableFooter } from './TableFooter';
import { TableHeader } from './TableHeader';

export const CompaniesTable = () => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [dispatch]);

	return (
		<table className='table'>
			<TableHeader />
			<TableBody />
			<TableFooter />
		</table>
	);
};

