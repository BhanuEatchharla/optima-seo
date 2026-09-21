"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
// import { DemoModal } from "@/components/demo-modal";
import { Play, Zap } from "lucide-react";

import heroImage from "@/assets/hero-logistics.webp";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-background to-background-secondary overflow-hidden pt-24 scroll-mt-[60px]"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10 pointer-events-none" />

      {/* MAIN CONTAINER */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div className="space-y-6 text-center lg:text-left">
            
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <Zap className="h-4 w-4 mr-2" />
              OPTIMA — Plant Logistics Platform
            </div>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                OPTIMA
              </span>
              <br />

              Plant Logistics &{" "}
              <span className="text-primary">
                Transportation Management Software
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base xl:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              OPTIMA helps manufacturing plants manage vehicle induction,
              fleet tracking, dispatch, compliance, route optimization,
              and delivery operations from one platform.
            </p>

            {/* CTA */}
            <div className="flex justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg"
                // onClick={() => setIsDemoModalOpen(true)}
              >
                Request OPTIMA Demo
                <Play className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col items-center lg:items-end space-y-6">

            {/* HERO IMAGE */}
            <div className="relative w-full max-w-[640px] aspect-[1600/895]">
              <Image
                src={heroImage}
                alt="OPTIMA plant logistics and transportation management platform"
                width={1600}
                height={895}
                priority
                fetchPriority="high"
                sizes="(max-width: 1024px) 100vw, 640px"
                className="absolute inset-0 w-full h-full rounded-2xl shadow-2xl object-cover"
              />
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-end gap-4 text-xs sm:text-sm text-muted-foreground">
              
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-success rounded-full" />
                Reduced Plant Logistics Cost
              </div>

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                100% Paperless Operations
              </div>

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-warning rounded-full" />
                Real-time Fleet & Plant Visibility
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Demo Modal */}
      {/* 
      <DemoModal
        open={isDemoModalOpen}
        onOpenChange={setIsDemoModalOpen}
      />
      */}
    </section>
  );
}