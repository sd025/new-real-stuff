'use client'

import { useState, useEffect } from 'react'
import { useAppSelector } from '@/hooks/useRedux'
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { 
  Search, 
  ShoppingCart, 
  User, 
  Menu, 
  X,
  Phone,
  Shield,
  Truck
} from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const cartItems = useAppSelector(state => state.cart.items)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const productCategories = [
    {
      title: 'Diabetes Management',
      items: [
        { title: 'Metformin Products', href: '/category/diabetes/metformin' },
        { title: 'DPP-4 Inhibitors', href: '/category/diabetes/dpp4' },
        { title: 'Sulfonylureas', href: '/category/diabetes/sulfonylureas' },
      ]
    },
    {
      title: 'Cardiovascular Health',
      items: [
        { title: 'Blood Pressure', href: '/category/cardio/bp' },
        { title: 'Cholesterol', href: '/category/cardio/cholesterol' },
        { title: 'Heart Health', href: '/category/cardio/heart' },
      ]
    },
    {
      title: 'Bone & Joint Health',
      items: [
        { title: 'Calcium Supplements', href: '/category/bone/calcium' },
        { title: 'Vitamin D', href: '/category/bone/vitamin-d' },
        { title: 'Joint Support', href: '/category/bone/joint' },
      ]
    },
    {
      title: 'Respiratory & Cough',
      items: [
        { title: 'Cough Syrups', href: '/category/respiratory/cough' },
        { title: 'Asthma Support', href: '/category/respiratory/asthma' },
        { title: 'Allergy Relief', href: '/category/respiratory/allergy' },
      ]
    },
    {
      title: 'Digestive Health',
      items: [
        { title: 'Acid Reflux', href: '/category/digestive/acid-reflux' },
        { title: 'Digestive Enzymes', href: '/category/digestive/enzymes' },
        { title: 'Probiotics', href: '/category/digestive/probiotics' },
      ]
    },
    {
      title: 'Wellness & Supplements',
      items: [
        { title: 'Vitamins', href: '/category/wellness/vitamins' },
        { title: 'Minerals', href: '/category/wellness/minerals' },
        { title: 'Protein Powders', href: '/category/wellness/protein' },
      ]
    }
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>24/7 Support: +91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck className="w-4 h-4" />
                <span>Free Delivery on Orders Above ₹500</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>100% Authentic Products</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-white'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Aanav Healthcare</h1>
                <p className="text-xs text-gray-500">Your Health, Our Priority</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-gray-700 hover:text-primary-600">
                      Products
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[800px] grid-cols-3 gap-4 p-6">
                        {productCategories.map((category) => (
                          <div key={category.title} className="space-y-2">
                            <h3 className="font-semibold text-gray-900">{category.title}</h3>
                            <ul className="space-y-1">
                              {category.items.map((item) => (
                                <li key={item.title}>
                                  <NavigationMenuLink asChild>
                                    <a
                                      href={item.href}
                                      className="block text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded px-2 py-1 transition-colors"
                                    >
                                      {item.title}
                                    </a>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <a href="/about" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                        About Us
                      </a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <a href="/health-guides" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                        Health Guides
                      </a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <a href="/contact" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                        Contact
                      </a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search for medicines, supplements..."
                  className="pl-10 bg-gray-50 border-gray-200 focus:bg-white"
                />
              </div>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              {/* User Account */}
              <Button variant="ghost" size="sm" className="hidden md:flex">
                <User className="w-4 h-4 mr-2" />
                Account
              </Button>

              {/* Cart */}
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="w-4 h-4" />
                {cartItems.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {cartItems.length}
                  </Badge>
                )}
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  className="pl-10 bg-gray-50 border-gray-200"
                />
              </div>

              {/* Mobile Navigation */}
              <div className="space-y-2">
                <div className="font-semibold text-gray-900 mb-2">Products</div>
                {productCategories.map((category) => (
                  <div key={category.title} className="ml-4">
                    <div className="font-medium text-gray-700 mb-1">{category.title}</div>
                    <ul className="ml-4 space-y-1">
                      {category.items.map((item) => (
                        <li key={item.title}>
                          <a
                            href={item.href}
                            className="text-sm text-gray-600 hover:text-primary-600 block py-1"
                          >
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <a href="/about" className="block text-gray-700 hover:text-primary-600 py-2">About Us</a>
                <a href="/health-guides" className="block text-gray-700 hover:text-primary-600 py-2">Health Guides</a>
                <a href="/contact" className="block text-gray-700 hover:text-primary-600 py-2">Contact</a>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <Button variant="ghost" className="w-full justify-start">
                  <User className="w-4 h-4 mr-2" />
                  Account
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
