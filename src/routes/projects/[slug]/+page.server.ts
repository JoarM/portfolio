import { getProjectBySlug } from '$lib/api';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) => {
    const project = getProjectBySlug(params.slug)

    if (!project) {
        error(404, {
			message: 'No project with this slug',
		});
    }

	return {
		project,
	};
};