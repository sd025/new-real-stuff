'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Shield, 
  Truck, 
  Clock, 
  Star,
  ArrowRight,
  Heart,
  Pill,
  Activity
} from 'lucide-react'

const HeroSection = () => {
  const trustIndicators = [
    {
      icon: <Shield className="w-5 h-5" />,
      text: "Licensed Pharmacy",
      description: "Government approved"
    },
    {
      icon: <Truck className="w-5 h-5" />,
      text: "Free Delivery",
      description: "On orders above ₹500"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      text: "24/7 Support",
      description: "Expert consultation"
    },
    {
      icon: <Star className="w-5 h-5" />,
      text: "4.8/5 Rating",
      description: "10,000+ happy customers"
    }
  ]

  const categories = [
    { name: "Diabetes Management", icon: <Activity className="w-6 h-6" />, color: "bg-wellness-500" },
    { name: "Heart Health", icon: <Heart className="w-6 h-6" />, color: "bg-primary-500" },
    { name: "Bone & Joint", icon: <Shield className="w-6 h-6" />, color: "bg-secondary-500" },
    { name: "Digestive Health", icon: <Pill className="w-6 h-6" />, color: "bg-medical-500" }
  ]

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-teal-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-gentle"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-wellness-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-gentle" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-primary-100 text-primary-700 border-primary-200">
                🏥 Licensed Pharmacy
              </Badge>
              <Badge className="bg-wellness-100 text-wellness-700 border-wellness-200">
                💊 1000+ Products
              </Badge>
              <Badge className="bg-secondary-100 text-secondary-700 border-secondary-200">
                🚚 Free Delivery
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Your Health,
                <span className="text-primary-600 block">Our Priority</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                Trusted healthcare products delivered to your doorstep. From prescription medications to wellness supplements, we're here for your health journey.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 text-lg">
                Shop Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-600 text-primary-600 hover:bg-primary-50 px-8 py-4 text-lg">
                Upload Prescription
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              {trustIndicators.map((indicator, index) => (
                <motion.div
                  key={indicator.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-100"
                >
                  <div className="flex justify-center mb-2 text-primary-600">
                    {indicator.icon}
                  </div>
                  <div className="text-sm font-semibold text-gray-900">{indicator.text}</div>
                  <div className="text-xs text-gray-500">{indicator.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Category Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Popular Categories
              </h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                    <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {category.icon}
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{category.name}</h4>
                    <p className="text-sm text-gray-600">Browse products</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Featured Product Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl p-6 text-white"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Featured Product</h4>
                  <p className="text-primary-100">VITZECAL NEW - Complete Bone Health</p>
                </div>
                <Button variant="secondary" size="sm" className="bg-white text-primary-600 hover:bg-gray-100">
                  View Details
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
