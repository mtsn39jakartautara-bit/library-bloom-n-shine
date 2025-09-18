import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen, MapPin } from "lucide-react";
import heroImage from "@/assets/library-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Perpustakaan MTsN 39" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
        >
          Selamat Datang di
          <span className="block text-cream mt-2">Perpustakaan MTsN 39</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl mb-8 text-cream/90 max-w-2xl mx-auto leading-relaxed"
        >
          Tempat terbaik untuk menumbuhkan budaya literasi dan cinta membaca. 
          Bergabunglah dengan komunitas pembelajar di pusat pengetahuan kami.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button 
            size="lg" 
            className="bg-cream text-navy-soft hover:bg-cream/90 font-semibold px-8 py-3 text-lg shadow-hover transition-all duration-300 hover:scale-105"
          >
            <BookOpen className="mr-2 h-5 w-5" />
            Jelajahi Koleksi
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-cream text-cream hover:bg-cream hover:text-navy-soft font-semibold px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
          >
            <MapPin className="mr-2 h-5 w-5" />
            Kunjungi Kami
          </Button>
        </motion.div>
      </div>
      
      {/* Floating Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute top-20 left-10 w-20 h-20 border border-cream rounded-full"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
        className="absolute bottom-32 right-16 w-16 h-16 border border-cream rounded-full"
      />
    </section>
  );
};

export default HeroSection;