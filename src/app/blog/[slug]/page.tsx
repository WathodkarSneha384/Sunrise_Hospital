import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogArticleBody from "@/components/BlogArticleBody";
import BlogSidebar from "@/components/BlogSidebar";
import PageCTA from "@/components/PageCTA";
import { blogPosts, getPostBySlug } from "@/lib/blog-posts";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 4);

  return (
    <div>
      <section className="brand-gradient text-white py-8 md:py-12">
        <div className="page-container">
          <nav className="text-white/70 text-xs sm:text-sm mb-4 flex flex-wrap items-center gap-1.5">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-white/90">{post.category}</span>
          </nav>

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="bg-white/15 border border-white/20 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-white/70 text-xs">{post.date}</span>
              <span className="text-white/50 hidden sm:inline">·</span>
              <span className="text-white/70 text-xs">{post.readTime}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">{post.title}</h1>
            <p className="text-white/85 mt-3 text-sm sm:text-base leading-relaxed max-w-3xl">
              {post.excerpt}
            </p>

            <div className="mt-5 flex items-center gap-3 bg-white/10 border border-white/15 rounded-xl px-4 py-3 max-w-md">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm shrink-0">
                SJ
              </div>
              <div>
                <p className="font-semibold text-white text-sm">{post.author}</p>
                <p className="text-white/70 text-xs">{post.authorTitle}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section bg-white">
        <div className="page-container">
          <div className="lg:grid lg:grid-cols-12 lg:gap-10 xl:gap-12">
            <div className="lg:col-span-8">
              <BlogArticleBody sections={post.sections} />

              <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row flex-wrap gap-3">
                <Link href="/book-appointment" className="btn-primary text-sm text-center">
                  Book Consultation
                </Link>
                <a href="tel:+919096965217" className="btn-outline text-sm text-center">
                  Call +91 90969 65217
                </a>
                <Link href="/blog" className="btn-outline text-sm text-center sm:ml-auto">
                  ← All Articles
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 mt-10 lg:mt-0">
              <BlogSidebar sections={post.sections} related={related} />
            </div>
          </div>
        </div>
      </section>

      <PageCTA
        title="Have a Health Question?"
        description="Book a consultation with Dr. Jadhav at Sunrise Piles Hospital, Wakad, Pune."
      />
    </div>
  );
}
