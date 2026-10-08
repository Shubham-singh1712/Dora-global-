import React from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { IndustryItem } from "@/lib/constants";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";

interface IndustryCardProps {
  industry: IndustryItem;
}

export function IndustryCard({ industry }: IndustryCardProps) {
  return (
    <Card
      variant="interactive"
      padding="lg"
      className="flex flex-col justify-between border-slate-200/90 group bg-white"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <Badge variant="neutral" size="sm">
            {industry.focus}
          </Badge>
          <ShieldCheck className="w-4 h-4 text-slate-400 group-hover:text-brand-blue-600 transition-colors" />
        </div>

        <h3 className="text-xl font-semibold text-brand-navy-900 tracking-tight group-hover:text-brand-blue-700 transition-colors">
          {industry.title}
        </h3>

        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
          {industry.description}
        </p>

        <div className="mt-6 pt-5 border-t border-slate-100">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
            Sector Coverage
          </p>
          <div className="flex flex-wrap gap-1.5">
            {industry.keyAreas.map((area, idx) => (
              <span
                key={idx}
                className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-none border border-slate-200/60 font-medium"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-slate-100">
        <Link
          href={`/contact?industry=${encodeURIComponent(industry.title)}`}
          className="inline-flex items-center text-xs font-semibold tracking-wider uppercase text-brand-navy-900 hover:text-brand-blue-700 transition-colors"
        >
          Inquire for {industry.title}
          <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </Card>
  );
}
