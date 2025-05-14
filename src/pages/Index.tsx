
import React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { MessageCircle, Check, Lock, Brain, FileText, Users, ArrowRight, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ChatbotModal from "@/components/ChatbotModal";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-100 to-white py-20 px-4 overflow-hidden">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-6 animate-fade-in">
            <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-2 flex items-center gap-1">
              <Sparkles size={16} className="animate-pulse" />
              <span>AI-Powered Support</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-to-r from-blue-900 to-purple-800 leading-tight">
              Your Smart Assistant for All Things CodeKrafters
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl">
              Get instant answers, support, and guidance—24/7—with our intelligent chatbot designed to enhance your CodeKrafters experience.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium px-8 py-6 rounded-md flex items-center gap-2 text-lg transform transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle size={20} />
                  Chat Now
                  <ArrowRight size={18} className="ml-1 animate-bounce" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <ChatbotModal />
              </DialogContent>
            </Dialog>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-10 animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center animate-fade-in">
                <div className="bg-white rounded-full p-6 shadow-lg transform transition-all duration-500 hover:scale-110">
                  <MessageCircle size={100} className="text-gradient-to-r from-blue-600 to-purple-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Abstract shapes for visual interest */}
        <div className="absolute -bottom-10 left-0 w-full overflow-hidden">
          <div className="w-48 h-48 bg-blue-100 rounded-full absolute -bottom-24 -left-12 opacity-50"></div>
          <div className="w-64 h-64 bg-purple-100 rounded-full absolute -bottom-32 left-1/4 opacity-30"></div>
        </div>
      </section>

      {/* Features Section */}
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

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">Simple Process</span>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-900 to-purple-800 bg-clip-text text-transparent">
              How It Works
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StepCard 
              number={1}
              title="Click the chatbot icon"
              description="Find the chat icon on any page of our website to start a conversation."
              delay={0}
            />
            
            <StepCard 
              number={2}
              title="Ask your question"
              description="Type your query or explore our services through guided options."
              delay={300}
            />
            
            <StepCard 
              number={3}
              title="Get instant replies"
              description="Receive accurate answers or be connected to a real expert if needed."
              delay={600}
            />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
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

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-900 to-purple-800 bg-clip-text text-transparent">
              What Our Users Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="The chatbot helped me understand their services better without needing to schedule a call. I got all the information I needed to make a decision."
              author="Sarah Johnson"
              position="Marketing Director"
              delay={0}
            />
            
            <TestimonialCard 
              quote="As a returning client, the chatbot made it super easy to request updates to my existing project. Saved me so much time!"
              author="Michael Chen"
              position="Product Owner"
              delay={300}
            />
            
            <TestimonialCard 
              quote="I was looking for a job opportunity and the chatbot guided me to the right openings based on my skills. Very impressive!"
              author="Alex Rodriguez"
              position="Frontend Developer"
              delay={600}
            />
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-800 rounded-full opacity-30 transform -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-800 rounded-full opacity-30 transform translate-y-1/2 -translate-x-1/2"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Experience Smarter Support—Try the CodeKrafters Chatbot Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Get instant answers to your questions and streamline your experience with our intelligent assistant.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 font-medium px-8 py-6 rounded-md flex items-center gap-2 text-lg mx-auto animate-bounce hover:animate-none transform transition-all duration-300 hover:scale-105">
                <MessageCircle size={20} />
                Launch Chat
                <ArrowRight size={18} className="ml-1" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <ChatbotModal />
            </DialogContent>
          </Dialog>
        </div>
      </section>
    </div>
  );
};

// Component for feature cards
const FeatureCard = ({ icon, title, description, color, delay }: { icon: React.ReactNode, title: string, description: string, color: string, delay: number }) => {
  const colorMap: { [key: string]: string } = {
    blue: "bg-blue-100 text-blue-600 border-blue-200 hover:border-blue-300 hover:shadow-blue-100",
    purple: "bg-purple-100 text-purple-600 border-purple-200 hover:border-purple-300 hover:shadow-purple-100",
    indigo: "bg-indigo-100 text-indigo-600 border-indigo-200 hover:border-indigo-300 hover:shadow-indigo-100",
    pink: "bg-pink-100 text-pink-600 border-pink-200 hover:border-pink-300 hover:shadow-pink-100",
    green: "bg-green-100 text-green-600 border-green-200 hover:border-green-300 hover:shadow-green-100",
    cyan: "bg-cyan-100 text-cyan-600 border-cyan-200 hover:border-cyan-300 hover:shadow-cyan-100",
  };
  
  return (
    <Card 
      className={`border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-500 hover:-translate-y-2 opacity-0 animate-fade-in`}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <CardContent className="p-6">
        <div className={`w-12 h-12 rounded-full ${colorMap[color]} flex items-center justify-center mb-4`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-blue-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

// Component for how it works steps
const StepCard = ({ number, title, description, delay }: { number: number, title: string, description: string, delay: number }) => {
  return (
    <div 
      className="text-center opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-2xl font-bold flex items-center justify-center mb-4 mx-auto transform transition-all duration-500 hover:scale-110 hover:rotate-12">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-blue-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Component for use case cards
const UseCaseCard = ({ userType, question, answer, delay }: { userType: string, question: string, answer: string, delay: number }) => {
  return (
    <Card 
      className="border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-500 hover:-translate-y-2 opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <CardContent className="p-6">
        <div className="text-blue-600 font-semibold mb-2">{userType}</div>
        <h3 className="text-xl font-semibold mb-3 text-blue-900">"{question}"</h3>
        <p className="text-gray-600">{answer}</p>
      </CardContent>
    </Card>
  );
};

// Component for testimonial cards
const TestimonialCard = ({ quote, author, position, delay }: { quote: string, author: string, position: string, delay: number }) => {
  return (
    <Card 
      className="border border-gray-200 bg-white hover:shadow-xl transition-all duration-500 hover:-translate-y-2 opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <CardContent className="p-8">
        <div className="text-4xl text-blue-200 mb-4">"</div>
        <p className="text-gray-700 italic mb-6">{quote}</p>
        <div>
          <div className="font-semibold text-blue-900">{author}</div>
          <div className="text-gray-500">{position}</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Index;
