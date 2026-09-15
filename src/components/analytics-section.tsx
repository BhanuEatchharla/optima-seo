"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  TrendingUp,
  AlertTriangle,
  Gauge,
  ArrowRight,
  DollarSign,
  Clock,
  Shield,
  Truck,
  Activity,
  Target,
} from "lucide-react";
import hero from "@/assets/business-analytics.jpg";

export function AnalyticsSection() {
  const metrics = [
    {
      title: "Transportation Cost Analytics",
      value: "₹2.4M",
      change: "-18%",
      trend: "down",
      icon: DollarSign,
      description:
        "Track freight and transportation costs with route and fuel efficiency insights.",
      details: [
        "Freight cost per kilometer",
        "Fuel efficiency tracking",
        "Vehicle idle cost analysis",
        "Route optimization savings",
      ],
    },

    {
      title: "Fleet Utilization Analytics",
      value: "87%",
      change: "+12%",
      trend: "up",
      icon: Truck,
      description:
        "Measure vehicle utilization and capacity efficiency across transportation operations.",
      details: [
        "Load factor analysis",
        "Vehicle assignment efficiency",
        "Capacity planning",
        "Fleet resource allocation",
      ],
    },

    {
      title: "On-Time Delivery Analytics",
      value: "94.2%",
      change: "+5.8%",
      trend: "up",
      icon: Clock,
      description:
        "Monitor delivery performance, ETA accuracy, and transportation service levels.",
      details: [
        "Delivery time accuracy",
        "Estimated arrival performance",
        "SLA compliance",
        "Delivery performance benchmarks",
      ],
    },

    {
      title: "Fleet Compliance Score",
      value: "99.1%",
      change: "+2.1%",
      trend: "up",
      icon: Shield,
      description:
        "Monitor vehicle, document, permit, and transportation compliance requirements.",
      details: [
        "Document validity",
        "Vehicle safety compliance",
        "Permit tracking",
        "Audit readiness",
      ],
    },
  ];

  const alerts = [
    {
      type: "warning",
      message: "Vehicle permit expires in 3 days",
      priority: "high",
    },
    {
      type: "info",
      message:
        "Route optimization identifies an opportunity to reduce fuel consumption",
      priority: "medium",
    },
    {
      type: "success",
      message: "All vehicles completed safety inspection",
      priority: "low",
    },
  ];

  return (
    <section
      id="analytics"
      className="py-4 md:py-4 bg-background scroll-mt-[60px]"
    >
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-4 md:mb-2 animate-fade-in">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-success/10 border border-success/20 text-success text-sm font-medium mb-3">
            <BarChart3 className="h-4 w-4 mr-1.5" />
            Fleet & Logistics Analytics
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold mb-4 md:mb-6 leading-tight">
            Fleet & Logistics Analytics for Smarter Decisions
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left: Dashboard Preview */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            {/* Dashboard Image */}
            <Card className="border-primary/50 shadow-xl overflow-hidden animate-slide-in-left">
              <div className="relative">
                <Image
                  src={hero}
                  alt="OPTIMA fleet and logistics analytics dashboard showing transportation performance metrics"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
              </div>
            </Card>

            {/* Key Metrics Grid */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {metrics.map((metric, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-glow transition-all duration-300 border-border/50 hover:border-primary/50 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="pb-2 sm:pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="p-2 sm:p-2.5 bg-gradient-button rounded-lg group-hover:scale-105 transition-transform">
                          <metric.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
                        </div>
                        <CardTitle className="text-sm sm:text-base font-semibold group-hover:text-primary transition-colors">
                          {metric.title}
                        </CardTitle>
                      </div>
                      <div
                        className={`flex items-center space-x-1 text-xs sm:text-sm ${metric.trend === "up"
                            ? "text-success"
                            : "text-warning"
                          }`}
                      >
                        <TrendingUp
                          className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${metric.trend === "down" ? "rotate-180" : ""
                            }`}
                        />
                        <span>{metric.change}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-3 sm:p-4">
                    <div className="space-y-2 sm:space-y-3">
                      <div>
                        <div className="text-2xl sm:text-3xl font-bold text-foreground">
                          {metric.value}
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          {metric.description}
                        </p>
                      </div>
                      <div className="space-y-1">
                        {metric.details.map((detail, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-muted-foreground"
                          >
                            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary rounded-full"></div>
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right: Live Insights & Alerts */}
          <div className="space-y-4 md:space-y-6 animate-slide-in-right">
            {/* Real-time Monitoring */}
            <Card className="border-primary/50 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-sm sm:text-base">
                  <Activity className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  <span>Real-time Fleet Monitoring</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <div className="space-y-2 sm:space-y-3">
                  {[
                    "Active Vehicles",
                    "In Transit",
                    "At Loading",
                    "Available",
                  ].map((label, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground"
                    >
                      <span>{label}</span>
                      <span className="font-semibold">
                        {[147, 89, 34, 24][idx]}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 sm:pt-4 border-t border-border">
                  <div className="flex items-center space-x-1 sm:space-x-2 mb-1">
                    <Gauge className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-success" />
                    <span className="text-xs sm:text-sm font-medium">
                      Fleet Performance
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-1.5 sm:h-2">
                    <div className="bg-gradient-hero h-1.5 sm:h-2 rounded-full w-[87%] animate-pulse-glow"></div>
                  </div>
                  <div className="text-right text-[9px] sm:text-xs text-muted-foreground mt-1">
                    87% Efficiency
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Smart Alerts */}
            <Card className="border-warning/50 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-sm sm:text-base">
                  <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-warning" />
                  <span>Smart Alerts</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3">
                {alerts.map((alert, index) => (
                  <div
                    key={index}
                    className={`p-2 sm:p-3 rounded-lg border-l-4 ${alert.type === "warning"
                        ? "bg-warning/10 border-warning"
                        : alert.type === "success"
                          ? "bg-success/10 border-success"
                          : "bg-primary/10 border-primary"
                      }`}
                  >
                    <div className="flex items-start space-x-2">
                      <div
                        className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full mt-1 flex-shrink-0 ${alert.priority === "high"
                            ? "bg-warning animate-pulse"
                            : alert.priority === "medium"
                              ? "bg-primary"
                              : "bg-success"
                          }`}
                      ></div>
                      <p className="text-xs sm:text-sm text-foreground">
                        {alert.message}
                      </p>
                    </div>
                  </div>
                ))}

                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full mt-3 text-primary hover:text-primary-foreground hover:bg-primary/10"
                >
                  View All Alerts
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Predictive Insights */}
            <Card className="border-success/50 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-sm sm:text-base">
                  <Target className="h-4 w-4 sm:h-5 sm:w-5 text-success" />
                  <span>AI-Powered Logistics Predictions</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                {[
                  {
                    title: "Route Optimization",
                    text:
                      "AI-powered route recommendations help identify more efficient delivery paths.",
                    color: "success",
                  },
                  {
                    title: "Predictive Maintenance",
                    text:
                      "Identify vehicles that may require preventive maintenance based on operational insights.",
                    color: "primary",
                  },
                  {
                    title: "Logistics Demand Forecast",
                    text:
                      "Use operational data to anticipate future transportation and logistics demand.",
                    color: "warning",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-2 sm:p-3 bg-${item.color}/10 rounded-lg`}
                  >
                    <div
                      className={`text-xs sm:text-sm font-medium text-${item.color} mb-1`}
                    >
                      {item.title}
                    </div>
                    <p className="text-[9px] sm:text-xs text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                ))}
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90 transition-all  w-80 duration-300 shadow-lg group mt-4 md:mt-6"
                >
                  Explore Analytics
                  <BarChart3 className="ml-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
