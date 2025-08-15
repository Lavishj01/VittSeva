"use client";

import { Star, Quote, Building2, TrendingUp, Users, Award, CheckCircle } from "lucide-react";

export  default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "VittSeva completely transformed my investment approach. Their personalized strategies helped me achieve a 22% portfolio growth in just 18 months, and their tax planning saved me lakhs in unnecessary payments.",
      name: "Rajesh Kumar",
      title: "Senior Manager",
      
      rating: 5,
      industry: "Investment Planning",
    },
    {
      quote: "As an NRI, managing finances in India was always challenging. VittSeva's dedicated NRI services made everything seamless - from property investments to tax compliance. Truly exceptional service!",
      name: "Priya Sharma",
      title: "Software Engineer",
     
      rating: 5,
      industry: "NRI Services",
    },
    {
      quote: "The team at VittSeva helped us secure the perfect home loan with the lowest interest rates. Their expertise in loan advisory and negotiation skills saved us over ₹3 lakhs in the long run.",
      name: "Amit & Neha Patel",
      title: "Business Owners",
     
      rating: 5,
      industry: "Loan Advisory",
    },
  ];

  const stats = [
    { 
      value: "2000+", 
      label: "Happy Clients",
      icon: Users,
      description: "Satisfied customers nationwide"
    },
    { 
      value: "₹5Cr+", 
      label: "Assets Managed",
      icon: TrendingUp,
      description: "Portfolio value under advisory"
    },
    { 
      value: "15%", 
      label: "Avg. Returns",
      icon: Award,
      description: "Annual portfolio growth"
    },
    { 
      value: "99.5%", 
      label: "Client Satisfaction",
      icon: Building2,
      description: "Highest service quality rating"
    },
  ];

  const achievements = [
    "SEBI Registered Advisor",
    "Industry Expert Team",
    "Multi-Brand Approach",
    "Personalized Solutions"
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in slide-in-from-bottom duration-700">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by Thousands of{" "}
            <span className="text-primary">Satisfied Clients</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See how families and businesses across India are securing their financial future with VittSeva's personalized advisory services and achieving their wealth goals.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 shadow-md border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg animate-in slide-in-from-bottom duration-700" style={{animationDelay: `${index * 100 + 200}ms`}}>
              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              
              {/* Quote */}
              <div className="relative mb-6">
                <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-2" />
                <p className="text-foreground leading-relaxed italic pl-6">
                  "{testimonial.quote}"
                </p>
              </div>
              
              {/* Author Info */}
              <div className="border-t border-border pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    
                  </div>
                </div>
                <div className="mt-3">
                  <span className="inline-block bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {testimonial.industry}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-card rounded-2xl p-6 shadow-md border border-border text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg animate-in slide-in-from-bottom duration-700" style={{animationDelay: `${index * 100 + 500}ms`}}>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-foreground font-medium mb-2">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center animate-in slide-in-from-bottom duration-700 delay-600">
          <div className="bg-card rounded-2xl p-8 shadow-md border border-border">
            <h3 className="text-xl font-bold text-foreground mb-6">Why Clients Choose VittSeva</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center justify-center gap-2 text-foreground">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span className="font-medium text-sm">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Social Proof */}
        <div className="mt-16 text-center animate-in slide-in-from-bottom duration-700 delay-700">
          <p className="text-muted-foreground mb-6">Join thousands of individuals and businesses who trust VittSeva for their financial success</p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              👥 Individual Investors
            </div>
            <div className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
              🌏 NRI Clients
            </div>
            <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              👩 Women-Focused Services
            </div>
            <div className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
              👴 Senior Citizens
            </div>
            <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              🏢 Corporate Clients
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-in slide-in-from-bottom duration-700 delay-800">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Transform Your Financial Future?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join our family of satisfied clients and experience the VittSeva difference. Get personalized financial advice that's simple, optimal, and tailored to your unique needs.
            </p>
            <button 
              onClick={() => window.open("https://vittseva.com/contact/?source=testimonials", "_blank")}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Book A Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}