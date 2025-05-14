
import React from "react";
import { motion } from "framer-motion";

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  delay: number;
}

const StepCard = ({ number, title, description, delay }: StepCardProps) => {
  // Generate a vibrant gradient color based on the step number
  const gradients = [
    "from-purple-500 to-blue-500",
    "from-orange-500 to-pink-500",
    "from-green-500 to-teal-500"
  ];
  
  const gradient = gradients[(number - 1) % gradients.length];
  
  return (
    <motion.div 
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: delay / 1000 }}
      viewport={{ once: true }}
    >
      <motion.div 
        className={`w-20 h-20 rounded-full bg-gradient-to-r ${gradient} text-white text-2xl font-bold flex items-center justify-center mb-6 mx-auto shadow-lg`}
        whileHover={{ scale: 1.15, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {number}
      </motion.div>
      <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-900">{title}</h3>
      <p className="text-gray-600 text-center max-w-xs mx-auto">{description}</p>
    </motion.div>
  );
};

export default StepCard;
