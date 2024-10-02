import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

export const selectCompaniesAllIds = (state: RootState) =>
	state.companies.allIds;
export const selectCompaniesById = (state: RootState) => state.companies.byId;

export const getItemById = createSelector(
	[selectCompaniesById, (_state, itemId) => itemId],
	(itemsById, itemId) => itemsById[itemId]
);
export const getAllChecked = createSelector(
	[selectCompaniesAllIds, selectCompaniesById],
	(allIds, byId) => allIds.length > 0 && allIds.every((id) => byId[id].selected)
);

export const useGetAllChecked = () => useSelector(getAllChecked);
export const useCountItems = () =>
	useSelector((state: RootState) => state.companies.allIds.length);

export const useItemById = (id: string) =>
	useSelector((state) => getItemById(state, id));

export const useAllIds = () => useSelector(selectCompaniesAllIds);

export const useLoadingNew = () =>
	useSelector((state: RootState) => state.companies.loadingNew);

