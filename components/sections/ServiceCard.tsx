import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ServiceItem } from "@/lib/constants";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";

interface ServiceCardProps {
  service: ServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card
      variant="interactive"
      padding="lg"
      className="flex flex-col justify-between group hover:border-brand-navy-400/50 bg-white"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <Badge variant="blue" size="sm">
            {service.category}
          </Badge>
          <span className="text-[10px] text-slate-600 font-mono tracking-wider border border-slate-300 px-1.5 py-0.5 bg-slate-50">
            REF-{service.id.slice(0, 3).toUpperCase()}
          </span>
        </div>

        <h3 className="text-xl font-semibold text-brand-navy-900 group-hover:text-brand-blue-700 transition-colors tracking-tight">
          {service.title}
        </h3>

        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
          {service.description}
        </p>

        <div className="mt-6 pt-5 border-t border-slate-100">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
            Core Scope & Deliverables
          </p>
          <ul className="space-y-2.5">
            {service.deliverables.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start text-xs text-slate-700 font-medium"
              >
                <CheckCircle2 className="w-4 h-4 text-brand-blue-600 mr-2 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
        <Link
          href={`/contact?service=${encodeURIComponent(service.title)}`}
          className="inline-flex items-center text-xs font-mono tracking-wider uppercase text-brand-navy-900 border border-brand-navy-900 px-4 py-2 hover:bg-brand-navy-900 hover:text-white transition-all w-full justify-center group/btn"
        >
          Consult Practice Team
          <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </Card>
  );
}
