import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const BestMoviesSection = () => {
  const { toast } = useToast();

  const handleWatchNow = (title) => {
    toast({
      title: "Playback Encrypted 🚧",
      description: `Access to ${title} is available through our premium packages! 🚀`,
    });
  };

  const movies = [
    {
      title: 'Inception',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      image: 'https://images.unsplash.com/photo-1534136302631-89abb23adf45'
    },
    {
      title: 'The Dark Knight',
      description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability.',
      image: 'https://images.unsplash.com/photo-1572188863110-46d457c9234d'
    },
    {
      title: 'Avengers: Endgame',
      description: 'After the devastating events of Infinity War, the remaining Avengers assemble once more in order to reverse Thanos\' actions and restore balance to the universe.',
      image: 'https://images.unsplash.com/photo-1695052290203-e73a0dedc005'
    },
    {
      title: 'Titanic',
      description: 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.',
      image: 'https://images.unsplash.com/photo-1499207271596-ee5780a9d7cb'
    },
    {
      title: 'Forrest Gump',
      description: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.',
      image: 'https://images.unsplash.com/photo-1639236722522-3813dd3144a9'
    },
    {
      title: 'The Shawshank Redemption',
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      image: 'https://images.unsplash.com/photo-1607376995899-383532a918b3'
    },
    {
      title: 'Pulp Fiction',
      description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
      image: 'https://images.unsplash.com/photo-1561497440-94f782d6c6c3'
    },
    {
      title: 'Interstellar',
      description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival as Earth becomes increasingly uninhabitable.',
      image: 'https://images.unsplash.com/photo-1641873514421-cc352f271632'
    },
    {
      title: 'Avatar',
      description: 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
      image: 'https://images.unsplash.com/photo-1531362648350-9599fe7fd499'
    },
    {
      title: 'The Matrix',
      description: 'When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.',
      image: 'https://images.unsplash.com/photo-1610616936324-7e009edb03d8'
    }
  ];

  return (
    <section id="best-movies" className="py-24 bg-[#0A0A1F] border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 bg-[#0C0BBD]/20 text-[#0C0BBD] px-4 py-1.5 rounded-full font-bold uppercase tracking-wider text-sm">
            <Play size={16} /> Premium Access
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Iconic Cinematic Hits
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Dive into our massive on-demand library featuring beloved cinematic films. Watch seamlessly in flawless quality with your premium subscription.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {movies.map((movie, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative rounded-xl overflow-hidden glass-card shadow-lg hover:shadow-2xl hover:scale-[1.03] hover:z-10 transition-all duration-300 flex flex-col h-full bg-[#0F172A]"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={movie.image}
                  alt={`Watch ${movie.title}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">{movie.title}</h3>
                <p className="text-sm text-gray-400 line-clamp-3 mb-6 flex-grow">
                  {movie.description}
                </p>
                <Button 
                  onClick={() => handleWatchNow(movie.title)}
                  className="w-full bg-[#0C0BBD] hover:bg-[#0908A0] text-white shadow-[0_4px_14px_rgba(12,11,189,0.4)]"
                >
                  <Play size={16} className="mr-2" fill="white" /> View Details
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestMoviesSection;