import React from "react";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { BlogArticle } from "@/lib/constants";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

interface BlogCardProps {
  article: BlogArticle;
}

export function BlogCard({ article }: BlogCardProps) {
  return (
    <Card
      variant="interactive"
      padding="lg"
      className="flex flex-col justify-between group bg-white border-slate-200 hover:border-slate-300"
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <Badge variant="blue" size="sm">
            {article.category}
          </Badge>

          <span className="text-[11px] font-mono text-slate-400">
            {article.readTime}
          </span>
        </div>

        <h3 className="text-xl font-semibold text-brand-navy-900 group-hover:text-brand-blue-700 transition-colors tracking-tight line-clamp-2">
          {article.title}
        </h3>

        <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-3">
          {article.summary}
        </p>

        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-4 text-xs text-slate-500 font-medium">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            {article.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            {article.readTime}
          </span>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100">
        <Link
          href={`/blog/${article.slug}`}
          className="inline-flex items-center text-xs font-semibold tracking-wider uppercase text-brand-navy-900 group-hover:text-brand-blue-700 transition-colors"
        >
          Read Methodology Briefing
          <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </Card>
  );
}
