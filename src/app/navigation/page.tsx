import React from "react";
import Link from "next/link";
import {
  Home,
  User,
  Settings,
  BookOpen,
  HelpCircle,
  Mail,
  Code,
  Smartphone,
  Globe,
  Zap,
  TrendingUp,
  Palette,
} from "lucide-react";

const SitemapPage = () => {
  const mainPages = [
    {
      title: "Home",
      url: "/",
      icon: <Home size={20} />,
      description:
        "Welcome to Nevaeh Solutions - Your software development partner",
    },
    {
      title: "About",
      url: "/about",
      icon: <User size={20} />,
      description: "Learn about our mission, values, and expert team",
    },
    {
      title: "Services",
      url: "/services",
      icon: <Settings size={20} />,
      description: "Comprehensive software development services we offer",
    },

    {
      title: "Blog",
      url: "/blog",
      icon: <BookOpen size={20} />,
      description: "Latest insights and tutorials on software development",
    },
    {
      title: "FAQ",
      url: "/faq",
      icon: <HelpCircle size={20} />,
      description: "Frequently asked questions about our services",
    },
    {
      title: "Contact",
      url: "/contact",
      icon: <Mail size={20} />,
      description: "Get in touch with our development team",
    },
  ];

  const blogPosts = [
    {
      title: "API Development with C#",
      url: "/blog/api-development-csharp",
      icon: <Code size={16} />,
      category: "Backend Development",
    },
    {
      title: "Benefits of Next.js",
      url: "/blog/benefits-of-nextjs",
      icon: <Zap size={16} />,
      category: "Frontend Development",
    },
    {
      title: "Custom Landing Pages",
      url: "/blog/custom-landing-page",
      icon: <Palette size={16} />,
      category: "Web Design",
    },
    {
      title: "Investing in Mobile App Development",
      url: "/blog/investing-in-mobile-app-development",
      icon: <TrendingUp size={16} />,
      category: "Business Strategy",
    },
    {
      title: "Web & Mobile App Development",
      url: "/blog/web-mobile-app-development",
      icon: <Smartphone size={16} />,
      category: "Mobile Development",
    },
    {
      title: "Why Your Business Needs a Custom Web App",
      url: "/blog/why-your-business-needs-a-custom-web-app",
      icon: <Globe size={16} />,
      category: "Web Development",
    },
  ];

  return (
    <div className="min-h-screen text-white">
      <div className="max-w-6xl mx-auto px-4 ">
        {/* Header */}
        <div className="text-center flex-col items-center justify-center mb-16">
          <h1 className="text-4xl md:text-5xl font-normal md:font-light text-center mb-2 md:mb-4 ">
            Site Map
          </h1>
          <p>
            Navigate through all pages and resources available on the Nevaeh
            Solutions website
          </p>
        </div>

        {/* Main Pages Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Main Pages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainPages.map((page, index) => (
              <Link
                key={index}
                href={page.url}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer block"
              >
                <div className="flex items-center mb-4">
                  <div className="relative">
                    {/* Glow effect */}
                    <div className="absolute inset-0 icon-glow"></div>
                    {/* Icon with a higher z-index to appear above the glow */}
                    <div className="rounded-[0.438rem] p-3 gradient-border relative z-10 group-hover:scale-110 transition-transform">
                      {page.icon}
                    </div>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-xl font-medium text-white">
                      {page.title}
                    </h3>
                    <p className="text-sm text-green-300 font-mono">
                      {page.url}
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {page.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Blog Posts Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Blog Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {blogPosts.map((post, index) => (
              <Link
                key={index}
                href={post.url}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all duration-300 cursor-pointer block"
              >
                <div className="flex items-center">
                  <div className="relative">
                    {/* Glow effect */}
                    <div className="absolute inset-0 icon-glow"></div>
                    {/* Icon with a higher z-index to appear above the glow */}
                    <div className="rounded-[0.438rem] p-3 gradient-border relative z-10 group-hover:scale-110 transition-transform">
                      {post.icon}
                    </div>
                  </div>
                  <div className="ml-3 flex-1">
                    <div className="flex items-center mb-2">
                      <span className="border border-white rounded-lg px-3 py-1 text-xs font-thin">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-green-300 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-400 font-mono">
                      {post.url}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            Last updated: May 24, 2025 | All pages are regularly maintained and
            updated
          </p>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;
