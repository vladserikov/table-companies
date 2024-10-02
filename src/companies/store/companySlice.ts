import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import type {
	CompanyState,
	NewCompanyPayload,
	UpdatePropertyPayload,
} from '../types';
import { generateCompanies } from './generateCompanies';

const initialState: CompanyState = {
	byId: {
		'1': { id: '1', name: 'Company A', address: 'Address A', selected: false },
		'2': { id: '2', name: 'Company B', address: 'Address B', selected: false },
	},
	allIds: ['1', '2'],
};

export const fetchCompanies = createAsyncThunk(
	'company/fetchCompanies',
	async (_, thunkAPI) => {
		const data = await generateCompanies();
		return data;
	}
);

const companySlice = createSlice({
	name: 'company',
	initialState,
	reducers: {
		addCompany: (state, action: PayloadAction<NewCompanyPayload>) => {
			const newId = uuidv4();
			const { address, name } = action.payload;

			state.byId[newId] = {
				address: address || `Address ${newId}`,
				name: name || `Company ${newId}`,
				id: newId,
				selected: false,
			};
			state.allIds.push(newId);
		},
		removeCompany: (state, action: PayloadAction<string>) => {
			state.allIds = state.allIds.filter((id) => {
				if (id === action.payload) {
					delete state.byId[id];
					return false;
				}
				return true;
			});
		},
		changeSelected: (state, action: PayloadAction<string>) => {
			state.byId[action.payload].selected =
				!state.byId[action.payload].selected;
		},
		selectAllCompanies: (state) => {
			state.allIds.forEach((id) => {
				state.byId[id].selected = true;
			});
		},
		unselectAllCompanies: (state) => {
			state.allIds.forEach((id) => {
				state.byId[id].selected = false;
			});
		},
		removeAllSelectedCompanies: (state) => {
			state.allIds = [];
			state.byId = {};
		},
		removeSelectedCompanies: (state) => {
			state.allIds = state.allIds.filter((id) => {
				if (state.byId[id].selected) {
					delete state.byId[id];
					return false;
				}
				return true;
			});
		},
		updateProperty: (state, action: PayloadAction<UpdatePropertyPayload>) => {
			const { id, property, value } = action.payload;
			if (state.byId[id]) state.byId[id][property] = value;
		},
	},
	extraReducers(builder) {
		builder.addCase(fetchCompanies.fulfilled, (state, action) => {
			action.payload.forEach((company) => {
				state.byId[company.id] = company;
				state.allIds.push(company.id);
			});
		});
	},
});

export const {
	addCompany,
	removeCompany,
	changeSelected,
	selectAllCompanies,
	unselectAllCompanies,
	removeSelectedCompanies,
	removeAllSelectedCompanies,
	updateProperty,
} = companySlice.actions;

export default companySlice.reducer;

