import { a as getProjectBySlug } from "../../../../chunks/api.js";
import { e as error } from "../../../../chunks/index.js";
const load = ({ params }) => {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    error(404, {
      message: "No project with this slug"
    });
  }
  return {
    project
  };
};
export {
  load
};
