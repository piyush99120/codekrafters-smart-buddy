import React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { MessageCircle, ArrowRight } from "lucide-react";
import ChatbotModal from "@/components/ChatbotModal";

const CTASection = () => {
  return (
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
            <Button className="bg-white text-blue-900 hover:bg-gray-100 font-medium px-8 py-6 rounded-md flex items-center gap-2 text-lg mx-auto animate-bounce hover:animate-none transform transition-all duration-300 hover:scale-105">
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
  );
};

export default CTASection;