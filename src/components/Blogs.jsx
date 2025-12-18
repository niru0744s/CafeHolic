import BlogCard from "../components/reusableComponents/BlogCard";
import { blogs } from "../data/componentData";

export default function Blogs() {
  return (
    <section className="bg-white py-20 text-[#1f2933]">
      <div className="mx-auto max-w-7xl px-4">

        <div className="mb-14 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">
            From Our Blog
          </h2>
          <p className="mt-3 text-sm text-black/70 md:text-base">
            Stories, tips, and insights from the world of coffee.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              title={blog.title}
              excerpt={blog.excerpt}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
