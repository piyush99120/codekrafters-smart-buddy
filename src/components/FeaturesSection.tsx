import React from "react";
import { MessageCircle, Brain, Users, FileText, Lock, Check } from "lucide-react";
import { FeatureCard } from "@/components/FeatureCard";

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-b from-blue-50 to-transparent rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-t from-purple-50 to-transparent rounded-full -ml-32 -mb-32"></div>
      
      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">Powerful Features</span>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-900 to-purple-800 bg-clip-text text-transparent">
            Enhance Your Experience
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<MessageCircle size={24} />}
            title="24/7 Instant Support"
            description="Get immediate help with services, projects, and general inquiries anytime you need."
            color="blue"
            delay={0}
          />
          
          <FeatureCard 
            icon={<Brain size={24} />}
            title="Smart Service Navigation"
            description="Easily explore CodeKrafters' offerings like web apps, mobile apps, UI/UX design, and DevOps."
            color="purple"
            delay={150}
          />
          
          <FeatureCard 
            icon={<Users size={24} />}
            title="Personalized Responses"
            description="The chatbot adapts answers based on your interests and previous interactions."
            color="indigo"
            delay={300}
          />
          
          <FeatureCard 
            icon={<FileText size={24} />}
            title="Project Inquiry Assistant"
            description="Quickly get estimates, timelines, and connect with a human representative."
            color="pink"
            delay={450}
          />
          
          <FeatureCard 
            icon={<Lock size={24} />}
            title="Secure Conversations"
            description="End-to-end encrypted chats to keep your data safe and private."
            color="green"
            delay={600}
          />
          
          <FeatureCard 
            icon={<Check size={24} />}
            title="Quick Resolution"
            description="Get answers to common questions instantly without waiting for email responses."
            color="cyan"
            delay={750}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;