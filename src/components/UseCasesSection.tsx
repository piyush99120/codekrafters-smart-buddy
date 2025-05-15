import React from "react";
import { UseCaseCard } from "./UseCaseCard";

const UseCasesSection = () => {
  return (
    <section className="py-20 px-4 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-50 to-transparent"></div>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">Real Examples</span>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-900 to-purple-800 bg-clip-text text-transparent">
            How Our Chatbot Helps
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <UseCaseCard 
            userType="Potential Clients"
            question="What services do you offer?"
            answer="Our chatbot provides detailed information about our web development, mobile app, UI/UX design, and DevOps services, helping potential clients understand our offerings."
            delay={0}
          />
          
          <UseCaseCard 
            userType="Job Seekers"
            question="Are there any open roles?"
            answer="Job seekers can quickly learn about current openings, required skills, and application processes without having to search through multiple pages."
            delay={300}
          />
          
          <UseCaseCard 
            userType="Returning Clients"
            question="I want to update my project."
            answer="Existing clients can easily initiate project updates, schedule meetings with their project manager, or request support through the chatbot."
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;