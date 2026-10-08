import React from "react";
import Link from "next/link";
import { ArrowRight, Car, Zap, Landmark, Utensils, Bus, Tv } from "lucide-react";
import { IndustryDetail } from "@/lib/data/industries";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

interface IndustryCardProps {
  industry: IndustryDetail;
}

export function IndustryCard({ industry }: IndustryCardProps) {
  const getIcon = (slug: string) => {
    switch (slug) {
      case "automotives":
        return <Car className="w-6 h-6 text-brand-blue-700" />;
      case "energy-utilities":
        return <Zap className="w-6 h-6 text-brand-blue-700" />;
      case "banking-finance":
        return <Landmark className="w-6 h-6 text-brand-blue-700" />;
      case "food-beverage":
        return <Utensils className="w-6 h-6 text-brand-blue-700" />;
      case "transportation":
        return <Bus className="w-6 h-6 text-brand-blue-700" />;
      case "media-entertainment":
        return <Tv className="w-6 h-6 text-brand-blue-700" />;
      default:
        return <Landmark className="w-6 h-6 text-brand-blue-700" />;
    }
  };

  return (
    <Card variant="interactive" className="flex flex-col justify-between h-full p-8 group border-slate-200">
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-lg bg-brand-blue-50 flex items-center justify-center group-hover:bg-brand-blue-100 transition-colors">
            {getIcon(industry.slug)}
          </div>
          <Badge variant="dark" size="sm">
            Sector Focus
          </Badge>
        </div>

        <h3 className="text-xl font-bold text-brand-navy-900 mb-3 group-hover:text-brand-blue-700 transition-colors">
          {industry.title}
        </h3>

        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          {industry.shortDescription}
        </p>
      </div>

      <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
        <Link
          href={`/industries/${industry.slug}`}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-brand-navy-900 group-hover:text-brand-blue-700 transition-colors"
        >
          <span>Explore Industry</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </Card>
  );
}
