import Link from "next/link";
import { Post } from "../lib/posts";

export default function PostItem({ post }: { post: Post }) {
  const { id, date, title } = post;

  return (
    <>
      <Link href={`/posts/${id}`} className="no-underline hover:no-underline">
        <div className="inline-block text-xs mb-1">
          {new Date(date).toLocaleDateString()}
        </div>
        <div className="">{title}</div>
      </Link>
    </>
  );
}
