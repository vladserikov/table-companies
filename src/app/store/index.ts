import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import companyReducer from '../../companies/store/companySlice';

export const store = configureStore({
	reducer: {
		companies: companyReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

