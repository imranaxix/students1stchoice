import { Link } from 'react-router-dom';
import { ArrowRight, Check, Star, ShieldCheck, Tag, Truck } from 'lucide-react';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-28 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#1A3E1A 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-sm font-semibold mb-6">
                <Star size={16} className="text-brand-gold" />
                Trusted by 50+ Schools
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark leading-tight mb-6">
                Where <span className="text-brand-green">Quality</span> meets <br className="hidden sm:block" />
                <span className="text-brand-gold">Uniformity</span>.
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Expertly crafted custom school sweaters featuring your school's crest. We specialize in wholesale supply, custom embroidery, and durable comfort for everyday wear.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://wa.me/923249442092" target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2">
                  Contact Now <ArrowRight size={16} />
                </a>
                <Link to="/about" className="btn-secondary">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Hero Image Grid */}
            <div className="grid grid-cols-2 gap-4 relative">
              <div className="space-y-4 translate-y-8">
                <img src="https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=800&auto=format&fit=crop" alt="Student wearing V-neck sweater" className="rounded-2xl shadow-soft object-cover h-64 w-full" />
                <div className="glassmorphism p-4 rounded-xl absolute -left-8 top-1/4 animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="flex items-center gap-3">
                    <div className="bg-brand-gold p-2 rounded-lg"><Check size={20} className="text-brand-green" /></div>
                    <div>
                      <p className="text-xs text-gray-500 font-semibold uppercase">Quality</p>
                      <p className="font-bold text-sm">100% Color-Fast</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop" alt="Close up of knitted fabric" className="rounded-2xl shadow-soft object-cover h-80 w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Key Features Bar */}
      <section className="bg-brand-green text-white py-12 relative z-20 -mt-6 mx-4 sm:mx-8 lg:mx-auto max-w-7xl rounded-2xl shadow-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6 sm:px-10">
          <div className="flex flex-col items-center text-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform">
              <ShieldCheck size={24} />
            </div>
            <h3 className="font-semibold text-sm sm:text-base">100% Quality Yarn</h3>
            <p className="text-brand-light/70 text-xs sm:text-sm">Color-fast & anti-pilling</p>
          </div>
          <div className="flex flex-col items-center text-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform">
              <Star size={24} />
            </div>
            <h3 className="font-semibold text-sm sm:text-base">Custom Crests</h3>
            <p className="text-brand-light/70 text-xs sm:text-sm">High-density embroidery</p>
          </div>
          <div className="flex flex-col items-center text-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform">
              <Tag size={24} />
            </div>
            <h3 className="font-semibold text-sm sm:text-base">Wholesale Pricing</h3>
            <p className="text-brand-light/70 text-xs sm:text-sm">Bulk supply discounts</p>
          </div>
          <div className="flex flex-col items-center text-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform">
              <Truck size={24} />
            </div>
            <h3 className="font-semibold text-sm sm:text-base">Fast Delivery</h3>
            <p className="text-brand-light/70 text-xs sm:text-sm">Reliable & on-time supply</p>
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-gold font-bold tracking-wide uppercase text-sm mb-2">Featured Collection</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-brand-dark">Sleeveless Sweaters</h3>
            <p className="mt-4 text-gray-600 text-lg">Designed for comfort, durability, and a flawless fit across all student age groups.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {[
              {
                name: 'Green Sweater with White Strips',
                image: 'images/Products S/p17.jpg',
                desc: 'Standard fit with ribbed cuffs and hem.',
              },
              {
                name: 'Plain Maroon Sweater',
                image: 'images/Products S/p1.jpg',
                desc: 'Ideal for daily wear and perfect uniformity.',
                badge: 'Bestseller'
              },
              {
                name: 'Green Commando Jersey',
                image: 'images/Products S/p8.jpg',
                desc: 'Durable heavy-knit commando jersey.'
              }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-2xl p-4 shadow-soft border border-gray-100 group hover:-translate-y-2 transition-all duration-300 max-w-sm mx-auto w-full flex flex-col">
                <div className="relative overflow-hidden rounded-xl bg-gray-100 aspect-[4/5] mb-4">
                  <img 
                    src={`https://stundents-1st-choice.github.io/UniformsSweater/${product.image.replace(' ', '%20')}`} 
                    alt={product.name} 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1620799140061-68936d75c80c?q=80&w=600&auto=format&fit=crop'; }}
                  />
                  {product.badge && (
                    <div className="absolute top-3 right-3 bg-brand-green text-white text-xs font-bold px-2 py-1 rounded-md">{product.badge}</div>
                  )}
                </div>
                <div className="flex items-center gap-1 mb-2 text-brand-gold">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                </div>
                <h4 className="font-bold text-lg text-brand-dark mb-1">{product.name}</h4>
                <p className="text-gray-500 text-sm mb-4 flex-grow">{product.desc}</p>
                <Link to="/contact#inquiry-form" className="block w-full text-center bg-gray-50 text-brand-green border border-gray-200 font-semibold py-2.5 rounded-xl group-hover:bg-brand-green group-hover:text-white transition-colors duration-300 mt-auto">Inquire for Bulk</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
