import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
const postsDirectory = join(process.cwd(), "_projects");
function getProjectSlugs() {
  return fs.readdirSync(postsDirectory);
}
function getProjectBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return { ...data, tags: data.tags.split(","), slug: realSlug, content };
}
function getAllProjects() {
  const slugs = getProjectSlugs();
  const posts = slugs.map((slug) => getProjectBySlug(slug)).sort((project1, project2) => project1.date > project2.date ? -1 : 1);
  return posts;
}
export {
  getProjectBySlug as a,
  getAllProjects as g
};
