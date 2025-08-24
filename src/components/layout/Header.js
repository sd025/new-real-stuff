'use client'

import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { setScrollY } from '@/store/slices/uiSlice'
import { 
  Search, 
  ShoppingCart, 
  User, 
  Menu, 
  X,
  Heart,
  Pill,
  Shield,
  Activity
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

const Header = () => {
  const dispatch = useAppDispatch()
  const { isScrolled, isMobileMenuOpen } = useAppSelector(state => state.ui)
  const { itemCount } = useAppSelector(state => state.cart)
  const { isAuthenticated } = useAppSelector(state => state.auth)

  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      dispatch(setScrollY(window.scrollY))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [dispatch])

  const categories = [
    {
      name: 'Diabetes Management',
      icon: <Activity className="w-4 h-4" />,
      items: ['Metformin', 'Repaglinide', 'Vildagliptin', 'Glimepiride']
    },
    {
      name: 'Cardiovascular Health',
      icon: <Heart className="w-4 h-4" />,
      items: ['Rosuvastatin', 'Telmisartan', 'Amlodipine']
    },
    {
      name: 'Bone & Joint Health',
      icon: <Shield className="w-4 h-4" />,
      items: ['Calcium Supplements', 'Vitamin D3', 'Osteo Supplements']
    },
    {
      name: 'Digestive Health',
      icon: <Pill className="w-4 h-4" />,
      items: ['Pantoprazole', 'Domperidone', 'Liver Tonic']
    },
    {
      name: 'Wellness & Supplements',
      icon: <Activity className="w-4 h-4" />,
      items: ['Protein Powder', 'Vitamins', 'Herbal Supplements']
    }
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm text-gray-600 border-b border-gray-100">
          <div className="flex items-center space-x-4">
            <span>📞 +91 123-456-7890</span>
            <span>📧 info@aanavhealthcare.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="bg-wellness-100 text-wellness-700">
              🏥 Licensed Pharmacy
            </Badge>
            <Badge variant="secondary" className="bg-primary-100 text-primary-700">
              🚚 Free Delivery
            </Badge>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900">Aanav Healthcare</h1>
              <p className="text-xs text-gray-500">Your Health, Our Priority</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList>
                {categories.map((category) => (
                  <NavigationMenuItem key={category.name}>
                    <NavigationMenuTrigger className="flex items-center space-x-1">
                      {category.icon}
                      <span>{category.name}</span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[400px] gap-3 p-4">
                        <div className="grid grid-cols-2 gap-2">
                          {category.items.map((item) => (
                            <NavigationMenuLink
                              key={item}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{item}</div>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search medicines, supplements..."
                className="pl-10 bg-gray-50 border-gray-200 focus:bg-white"
              />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2">
            {/* Search Button (Mobile) */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="w-4 h-4" />
            </Button>

            {/* User Account */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <User className="w-4 h-4" />
                  <span className="hidden sm:ml-2 sm:block">Account</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {isAuthenticated ? (
                  <>
                    <DropdownMenuItem>My Profile</DropdownMenuItem>
                    <DropdownMenuItem>My Orders</DropdownMenuItem>
                    <DropdownMenuItem>Prescriptions</DropdownMenuItem>
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem>Login</DropdownMenuItem>
                    <DropdownMenuItem>Register</DropdownMenuItem>
                    <DropdownMenuItem>Guest Checkout</DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Cart */}
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="w-4 h-4" />
              {itemCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                  {itemCount}
                </Badge>
              )}
              <span className="hidden sm:ml-2 sm:block">Cart</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
            >
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="md:hidden pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search medicines, supplements..."
                className="pl-10 bg-gray-50 border-gray-200 focus:bg-white"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
