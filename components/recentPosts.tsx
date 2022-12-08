import { Post } from "../lib/posts";
import PostItem from "./postItem";

export default function RecentPosts({ posts }: { posts: Post[] }) {
  return (
    <ul
      role="list"
      className="list-none divide-y divide-gray-200 dark:divide-gray-700 w-full"
    >
      {posts.map((post) => (
        <li key={post.id} className="py-2 w-full">
          <PostItem post={post} />
        </li>
      ))}
    </ul>
  );
}
