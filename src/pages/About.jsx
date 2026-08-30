import { Users, BookOpen, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-brand-green py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">#KnowUs</h1>
          <p className="text-brand-gold text-lg md:text-xl font-medium">Become Familiar with Us</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Image side */}
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-green/5 rounded-3xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop" 
                alt="Sweater manufacturing" 
                className="relative rounded-2xl shadow-xl w-full object-cover h-[500px]"
              />
              <div className="absolute -bottom-6 -right-6 glassmorphism bg-white p-6 rounded-2xl border border-gray-100 hidden sm:block">
                <img src="/logo.png" alt="Logo" className="h-20 w-auto" />
              </div>
            </div>

            {/* Text side */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-6">Who We Are?</h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  We take immense pride in our journey as a dedicated provider of high-quality sweaters to educational institutions throughout Pakistan. With an unwavering commitment to crafting excellence, we specialize in creating sweaters tailored to the unique needs and vibrant spirit of schools and colleges across the nation.
                </p>
                <p>
                  Our signature touch lies in our meticulous use of premium acrylic yarn, which not only ensures warmth and comfort but also reflects our dedication to superior craftsmanship.
                </p>
                <p>
                  Established in 1996, we've embarked on a path of creating lasting connections through our sweaters. We understand the significance of comfortable, durable, and stylish clothing, especially in educational settings. Our years of experience have allowed us to refine our techniques and deliver unmatched quality to our partner institutions.
                </p>
              </div>

              {/* Stats/Icons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 border-t border-gray-100 pt-10">
                <div className="flex flex-col gap-2">
                  <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green">
                    <Award size={24} />
                  </div>
                  <h4 className="font-bold text-brand-dark text-xl">Est. 1996</h4>
                  <p className="text-sm text-gray-500">Decades of excellence in manufacturing.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green">
                    <BookOpen size={24} />
                  </div>
                  <h4 className="font-bold text-brand-dark text-xl">Schools</h4>
                  <p className="text-sm text-gray-500">Trusted by institutions nationwide.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green">
                    <Users size={24} />
                  </div>
                  <h4 className="font-bold text-brand-dark text-xl">Premium</h4>
                  <p className="text-sm text-gray-500">Finest acrylic yarn quality.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
