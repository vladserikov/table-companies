export type Company = {
	id: string;
	name: string;
	address: string;
	selected: boolean;
};

export type CompanyState = {
	byId: Record<string, Company>;
	allIds: string[];
};

export type NewCompanyPayload = Omit<Company, 'id' | 'selected'>;
export type UpdatePropertyPayload = {
	id: keyof CompanyState['byId'];
	property: keyof NewCompanyPayload;
	value: string;
};

