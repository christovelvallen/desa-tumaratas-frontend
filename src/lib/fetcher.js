import axios from 'axios';
import { API_TOKEN, API_URL } from './utils';

export const fetcher = async endpoint => {
	const option = {
		headers: {
			Authorization: `Bearer ${API_TOKEN}`,
		},
	};

	const res = await axios.get(`${API_URL}${endpoint}`, option);
	return res.data.data;
};
