"use client";

import { MenuIcon, Search, ShoppingCart, User, Phone, Shield, Truck } from "lucide-react";
import { useAppSelector } from '@/hooks/useRedux';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const cartItems = useAppSelector((state: any) => state.cart.items);
  
  const productCategories = [
    {
      title: "Diabetes Management",
      items: [
        { title: "Metformin Products", href: "/category/diabetes/metformin" },
        { title: "DPP-4 Inhibitors", href: "/category/diabetes/dpp4" },
        { title: "Sulfonylureas", href: "/category/diabetes/sulfonylureas" },
      ]
    },
    {
      title: "Cardiovascular Health",
      items: [
        { title: "Blood Pressure", href: "/category/cardio/bp" },
        { title: "Cholesterol", href: "/category/cardio/cholesterol" },
        { title: "Heart Health", href: "/category/cardio/heart" },
      ]
    },
    {
      title: "Bone & Joint Health",
      items: [
        { title: "Calcium Supplements", href: "/category/bone/calcium" },
        { title: "Vitamin D", href: "/category/bone/vitamin-d" },
        { title: "Joint Support", href: "/category/bone/joint" },
      ]
    },
    {
      title: "Respiratory & Cough",
      items: [
        { title: "Cough Syrups", href: "/category/respiratory/cough" },
        { title: "Asthma Support", href: "/category/respiratory/asthma" },
        { title: "Allergy Relief", href: "/category/respiratory/allergy" },
      ]
    },
    {
      title: "Digestive Health",
      items: [
        { title: "Acid Reflux", href: "/category/digestive/acid-reflux" },
        { title: "Digestive Enzymes", href: "/category/digestive/enzymes" },
        { title: "Probiotics", href: "/category/digestive/probiotics" },
      ]
    },
    {
      title: "Wellness & Supplements",
      items: [
        { title: "Vitamins", href: "/category/wellness/vitamins" },
        { title: "Minerals", href: "/category/wellness/minerals" },
        { title: "Protein Powders", href: "/category/wellness/protein" },
      ]
    }
  ];

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
      <section className="py-4 bg-white border-b border-gray-200 relative z-50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <span className="text-lg font-semibold tracking-tighter text-gray-900">
                  Aanav Healthcare
                </span>
                <p className="text-xs text-gray-500">Your Health, Our Priority</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:block relative z-50">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-primary-600">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="z-50">
                    <div className="grid w-[800px] grid-cols-3 gap-4 p-6 bg-white shadow-lg border border-gray-200 rounded-lg">
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
                  <NavigationMenuLink
                    href="/about"
                    className={navigationMenuTriggerStyle()}
                  >
                    About Us
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/health-guides"
                    className={navigationMenuTriggerStyle()}
                  >
                    Health Guides
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/contact"
                    className={navigationMenuTriggerStyle()}
                  >
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

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
            <div className="hidden items-center gap-4 lg:flex">
              <Button variant="ghost" size="sm">
                <User className="w-4 h-4 mr-2" />
                Account
              </Button>
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="w-4 h-4" />
                {cartItems.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {cartItems.length}
                  </Badge>
                )}
              </Button>
            </div>
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="outline" size="icon">
                  <MenuIcon className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="max-h-screen overflow-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a href="/" className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">A</span>
                      </div>
                      <span className="text-lg font-semibold tracking-tighter text-gray-900">
                        Aanav Healthcare
                      </span>
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col p-4 space-y-4">
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
                  <Accordion type="single" collapsible className="mt-4 mb-2">
                    <AccordionItem value="products" className="border-none">
                      <AccordionTrigger className="text-base hover:no-underline">
                        Products
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
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
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <div className="flex flex-col gap-4">
                    <a href="/about" className="font-medium text-gray-700 hover:text-primary-600">
                      About Us
                    </a>
                    <a href="/health-guides" className="font-medium text-gray-700 hover:text-primary-600">
                      Health Guides
                    </a>
                    <a href="/contact" className="font-medium text-gray-700 hover:text-primary-600">
                      Contact
                    </a>
                  </div>

                  <div className="pt-4 border-t border-gray-200 space-y-4">
                    <Button variant="ghost" className="w-full justify-start">
                      <User className="w-4 h-4 mr-2" />
                      Account
                    </Button>
                    <Button variant="ghost" className="w-full justify-start relative">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Cart
                      {cartItems.length > 0 && (
                        <Badge className="ml-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                          {cartItems.length}
                        </Badge>
                      )}
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </section>
    </>
  );
};

export { Navbar };
