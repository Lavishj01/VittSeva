"use client";

import { Star, Quote, Building2, TrendingUp, Users, Award, CheckCircle, IndianRupee, Shield, Heart } from "lucide-react";

export default function VittSevaTestimonialsSection() {
  const vitSevaTestimonials = [
    {
      quote: "VittSeva completely transformed my investment approach. Their personalized strategies helped me achieve a 22% portfolio growth in just 18 months, and their tax planning saved me lakhs in unnecessary payments. The VittSeva team truly understands client needs.",
      name: "Rajesh Kumar",
      title: "Senior Manager, Tech Company",
      rating: 5,
      industry: "VittSeva Investment Planning",
      savings: "₹5.2L saved in taxes"
    },
    {
      quote: "As an NRI, managing finances in India was always challenging. VittSeva's dedicated NRI services made everything seamless - from property investments to tax compliance. Their expertise in international finance is unmatched!",
      name: "Priya Sharma",
      title: "Software Engineer, USA",
      rating: 5,
      industry: "VittSeva NRI Services",
      savings: "25% better returns"
    },
    {
      quote: "The team at VittSeva helped us secure the perfect home loan with the lowest interest rates. Their expertise in loan advisory and negotiation skills saved us over ₹3 lakhs in the long run. Highly recommend VittSeva!",
      name: "Amit & Neha Patel",
      title: "Business Owners, Jaipur",
      rating: 5,
      industry: "VittSeva Loan Advisory",
      savings: "₹3L+ interest saved"
    },
  ];

  const vitSevaStats = [
    { 
      value: "2000+", 
      label: "VittSeva Happy Clients",
      icon: Users,
      description: "Satisfied customers nationwide",
      color: "green"
    },
    { 
      value: "₹5Cr+", 
      label: "Assets Under VittSeva Management",
      icon: TrendingUp,
      description: "Portfolio value under advisory",
      color: "blue"
    },
    { 
      value: "15%", 
      label: "Avg. VittSeva Returns",
      icon: Award,
      description: "Annual portfolio growth",
      color: "green"
    },
    { 
      value: "99.5%", 
      label: "VittSeva Client Satisfaction",
      icon: Shield,
      description: "Highest service quality rating",
      color: "blue"
    },
  ];

  const vitSevaAchievements = [
    "SEBI Registered VittSeva Advisor",
    "Industry Expert VittSeva Team", 
    "Multi-Brand VittSeva Approach",
    "Personalized VittSeva Solutions"
  ];

  const vitSevaClientTypes = [
    { label: "Individual Investors", emoji: "👥", color: "green" },
    { label: "NRI Clients", emoji: "🌏", color: "blue" },
    { label: "Women-Focused Services", emoji: "👩", color: "green" },
    { label: "Senior Citizens", emoji: "👴", color: "blue" },
    { label: "Corporate Clients", emoji: "🏢", color: "green" }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in slide-in-from-bottom duration-700">
          <div className="inline-flex items-center gap-2 mb-6">
            <Star className="w-5 h-5 text-green-500 fill-current" />
            <IndianRupee className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium uppercase tracking-wider">
              <span className="text-green-500">VittSeva</span> <span className="text-blue-600">Client Stories</span>
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by Thousands of{" "}
            <span className="text-green-500">VittSeva</span> <span className="text-blue-600">Satisfied Clients</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See how families and businesses across India are securing their financial future with <span className="text-green-500 font-semibold">VittSeva's</span> personalized advisory services and achieving their wealth goals through our <span className="text-blue-600 font-semibold">simple, optimal, and personal</span> approach.
          </p>
        </div>

        {/* VittSeva Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {vitSevaTestimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 shadow-md border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-green-500/30 animate-in slide-in-from-bottom duration-700" style={{animationDelay: `${index * 100 + 200}ms`}}>
              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-blue-600 text-blue-600" />
                ))}
                <span className="text-sm text-muted-foreground ml-2">VittSeva Client</span>
              </div>
              
              {/* Quote */}
              <div className="relative mb-6">
                <Quote className="w-8 h-8 text-green-500/20 absolute -top-2 -left-2" />
                <p className="text-foreground leading-relaxed italic pl-6">
                  "{testimonial.quote}"
                </p>
              </div>
              
              {/* Savings/Results Highlight */}
              <div className="bg-gradient-to-r from-green-500/10 to-blue-600/10 rounded-lg p-3 mb-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-semibold text-foreground">{testimonial.savings}</span>
                </div>
              </div>
              
              {/* Author Info */}
              <div className="border-t border-border pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500/10 to-blue-600/10 rounded-full flex items-center justify-center">
                    <span className="text-green-500 font-semibold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
                <div className="mt-3">
                  <span className="inline-block bg-gradient-to-r from-green-500/20 to-blue-600/20 text-foreground px-3 py-1 rounded-full text-xs font-medium border border-green-500/20">
                    {testimonial.industry}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* VittSeva Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {vitSevaStats.map((stat, index) => (
            <div key={index} className="bg-card rounded-2xl p-6 shadow-md border border-border text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg animate-in slide-in-from-bottom duration-700" style={{animationDelay: `${index * 100 + 500}ms`}}>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                stat.color === 'green' ? 'bg-green-500/10 text-green-500' : 'bg-blue-600/10 text-blue-600'
              }`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-foreground font-medium mb-2">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* VittSeva Trust Indicators */}
        <div className="text-center animate-in slide-in-from-bottom duration-700 delay-600">
          <div className="bg-card rounded-2xl p-8 shadow-md border border-border">
            <h3 className="text-base font-bold text-foreground mb-6">
              Why Clients Choose <span className="text-green-500">VittSeva</span> <span className="text-blue-600">(वित्त सेवा)</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {vitSevaAchievements.map((achievement, index) => (
                <div key={index} className="flex items-center justify-center gap-2 text-foreground">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-sm">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* VittSeva Client Types */}
        <div className="mt-16 text-center animate-in slide-in-from-bottom duration-700 delay-700">
          <p className="text-muted-foreground mb-6">
            Join thousands of individuals and businesses who trust <span className="text-green-500 font-semibold">VittSeva</span> for their financial success
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {vitSevaClientTypes.map((client, index) => (
              <div key={index} className={`px-4 py-2 rounded-full text-sm font-medium ${
                client.color === 'green' 
                  ? 'bg-green-500/10 text-green-500 border border-green-500/20' 
                  : 'bg-blue-600/10 text-blue-600 border border-blue-600/20'
              }`}>
                {client.emoji} {client.label}
              </div>
            ))}
          </div>
        </div>

        {/* VittSeva Call to Action */}
        <div className="mt-16 text-center animate-in slide-in-from-bottom duration-700 delay-800">
          <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <Heart className="w-8 h-8 mx-auto mb-4 text-green-100" />
              <h3 className="text-base font-bold mb-4">
                Ready to Transform Your Financial Future with <span className="text-green-100">VittSeva</span>?
              </h3>
              <p className="text-base mb-6 max-w-2xl mx-auto opacity-90">
                Join our family of satisfied clients and experience the <span className="font-semibold text-green-100">VittSeva</span> difference. 
                Get personalized financial advice that's simple, optimal, and tailored to your unique needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => window.open("https://vittseva.com/contact/?source=testimonials", "_blank")}
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
                >
                  Book A Free VittSeva Consultation
                </button>
                <button 
                  onClick={() => window.open("tel:+91141XXXXXXX", "_blank")}
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300"
                >
                  Call VittSeva Now
                </button>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32" />
          </div>
        </div>

        {/* Additional VittSeva Promise */}
        <div className="mt-12 text-center">
          <div className="max-w-2xl mx-auto p-6 bg-card/20 backdrop-blur-sm rounded-xl border border-border">
            <div className="flex items-center justify-center gap-2 mb-4">
              <IndianRupee className="w-5 h-5 text-green-500" />
              <span className="font-bold text-lg">
                <span className="text-green-500">VittSeva</span> <span className="text-blue-600">Promise</span>
              </span>
              <Shield className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-muted-foreground">
              Simple • Optimal • Personal financial solutions designed to grow your wealth 
              and secure your financial future with complete transparency and expert guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}