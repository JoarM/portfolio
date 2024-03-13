
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import type { Project } from "./interfaces/project";

const postsDirectory = join(process.cwd(), "_projects");

export function getProjectSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getProjectBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, tags: data.tags.split(","), slug: realSlug, content } as Project;
}

export function getAllProjects(): Project[] {
  const slugs = getProjectSlugs();
  const posts = slugs
    .map((slug) => getProjectBySlug(slug))
    // sort posts by date in descending order
    .sort((project1, project2) => (project1.date > project2.date ? -1 : 1));
  return posts;
}