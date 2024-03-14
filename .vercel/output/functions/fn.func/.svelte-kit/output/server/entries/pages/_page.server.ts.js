import { g as getAllProjects } from "../../chunks/api.js";
const load = () => {
  return {
    projects: getAllProjects().splice(0, 3)
  };
};
export {
  load
};
