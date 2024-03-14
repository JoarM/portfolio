import { getProjectBySlug } from '$lib/api';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import markdownToHtml from '$lib/utils';

export const prerender = true;

export const load: PageServerLoad = async ({ params }) => {
    const project = getProjectBySlug(params.slug)

    if (!project) {
        error(404, {
			message: 'No project with this slug',
		});
    }

	const content = await markdownToHtml(project.content);

	return {
		...project,
		content,
	};
};