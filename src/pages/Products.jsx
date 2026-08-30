import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  { image: 'images/Products S/p17.jpg', name: 'Green Sweater with White Strips', category: 'Sleeveless Sweaters' },
  { image: 'images/Products S/p2.jpg', name: 'Grey Sweater with yellow-red Strips', category: 'Sleeveless Sweaters' },
  { image: 'images/Products S/p1.jpg', name: 'Plain Maroon Sweater', category: 'Sleeveless Sweaters' },
  { image: 'images/Products S/p29.jpg', name: 'Plain Grey Sweater', category: 'Sleeveless Sweaters' },
  { image: 'images/Products S/p10.jpg', name: 'Plain Black Sweater', category: 'Sleeveless Sweaters' },
  { image: 'images/Products S/p13.jpg', name: 'Plain Blue Sweater', category: 'Sleeveless Sweaters' },
  { image: 'images/Products S/p16.jpg', name: 'Black Sweater with White Strips', category: 'Sleeveless Sweaters' },
  { image: 'images/Products S/p19.jpg', name: 'PSG Sweater', category: 'Sleeveless Sweaters' },
  { image: 'images/Products S/p18.jpg', name: 'Black Sweater with red-green Strips', category: 'Sleeveless Sweaters' },
  { image: 'images/Products S/p26.jpg', name: 'Green Sweater with yellow Strips', category: 'Sleeveless Sweaters' },
  { image: 'images/Products S/p20.jpg', name: 'Black Sweater with Pink Strips', category: 'Sleeveless Sweaters' },
  { image: 'images/Products S/p3.jpg', name: 'Plain Red Sweater', category: 'Sleeveless Sweaters' },
  { image: 'images/Products S/p5.jpg', name: 'Grey Jersey with yellow-red Strips', category: 'Full Sleeves Sweaters' },
  { image: 'images/Products S/p8.jpg', name: 'Green Commando Jersey', category: 'Full Sleeves Sweaters' },
  { image: 'images/Products S/p31.jpg', name: 'Black Jersey', category: 'Full Sleeves Sweaters' },
  { image: 'images/Products S/p32.jpg', name: 'V-Neck Jersey', category: 'Full Sleeves Sweaters' },
  { image: 'images/Products S/p33.jpg', name: 'Blue Commando Jersey', category: 'Full Sleeves Sweaters' },
  { image: 'images/Products S/p28.jpg', name: 'Blue Plain Jersey', category: 'Full Sleeves Sweaters' },
  { image: 'images/Products S/p35.jpg', name: 'PSG Style Jersey', category: 'Full Sleeves Sweaters' },
  { image: 'images/Products S/p34.jpg', name: 'Grey Black White Jersey', category: 'Full Sleeves Sweaters' },
  { image: 'images/Products S/p12.jpg', name: 'Blue Cardigan', category: 'Cardigans' },
  { image: 'images/Products S/p23.jpg', name: 'Maroon Cardigan', category: 'Cardigans' },
  { image: 'images/Products S/p27.jpg', name: 'Grey Cardigan', category: 'Cardigans' },
  { image: 'images/Products S/p36.jpg', name: 'Green Cardigan', category: 'Cardigans' },
  { image: 'images/Products S/p42.jpg', name: 'Blue Zipper', category: 'Zippers' },
  { image: 'images/Products S/p38.jpg', name: 'Black Ladies Zipper', category: 'Zippers' },
  { image: 'images/Products S/p41.jpg', name: 'Brown Zipper', category: 'Zippers' },
  { image: 'images/Products S/p40.jpg', name: 'Half-Zipped Black Zipper', category: 'Zippers' }
];

const Products = () => {
  return (
    <div className="bg-brand-light min-h-screen pb-20">
      {/* Page Header */}
      <section className="bg-brand-green py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1434389678369-1834271810fa?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Our Catalogue</h1>
          <p className="text-brand-gold text-lg md:text-xl font-medium">Explore our premium uniform collection.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl p-4 shadow-soft border border-gray-100 group hover:-translate-y-2 transition-all duration-300 flex flex-col">
              <div className="relative overflow-hidden rounded-xl bg-gray-100 aspect-square mb-4">
                <img 
                  src={`https://stundents-1st-choice.github.io/UniformsSweater/${product.image.replace(' ', '%20')}`} 
                  alt={product.name} 
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1620799140061-68936d75c80c?q=80&w=600&auto=format&fit=crop'; }}
                />
              </div>
              <div className="flex items-center gap-1 mb-2 text-brand-gold">
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
              </div>
              <h4 className="font-bold text-md text-brand-dark leading-tight mb-2 flex-grow">{product.name}</h4>
              <Link to="/contact#inquiry-form" className="block w-full text-center bg-gray-50 text-brand-green border border-gray-200 font-semibold py-2 rounded-xl group-hover:bg-brand-green group-hover:text-white transition-colors duration-300 mt-2 text-sm">
                Inquire for Bulk
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
