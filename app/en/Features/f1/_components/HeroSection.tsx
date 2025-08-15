"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, CheckCircle, TrendingUp, Shield } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-16 pb-20 sm:pt-24 sm:pb-24">
          <div className="text-center mb-16">
            {/* Logo and Brand */}
            <div className="flex items-center justify-center gap-3 mb-6 animate-in slide-in-from-top duration-500">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
                <Image 
                  src="/portal-logo/logo-wb.png" 
                  alt="Oxmaint AI Logo" 
                  width={48} 
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <h1 className="text-2xl font-bold text-foreground">
                Oxmaint <span className="text-primary">AI</span>
              </h1>
            </div>
            
            {/* Main Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-in slide-in-from-bottom duration-700">
              Transform Your Maintenance
              <br />
              <span className="text-primary">with AI Intelligence</span>
            </h2>
            
            {/* Subtitle */}
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8 animate-in slide-in-from-bottom duration-700 delay-200">
              The enterprise-grade CMMS platform that leverages artificial intelligence to predict failures, optimize operations, and deliver unprecedented maintenance intelligence.
            </p>
            
            {/* Key Benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-10 animate-in slide-in-from-bottom duration-700 delay-300">
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="font-medium">Predictive Analytics</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="font-medium">50% Less Downtime</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="w-5 h-5 text-secondary" />
                <span className="font-medium">Enterprise Security</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-in slide-in-from-bottom duration-700 delay-400">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-border text-foreground hover:bg-accent hover:border-border/50 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:-translate-y-1"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>
          </div>
          
          {/* Dashboard Preview */}
          <div className="relative max-w-5xl mx-auto animate-in slide-in-from-bottom duration-1000 delay-500">
            <div className="relative bg-card/20 backdrop-blur-sm rounded-2xl shadow-2xl border border-border overflow-hidden">
              <div className="bg-card/10 backdrop-blur-sm px-6 py-4 border-b border-border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-destructive rounded-full"></div>
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <div className="ml-4 text-sm text-muted-foreground font-medium">Oxmaint AI Dashboard</div>
                </div>
              </div>
              <div className="p-8 bg-card/10 backdrop-blur-sm min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">AI-Powered Dashboard</h3>
                  <p className="text-muted-foreground">Real-time insights and predictive analytics</p>
                </div>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 left-6 bg-card/20 backdrop-blur-sm rounded-xl shadow-xl border border-border p-4 animate-in slide-in-from-left duration-1000 delay-600">
              <div className="text-2xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            
            <div className="absolute -bottom-6 right-6 bg-card/20 backdrop-blur-sm rounded-xl shadow-xl border border-border p-4 animate-in slide-in-from-right duration-1000 delay-700">
              <div className="text-2xl font-bold text-secondary">50%</div>
              <div className="text-sm text-muted-foreground">Cost Reduction</div>
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-20 text-center animate-in slide-in-from-bottom duration-1000 delay-600">
            <p className="text-muted-foreground mb-8">Trusted by leading organizations worldwide</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground text-sm">Global Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">50K+</div>
                <div className="text-muted-foreground text-sm">Assets Monitored</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground text-sm">AI Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">95%</div>
                <div className="text-muted-foreground text-sm">Accuracy Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-60 hover:opacity-100 transition-opacity duration-300">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
} 