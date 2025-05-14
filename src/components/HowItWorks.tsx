
import React from "react";
import { motion } from "framer-motion";
import StepCard from "./StepCard";
import { ArrowRight, Sparkles } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-pink-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-200 rounded-full opacity-30 blur-3xl"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles size={16} className="animate-pulse" />
            <span>Simple Process</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            How It Works
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <StepCard 
            number={1}
            title="Click the chatbot icon"
            description="Find the chat icon on any page of our website to start a conversation."
            delay={100}
          />
          
          <div className="hidden md:flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-purple-400"
              viewport={{ once: true }}
            >
              <ArrowRight size={40} className="animate-pulse" />
            </motion.div>
          </div>
          
          <StepCard 
            number={2}
            title="Ask your question"
            description="Type your query or explore our services through guided options."
            delay={300}
          />
          
          <div className="hidden md:flex items-center justify-center row-start-2 col-start-2">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-purple-400"
              viewport={{ once: true }}
            >
              <ArrowRight size={40} className="animate-pulse" />
            </motion.div>
          </div>
          
          <StepCard 
            number={3}
            title="Get instant replies"
            description="Receive accurate answers or be connected to a real expert if needed."
            delay={500}
          />
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Experience the seamless interaction designed to make your CodeKrafters journey smoother and more efficient.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
