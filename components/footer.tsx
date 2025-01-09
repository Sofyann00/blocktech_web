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
                alt="BlockTech Logo"
                width={32}
                height={32}
              />
              <span className="text-xl font-bold">BlockTech</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Empowering businesses with cutting-edge GPU solutions and enterprise-grade 
              mini servers. Your trusted partner in building scalable computing infrastructure.
            </p>
          </div>

          {/* Solutions */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6">Solutions</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/enterprise"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Enterprise Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/marketplace"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  GPU Marketplace
                </Link>
              </li>
              <li>
                <Link
                  href="/consulting"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Technical Consulting
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
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
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
                      href="mailto:admin@blocktech.com"
                      className="hover:text-foreground transition-colors"
                    >
                      admin@blocktech.com
                    </a>
                  </p>
                  <p>
                    <a
                      href="tel:+6281572136072"
                      className="hover:text-foreground transition-colors"
                    >
                      (021) 50111528
                    </a>
                  </p>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                <p className="font-medium text-foreground mb-2">Office</p>
                <p className="leading-relaxed">
                  Komplek Perkantoran Duta Merlin Blok F13,<br />
                  Jalan Gajah Mada, Petojo Utara,<br />
                  Gambir, Jakarta Pusat,<br />
                  DKI Jakarta
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} PT Lentera Teknologi System. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
