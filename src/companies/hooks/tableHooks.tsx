import { useCallback, useEffect, useRef } from 'react';

import { useAppDispatch } from '../../app/store';
import {
	fetchCompanies,
	removeAllSelectedCompanies,
	removeSelectedCompanies,
	selectAllCompanies,
	unselectAllCompanies,
} from '../store/companySlice';
import { useCountItems, useGetAllChecked } from './companyHooks';

export const useHeaderControls = () => {
	const dispatch = useAppDispatch();
	const allSelected = useGetAllChecked();

	const onChecked = useCallback(() => {
		if (allSelected) {
			dispatch(unselectAllCompanies());
		} else {
			dispatch(selectAllCompanies());
		}
	}, [allSelected, dispatch]);

	const onRemoveSelected = useCallback(() => {
		if (allSelected) {
			dispatch(removeAllSelectedCompanies());
		} else {
			dispatch(removeSelectedCompanies());
		}
	}, [allSelected, dispatch]);

	return {
		allSelected,
		onChecked,
		onRemoveSelected,
	};
};

export const useMaxLengthItems = (count = 100) => {
	const dispatch = useAppDispatch();
	const length = useCountItems();
	const maxLength = length > count ? true : false;

	const loadCallback = useCallback(() => {
		if (maxLength) return;
		dispatch(fetchCompanies());
	}, [dispatch, maxLength]);

	return { loadCallback };
};

export const useElementOnVisible = () => {
	const ref = useRef(null);
	const { loadCallback } = useMaxLengthItems(10000);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						loadCallback();
					}
				});
			},
			{
				threshold: [0.25],
				rootMargin: '0px 0px 15px 0px',
			}
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			observer.disconnect();
		};
	}, [loadCallback]);

	return { ref };
};

