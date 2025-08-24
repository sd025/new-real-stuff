'use client'

import { useEffect } from 'react'
import { useAppDispatch } from '@/hooks/useRedux'
import { setProducts, setCategories } from '@/store/slices/productSlice'
import Header from '@/components/layout/Header'
import HeroSection from '@/components/hero/HeroSection'

export default function Home() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    // Import and set mock data
    import('@/data/products').then(({ products, categories }) => {
      dispatch(setProducts(products))
      dispatch(setCategories(categories))
    })
  }, [dispatch])

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      
      {/* Status Section */}
      <section className="py-8 bg-neutral-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-neutral-500">
            🚀 New healthcare-focused design implemented! More components coming soon.
          </p>
        </div>
      </section>
    </main>
  )
}
