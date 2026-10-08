import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-8xl md:text-9xl font-bold text-slate-200 block mb-6">
            404
          </span>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-navy-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-base text-slate-600 leading-relaxed mb-10 max-w-md mx-auto">
            The page you are looking for may have been moved, removed, or does not exist.
            Please check the URL or navigate back to the homepage.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Return Home
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
