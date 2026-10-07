import React from "react";
import {
  Sparkles,
  ShieldCheck,
  Truck,
  Headphones,
  Award,
  Users,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router";

const About = () => {
  const stats = [
    { label: "Active Customers", value: "50K+" },
    { label: "Premium Products", value: "10K+" },
    { label: "Positive Reviews", value: "99.4%" },
    { label: "Global Delivery", value: "35+ Countries" },
  ];

  const features = [
    {
      icon: ShieldCheck,
      title: "100% Authentic Quality",
      desc: "Every product is sourced directly from certified manufacturers with rigorous quality checks.",
    },
    {
      icon: Truck,
      title: "Ultra-Fast Delivery",
      desc: "Express shipping with real-time tracking straight to your doorstep within 48 hours.",
    },
    {
      icon: Headphones,
      title: "24/7 Dedicated Support",
      desc: "Our customer success team is available around the clock to help with any queries.",
    },
    {
      icon: Award,
      title: "Hassle-free Returns",
      desc: "30-day money-back guarantee with instant pickups and no questions asked.",
    },
  ];

  const team = [
    {
      name: "Alex Morgan",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=faces",
    },
    {
      name: "Sarah Chen",
      role: "Head of Product Design",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop&crop=faces",
    },
    {
      name: "David Miller",
      role: "Lead Architect & Tech",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=faces",
    },
  ];

  return (
    <div className="space-y-16 pb-12 text-slate-200">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-b from-slate-900/90 via-slate-900/50 to-slate-950 p-8 sm:p-12 lg:p-16 text-center">
        {/* Ambient Glows */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-24 right-10 w-72 h-72 bg-violet-500/10 rounded-full blur-[90px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs sm:text-sm font-medium">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>Redefining Online Shopping Experience</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Crafting the Future of{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-sky-400 bg-clip-text text-transparent">
              Modern Commerce
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            We are dedicated to bringing you hand-picked, curated lifestyle
            products with unmatched quality, transparent pricing, and
            lightning-fast delivery.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              to="/main/product"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 text-white font-medium text-sm shadow-lg shadow-indigo-500/25 transition-all duration-200 active:scale-95"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/30 transition-all duration-200 text-center space-y-1"
          >
            <div className="text-2xl sm:text-4xl font-extrabold bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
              {stat.value}
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </section>

      {/* Why Choose Us / Values */}
      <section className="space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Why Customers Choose Us
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            We combine high-grade engineering with customer-first design to
            deliver excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700/80 hover:bg-slate-900/80 transition-all duration-200 space-y-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all duration-200">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Team / Story Section */}
      <section className="space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Users className="w-4 h-4" />
            <span>Behind the Scenes</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Meet the Builders
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Passionate individuals dedicated to crafting seamless digital
            commerce.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-center space-y-3 group hover:border-indigo-500/30 transition-all"
            >
              <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden border border-slate-700/60 group-hover:scale-105 transition-transform duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-base font-semibold text-white">
                  {member.name}
                </h4>
                <p className="text-xs text-indigo-400 font-medium">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
