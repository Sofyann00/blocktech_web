import Link from "next/link";
import { Cpu } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-x-2">
              <img 
                src="/app_icon.png" 
                alt="SneakerSpot Logo"
                width={32}
                height={32}
              />
              <span className="text-xl font-bold">SneakerSpot</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Your premier destination for authentic Adidas footwear. Discover the latest 
              collections, limited editions, and classic favorites all in one place.
            </p>
          </div>

          {/* Solutions -> Products */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6">Products</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/running"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Running Shoes
                </Link>
              </li>
              <li>
                <Link
                  href="/lifestyle"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Lifestyle Sneakers
                </Link>
              </li>
              <li>
                <Link
                  href="/sports"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Sports Collection
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/size-guide"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Size Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Shipping Info
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground">
                <p className="font-medium text-foreground mb-2">Contact Us</p>
                <div className="space-y-2">
                  <p>
                    <a
                      href="mailto:info@sneakerspot.com"
                      className="hover:text-foreground transition-colors"
                    >
                      info@sneakerspot.com
                    </a>
                  </p>
                  <p>
                    <a
                      href="tel:+6281234567890"
                      className="hover:text-foreground transition-colors"
                    >
                      (021) 1234567
                    </a>
                  </p>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                <p className="font-medium text-foreground mb-2">Store Location</p>
                <p className="leading-relaxed">
                  Grand Indonesia Mall<br />
                  Level 1 Unit A1-15<br />
                  Jl. M.H. Thamrin No.1<br />
                  Jakarta Pusat
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} PT SOLUSINDO INTEGRA TEKNOLOGI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
