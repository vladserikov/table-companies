import { v4 as uuid } from 'uuid';

export const generateCompanies = async (count = 50) => {
	const newItems = [];
	for (let i = 0; i < count; i++) {
		const id = uuid();
		newItems.push({
			id,
			name: `Company ${id}`,
			address: `Address ${id}`,
			selected: false,
		});
	}
	return newItems;
};

