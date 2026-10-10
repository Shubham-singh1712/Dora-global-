import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Search,
  Users,
  BarChart3,
  ShieldCheck,
  Languages,
  Headphones,
  FileText,
  Binary,
  Globe,
} from "lucide-react";
import { ServiceDetail } from "@/lib/data/services";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

interface ServiceCardProps {
  service: ServiceDetail;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const getIcon = (slug: string) => {
    switch (slug) {
      case "primary-research":
        return <Search className="w-6 h-6 text-brand-blue-700" />;
      case "qualitative-research":
        return <Users className="w-6 h-6 text-brand-blue-700" />;
      case "quantitative-research":
        return <BarChart3 className="w-6 h-6 text-brand-blue-700" />;
      case "translation":
        return <Languages className="w-6 h-6 text-brand-blue-700" />;
      case "on-site-interpretation":
        return <Users className="w-6 h-6 text-brand-blue-700" />;
      case "remote-interpretation":
        return <Headphones className="w-6 h-6 text-brand-blue-700" />;
      case "transcription":
        return <FileText className="w-6 h-6 text-brand-blue-700" />;
      case "in-language-coding":
        return <Binary className="w-6 h-6 text-brand-blue-700" />;
      case "survey-localization":
        return <Globe className="w-6 h-6 text-brand-blue-700" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-brand-blue-700" />;
    }
  };

  return (
    <Card variant="interactive" className="flex flex-col justify-between h-full p-8 group border-slate-200">
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-lg bg-brand-blue-50 flex items-center justify-center group-hover:bg-brand-blue-100 transition-colors">
            {getIcon(service.slug)}
          </div>
          <Badge variant="dark" size="sm">
            {service.heroBadge}
          </Badge>
        </div>

        <h3 className="text-xl font-bold text-brand-navy-900 mb-3 group-hover:text-brand-blue-700 transition-colors">
          {service.title}
        </h3>

        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          {service.shortDescription}
        </p>
      </div>

      <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-brand-navy-900 group-hover:text-brand-blue-700 transition-colors"
        >
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </Card>
  );
}
