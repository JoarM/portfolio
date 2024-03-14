import { g as getAllProjects } from "../../../chunks/api.js";
const load = () => {
  return {
    projects: getAllProjects()
  };
};
export {
  load
};
