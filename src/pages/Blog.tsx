import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User } from "lucide-react";

const posts = [
  {
    title: "Introducing Next-Gen NVMe Storage for Cloud VPS",
    excerpt:
      "We're upgrading our entire fleet to the latest Gen4 NVMe drives, bringing 2x performance gains to all users.",
    date: "Dec 28, 2025",
    author: "Infrastructure Team",
    category: "Product Updates",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "How to Secure Your Bare Metal Server: A 2026 Guide",
    excerpt:
      "Security is paramount. Learn the essential steps to protect your dedicated hardware from evolving threats.",
    date: "Dec 20, 2025",
    author: "Security Team",
    category: "TUTORIALS",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Scaling Modern Applications on Global Infrastructure",
    excerpt:
      "Best practices for architecting high-availability systems across multiple geographic regions.",
    date: "Dec 15, 2025",
    author: "Engineering",
    category: "ENGINEERING",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-20 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h1 className="text-6xl font-bold tracking-tight mb-6">
            Reboot Blog
          </h1>
          <p className="text-xl text-[#ffffff50] max-w-2xl font-light">
            Insights, updates, and tutorials from the team building the future
            of infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, i) => (
            <div
              key={i}
              className="group flex flex-col h-full bg-white/2 border border-white/5 rounded-[32px] overflow-hidden transition-all hover:border-white/10 hover:-translate-y-1"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white text-black hover:bg-white uppercase text-[10px] px-3 font-bold tracking-wider">
                    {post.category}
                  </Badge>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs text-[#ffffff30] mb-4 uppercase tracking-widest font-bold">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={12} /> {post.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <User size={12} /> {post.author}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 leading-snug group-hover:text-white transition-colors">
                  {post.title}
                </h3>

                <p className="text-[#ffffff50] font-light leading-relaxed mb-8 flex-1">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-2 text-white font-medium group/btn cursor-pointer">
                  <span>Read Full Post</span>
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover/btn:translate-x-1"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <Button
            variant="outline"
            className="rounded-full border-white/10 text-white px-10 h-14 bg-white/5 hover:bg-white hover:text-black transition-all"
          >
            Load More Articles
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
