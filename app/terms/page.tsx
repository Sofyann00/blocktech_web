import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - PT Rantai Angka Teknologi',
  description: 'Terms of Service and conditions for using blocktech services',
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
                By accessing and using the services provided by PT Rantai Angka Teknologi (hereinafter referred to as &quot;blocktech&quot;), you accept and agree to be bound by the terms and provisions of this agreement.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                2. Products and Services
              </h2>
              <p className="text-muted-foreground">
                blocktech provides high-performance computing hardware, including but not limited to GPUs and mini servers. All product specifications and prices are subject to change without prior notice.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                3. Warranty and Returns
              </h2>
              <p className="text-muted-foreground">
                All products come with manufacturer warranty. Customers must inspect products upon delivery and report any defects within 7 days. Returns are subject to our return policy and must be in original condition with complete packaging.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                4. Privacy and Data Protection
              </h2>
              <p className="text-muted-foreground">
                We collect and process personal data in accordance with Indonesian data protection laws. For more information, please refer to our Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                5. Limitation of Liability
              </h2>
              <p className="text-muted-foreground">
                PT Rantai Angka Teknologi shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
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
                  <p>PT Rantai Angka Teknologi</p>
                  <p>Komplek Perkantoran Duta Merlin Blok F13</p>
                  <p>Jalan Gajah Mada, Petojo Utara</p>
                  <p>Gambir, Jakarta Pusat</p>
                  <p>DKI Jakarta, Indonesia</p>
                  <p>Email: admin@blocktech.com</p>
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