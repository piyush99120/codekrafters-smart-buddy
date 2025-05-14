
import React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { MessageCircle, Check, Lock, Brain, FileText, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ChatbotModal from "@/components/ChatbotModal";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-4">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight">
              Your Smart Assistant for All Things CodeKrafters
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl">
              Get instant answers, support, and guidance—24/7—with our intelligent chatbot designed to enhance your CodeKrafters experience.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-6 rounded-md flex items-center gap-2 text-lg">
                  <MessageCircle size={20} />
                  Chat Now
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <ChatbotModal />
              </DialogContent>
            </Dialog>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-blue-600 rounded-full opacity-10 animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <MessageCircle size={100} className="text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-900">
            Powerful Features to Enhance Your Experience
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<MessageCircle size={24} />}
              title="24/7 Instant Support"
              description="Get immediate help with services, projects, and general inquiries anytime you need."
            />
            
            <FeatureCard 
              icon={<Brain size={24} />}
              title="Smart Service Navigation"
              description="Easily explore CodeKrafters' offerings like web apps, mobile apps, UI/UX design, and DevOps."
            />
            
            <FeatureCard 
              icon={<Users size={24} />}
              title="Personalized Responses"
              description="The chatbot adapts answers based on your interests and previous interactions."
            />
            
            <FeatureCard 
              icon={<FileText size={24} />}
              title="Project Inquiry Assistant"
              description="Quickly get estimates, timelines, and connect with a human representative."
            />
            
            <FeatureCard 
              icon={<Lock size={24} />}
              title="Secure Conversations"
              description="End-to-end encrypted chats to keep your data safe and private."
            />
            
            <FeatureCard 
              icon={<Check size={24} />}
              title="Quick Resolution"
              description="Get answers to common questions instantly without waiting for email responses."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-900">
            How It Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StepCard 
              number={1}
              title="Click the chatbot icon"
              description="Find the chat icon on any page of our website to start a conversation."
            />
            
            <StepCard 
              number={2}
              title="Ask your question"
              description="Type your query or explore our services through guided options."
            />
            
            <StepCard 
              number={3}
              title="Get instant replies"
              description="Receive accurate answers or be connected to a real expert if needed."
            />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-900">
            How Our Chatbot Helps
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <UseCaseCard 
              userType="Potential Clients"
              question="What services do you offer?"
              answer="Our chatbot provides detailed information about our web development, mobile app, UI/UX design, and DevOps services, helping potential clients understand our offerings."
            />
            
            <UseCaseCard 
              userType="Job Seekers"
              question="Are there any open roles?"
              answer="Job seekers can quickly learn about current openings, required skills, and application processes without having to search through multiple pages."
            />
            
            <UseCaseCard 
              userType="Returning Clients"
              question="I want to update my project."
              answer="Existing clients can easily initiate project updates, schedule meetings with their project manager, or request support through the chatbot."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-900">
            What Our Users Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard 
              quote="The chatbot helped me understand their services better without needing to schedule a call. I got all the information I needed to make a decision."
              author="Sarah Johnson"
              position="Marketing Director"
            />
            
            <TestimonialCard 
              quote="As a returning client, the chatbot made it super easy to request updates to my existing project. Saved me so much time!"
              author="Michael Chen"
              position="Product Owner"
            />
            
            <TestimonialCard 
              quote="I was looking for a job opportunity and the chatbot guided me to the right openings based on my skills. Very impressive!"
              author="Alex Rodriguez"
              position="Frontend Developer"
            />
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-16 px-4 bg-blue-900 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience Smarter Support—Try the CodeKrafters Chatbot Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get instant answers to your questions and streamline your experience with our intelligent assistant.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 font-medium px-8 py-6 rounded-md flex items-center gap-2 text-lg mx-auto">
                <MessageCircle size={20} />
                Launch Chat
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
const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <Card className="border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all duration-300">
      <CardContent className="p-6">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-blue-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

// Component for how it works steps
const StepCard = ({ number, title, description }: { number: number, title: string, description: string }) => {
  return (
    <div className="text-center">
      <div className="w-16 h-16 rounded-full bg-blue-600 text-white text-2xl font-bold flex items-center justify-center mb-4 mx-auto">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-blue-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Component for use case cards
const UseCaseCard = ({ userType, question, answer }: { userType: string, question: string, answer: string }) => {
  return (
    <Card className="border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all duration-300">
      <CardContent className="p-6">
        <div className="text-blue-600 font-semibold mb-2">{userType}</div>
        <h3 className="text-xl font-semibold mb-3 text-blue-900">"{question}"</h3>
        <p className="text-gray-600">{answer}</p>
      </CardContent>
    </Card>
  );
};

// Component for testimonial cards
const TestimonialCard = ({ quote, author, position }: { quote: string, author: string, position: string }) => {
  return (
    <Card className="border border-gray-200 bg-white">
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
