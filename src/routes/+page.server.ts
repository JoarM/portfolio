import { getAllProjects } from '$lib/api';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	return {
		projects: getAllProjects().splice(0, 3),
	};
};