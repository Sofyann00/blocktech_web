import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - PT SOLUSINDO INTEGRA TEKNOLOGI',
  description: 'Terms of Service and conditions for using SneakerSpot services',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen py-12 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card p-8 rounded-lg shadow">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-muted-foreground italic mb-8">
            Last Updated: {new Date().toLocaleDateString()}
          </p>

          <section className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                1. Agreement to Terms
              </h2>
              <p className="text-muted-foreground">
                By accessing and using the services provided by SneakerSpot (hereinafter referred to as &quot;we&quot; or &quot;our&quot;), you accept and agree to be bound by the terms and provisions of this agreement.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                2. Products and Services
              </h2>
              <p className="text-muted-foreground">
                SneakerSpot is a premium sneaker reselling platform. We provide authentic, high-quality sneakers from various brands. All product listings, prices, and availability are subject to change without prior notice. We cannot guarantee the availability of specific models or sizes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                3. Authenticity and Returns
              </h2>
              <p className="text-muted-foreground">
                All sneakers sold through our platform are guaranteed authentic. Each pair undergoes thorough authentication before shipping. Customers must inspect products upon delivery and report any issues within 48 hours. Returns are only accepted for authenticity issues or if the item received differs significantly from the description. All returns must be unworn, in original condition with complete packaging.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                4. Privacy and Data Protection
              </h2>
              <p className="text-muted-foreground">
                We collect and process personal data in accordance with applicable privacy laws. This includes shipping information, payment details, and shopping preferences. For more information, please refer to our Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                5. Limitation of Liability
              </h2>
              <p className="text-muted-foreground">
                SneakerSpot shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from market price fluctuations, delayed shipments, or circumstances beyond our reasonable control.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                6. Governing Law
              </h2>
              <p className="text-muted-foreground">
                These terms are governed by the laws of the Republic of Indonesia. Any disputes shall be subject to the exclusive jurisdiction of the courts in Jakarta, Indonesia.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                7. Contact Information
              </h2>
              <div className="text-muted-foreground">
                <p>For any questions about these Terms of Service, please contact us at:</p>
                <div className="mt-2">
                  <p>SneakerSpot</p>
                  <p>Komplek Perkantoran Duta Merlin Blok F13</p>
                  <p>Jalan Gajah Mada, Petojo Utara</p>
                  <p>Gambir, Jakarta Pusat</p>
                  <p>DKI Jakarta, Indonesia</p>
                  <p>Email: support@sneakerspot.com</p>
                  <p>Phone: (021) 50111528</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
} 