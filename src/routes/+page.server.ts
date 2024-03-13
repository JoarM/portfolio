import { getAllProjects } from '$lib/api';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	return {
		projects: getAllProjects().splice(0, 3),
	};
};