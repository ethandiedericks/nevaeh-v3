import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/posts');

export type PostData = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  tags: string[];
  coverImage: string;
  featured: boolean;
  slug: string;
};

export function getAllPostsData(): PostData[] {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id,
      ...(matterResult.data as Omit<PostData, 'id'>),
    };
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getFeaturedPost(): PostData | null {
  const allPosts = getAllPostsData();
  const featuredPosts = allPosts.filter((post) => post.featured);

  if (featuredPosts.length === 0) return null;

  // Already sorted by date, so take first
  return featuredPosts[0];
}

export function getLatestArticles(limit: number = 3): PostData[] {
  const allPosts = getAllPostsData();

  // Remove featured post if exists
  const latestPosts = allPosts.filter((post) => !post.featured);

  return latestPosts.slice(0, limit);
}
