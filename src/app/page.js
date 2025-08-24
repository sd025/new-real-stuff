'use client'

import { useEffect } from 'react'
import { useAppDispatch } from '@/hooks/useRedux'
import { setProducts, setCategories } from '@/store/slices/productSlice'

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
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center">
            {/* Logo Placeholder */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-500 rounded-full mb-4">
                <span className="text-white text-2xl font-bold">A</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-neutral-900 mb-6">
                Aanav Healthcare
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-neutral-600 mb-8 max-w-3xl mx-auto">
              Premium healthcare and wellness products designed to support your journey to optimal health
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Shop Products
              </button>
              <button className="border-2 border-primary-500 text-primary-500 hover:bg-primary-50 px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-gentle"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-wellness-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-gentle" style={{ animationDelay: '2s' }}></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4">
              Why Choose Aanav Healthcare?
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We're committed to providing the highest quality healthcare products backed by science and delivered with care.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-500 text-2xl">🔬</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Scientifically Formulated</h3>
              <p className="text-neutral-600">All our products are backed by scientific research and formulated for optimal effectiveness.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-secondary-500 text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Premium Quality</h3>
              <p className="text-neutral-600">We source only the finest ingredients and maintain the highest quality standards.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-wellness-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-wellness-500 text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Your Health First</h3>
              <p className="text-neutral-600">Your wellness journey is our priority. We're here to support you every step of the way.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Status Section */}
      <section className="py-8 bg-neutral-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-neutral-500">
            🚀 Foundation setup complete! Ready to build amazing features.
          </p>
        </div>
      </section>
    </main>
  )
}
