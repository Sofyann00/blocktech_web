import { ProductGrid } from "@/components/product-grid"
import { ProductFilters } from "@/components/product-filters"

export default function MarketplacePage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold">Adidas Collection</h1>
        <p className="mt-2 text-muted-foreground">
          Explore our authentic Adidas products. From iconic sneakers to sportswear, we offer wholesale prices for bulk orders.
        </p>
        <p className="mt-2 text-muted-foreground italic text-sm">
          *Bulk order discounts available. Contact us for wholesale pricing.
        </p>
        
        <div className="mt-8 lg:grid lg:grid-cols-4 lg:gap-x-8">
          <ProductGrid />
          <ProductFilters />
        </div>
      </div>
    </div>
  )
}