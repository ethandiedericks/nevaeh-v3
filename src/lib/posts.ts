import { readdir, readFile } from "fs/promises";
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
  content: string;
};

export async function getAllPosts(): Promise<PostData[]> {
  const files = await readdir(postsDirectory);

  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const filePath = path.join(postsDirectory, file);
        const content = await readFile(filePath, "utf8");
        const { data, content: mdxContent } = matter(content);

        return {
          id: file.replace(".mdx", ""),
          slug: data.slug || file.replace(".mdx", ""),
          title: data.title,
          excerpt: data.excerpt,
          date: data.date,
          readTime: data.readTime,
          author: data.author,
          category: data.category,
          tags: data.tags,
          coverImage: data.coverImage,
          featured: data.featured || false,
          content: mdxContent,
        } as PostData;
      })
  );

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// ✅ getFeaturedPost must be async and await the promise
export async function getFeaturedPost(): Promise<PostData | null> {
  const allPosts = await getAllPosts();
  const featuredPosts = allPosts.filter((post: PostData) => post.featured);

  if (featuredPosts.length === 0) return null;

  return featuredPosts[0];
}

// ✅ getLatestArticles must also be async and await the promise
export async function getLatestArticles(limit: number = 3): Promise<PostData[]> {
  const allPosts = await getAllPosts();

  const latestPosts = allPosts.filter((post: PostData) => !post.featured);

  return latestPosts.slice(0, limit);
}




export async function getPostBySlug(slug: string): Promise<PostData | null> {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug) || null;
}