import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Briefcase,
  Building2,
  GraduationCap,
  HeartPulse,
  Search,
  Stethoscope,
  Users,
} from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Find Your Next Healthcare Career
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Connect with top healthcare employers and discover opportunities that match your skills and aspirations.
          </p>
          
          <div className="max-w-2xl mx-auto flex gap-2 mb-12">
            <Input
              placeholder="Job title or keyword"
              className="h-12"
            />
            <Button size="lg" className="min-w-[120px]">
              <Search className="mr-2 h-4 w-4" /> Search
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span>Popular searches:</span>
            <Link href="/jobs/registered-nurse" className="hover:text-primary">Registered Nurse</Link>
            <Link href="/jobs/physician" className="hover:text-primary">Physician</Link>
            <Link href="/jobs/nurse-practitioner" className="hover:text-primary">Nurse Practitioner</Link>
            <Link href="/jobs/medical-assistant" className="hover:text-primary">Medical Assistant</Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Browse by Category
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Stethoscope className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Nursing</h3>
                    <p className="text-sm text-muted-foreground">1,234 open positions</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <HeartPulse className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Medical Practice</h3>
                    <p className="text-sm text-muted-foreground">856 open positions</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Allied Health</h3>
                    <p className="text-sm text-muted-foreground">567 open positions</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-4">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold mb-2">10K+</div>
              <div className="text-sm text-muted-foreground">Active Jobs</div>
            </div>
            
            <div>
              <div className="flex justify-center mb-4">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold mb-2">5K+</div>
              <div className="text-sm text-muted-foreground">Companies</div>
            </div>
            
            <div>
              <div className="flex justify-center mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold mb-2">2M+</div>
              <div className="text-sm text-muted-foreground">Job Seekers</div>
            </div>
            
            <div>
              <div className="flex justify-center mb-4">
                <HeartPulse className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold mb-2">50K+</div>
              <div className="text-sm text-muted-foreground">Placements Made</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Find Your Next Healthcare Opportunity?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of healthcare professionals who have found their perfect role through MedRecruit
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/register">Create Account</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/jobs">Browse Jobs</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}