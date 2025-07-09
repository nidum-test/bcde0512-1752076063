import { ArrowRight, Bot, Newspaper, Sparkles } from "lucide-react"

export default function Home() {
  const newsItems = [
    {
      title: "Nidum AI Launches New Features",
      description: "Explore the latest AI-powered capabilities in our platform",
      date: "2024-01-25",
      category: "Product Update",
      icon: Sparkles,
    },
    {
      title: "Enhancing Developer Experience",
      description: "New tools and improvements for a better development workflow",
      date: "2024-01-23",
      category: "Development",
      icon: Bot,
    },
    {
      title: "AI Industry Insights",
      description: "Latest trends and developments in the AI landscape",
      date: "2024-01-20",
      category: "Industry News",
      icon: Newspaper,
    },
  ]

  return (
    <main className="min-h-screen bg-gray-50 p-6 md:p-12">
      {/* Header */}
      <header className="max-w-7xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Nidum AI News
        </h1>
        <p className="text-lg text-gray-600">
          Stay updated with the latest developments and announcements
        </p>
      </header>

      {/* News Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsItems.map((item, index) => (
          <article key={index} className="card group">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-primary px-3 py-1 bg-blue-50 rounded-full">
                {item.category}
              </span>
              <item.icon className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors" />
            </div>
            <h2 className="text-xl font-semibold mb-3">{item.title}</h2>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">{item.date}</span>
              <button className="btn flex items-center text-primary hover:text-secondary">
                Read more
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Newsletter Section */}
      <section className="max-w-7xl mx-auto mt-16 bg-white rounded-xl p-8 shadow-lg">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Informed</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter for the latest updates and insights
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="input flex-1"
            />
            <button className="btn btn-primary">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}