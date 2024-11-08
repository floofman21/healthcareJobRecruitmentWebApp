import Link from "next/link";
import { Stethoscope } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Stethoscope className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">MedRecruit</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Connecting healthcare professionals with their dream careers.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">For Job Seekers</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/jobs">Browse Jobs</Link></li>
              <li><Link href="/profile">Create Profile</Link></li>
              <li><Link href="/resources">Career Resources</Link></li>
              <li><Link href="/saved">Saved Jobs</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">For Employers</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/post-job">Post a Job</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/employers">Employer Resources</Link></li>
              <li><Link href="/contact">Contact Sales</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MedRecruit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}