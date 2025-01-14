import { ProductGrid } from "@/components/product-grid"
import { ProductFilters } from "@/components/product-filters"

export default function MarketplacePage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold">T-Shirt Collection</h1>
        <p className="mt-2 text-muted-foreground">
          Discover our diverse range of t-shirts. From casual basics to unique graphic designs, 
          we offer high-quality t-shirts for every style and occasion.
        </p>
        <p className="mt-2 text-muted-foreground italic text-sm">
          *Special discounts available for bulk orders. Contact us for wholesale pricing.
        </p>
        
        <div className="mt-8 lg:grid lg:grid-cols-4 lg:gap-x-8">
          <ProductGrid />
          <ProductFilters />
        </div>
      </div>
    </div>
  )
}