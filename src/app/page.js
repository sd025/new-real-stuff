'use client'

import { useEffect } from 'react'
import { useAppDispatch } from '@/hooks/useRedux'
import { setProducts, setCategories } from '@/store/slices/productSlice'
import { Navbar } from '@/components/navbar'
import { ImageCarouselHero } from '@/components/hero/ImageCarouselHero'
import { products, categories } from '@/data/products'
import { Carousel, Card } from '@/components/ui/apple-cards-carousel'
import { Integration9 } from '@/components/integration9'
import { Feature13 } from '@/components/feature13'
import { Team1 } from '@/components/team1'
import { Feature197 } from '@/components/feature197'
import { Logos3 } from '@/components/logos3'
import { Community2 } from '@/components/community2'
import { Feature1 } from '@/components/feature1'
import { Gallery4 } from '@/components/gallery4.js'
import { Feature51 } from '@/components/feature51'
import { Timeline3 } from '@/components/timeline3'
import { Feature74 } from '@/components/feature74'
import { Feature16 } from '@/components/feature16'
import { Stats8 } from '@/components/stats8'
import { Feature15 } from '@/components/feature15'
import { Services12 } from '@/components/services12'
import { Feature17 } from '@/components/feature17'
import { Hero45 } from '@/components/hero45'
import { Feature73 } from '@/components/feature73'
import { Feature43 } from '@/components/feature43'
import { Feature72 } from '@/components/feature72'
import { Footer2 } from '@/components/footer2'
import { DollarSign, MessagesSquare, PersonStanding, Timer, Zap, ZoomIn, GitPullRequest, SquareKanban, RadioTower, WandSparkles, Layers, BatteryCharging, HandHelping, Users } from 'lucide-react'

export default function Home() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setProducts(products))
    dispatch(setCategories(categories))
  }, [dispatch])

  const HealthcareContent = () => {
    return (
      <>
        {[...new Array(3).fill(1)].map((_, index) => {
          return (
            <div
              key={"healthcare-content" + index}
              className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
              <p
                className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-neutral-700">
                  Premium healthcare solutions backed by science and delivered with care.
                </span>{" "}
                Our products are carefully formulated to support your health journey. 
                From prescription medications to wellness supplements, we've got your health covered.
                Trust Aanav Healthcare for quality, safety, and effectiveness.
              </p>
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2070&auto=format&fit=crop"
                alt="Healthcare products"
                height="500"
                width="500"
                className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-2xl" />
            </div>
          );
        })}
      </>
    );
  };

  const healthcareCards = [
    {
      category: "Cardiovascular Health",
      title: "Heart health made simple.",
      src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop",
      content: <HealthcareContent />,
    },
    {
      category: "Diabetes Management",
      title: "Control your blood sugar naturally.",
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2070&auto=format&fit=crop",
      content: <HealthcareContent />,
    },
    {
      category: "Immunity Boosters",
      title: "Strengthen your natural defenses.",
      src: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2070&auto=format&fit=crop",
      content: <HealthcareContent />,
    },
    {
      category: "Bone & Joint Health",
      title: "Support for strong bones and joints.",
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
      content: <HealthcareContent />,
    },
    {
      category: "Digestive Wellness",
      title: "Promote healthy digestion.",
      src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop",
      content: <HealthcareContent />,
    },
    {
      category: "Mental Wellness",
      title: "Support your mental health journey.",
      src: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2070&auto=format&fit=crop",
      content: <HealthcareContent />,
    },
  ];

  const cards = healthcareCards.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 to-white">
      <Navbar />
      <ImageCarouselHero />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans mb-16">
            Get to know your health better.
          </h2>
          
          <Carousel items={cards} />
        </div>
      </section>

      <Integration9 
        title="Healthcare Integrations & Partnerships"
        data={[
          {
            id: 1,
            icon: "💊",
            title: "Pharmaceutical Partners",
            description: "Direct partnerships with leading pharmaceutical manufacturers for authentic products.",
          },
          {
            id: 2,
            icon: "👨‍⚕️",
            title: "Healthcare Providers",
            description: "Collaboration with doctors, pharmacists, and healthcare professionals.",
          },
          {
            id: 3,
            icon: "🔬",
            title: "Laboratory Services",
            description: "Integration with certified laboratories for quality testing and verification.",
          },
          {
            id: 4,
            icon: "🛡️",
            title: "Insurance Partners",
            description: "Seamless integration with health insurance providers for coverage.",
          },
          {
            id: 5,
            icon: "📱",
            title: "Telemedicine",
            description: "Virtual consultation services integrated with our platform.",
          },
          {
            id: 6,
            icon: "🚚",
            title: "Delivery Partners",
            description: "Fast and secure delivery through trusted logistics partners.",
          },
          {
            id: 7,
            icon: "💳",
            title: "Payment Gateways",
            description: "Secure payment processing with multiple payment options.",
          },
          {
            id: 8,
            icon: "📱",
            title: "Health Apps",
            description: "Integration with popular health and wellness applications.",
          },
        ]}
      />

      <Feature13 
        heading="Why Choose Aanav Healthcare?"
        features={[
          {
            id: "feature-1",
            title: "Premium Healthcare Products",
            subtitle: "QUALITY ASSURED",
            description:
              "We source only the finest ingredients and maintain the highest quality standards. Every product is carefully selected and verified for quality, safety, and effectiveness. Our pharmaceutical partners are leading manufacturers committed to excellence.",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2070&auto=format&fit=crop",
          },
          {
            id: "feature-2",
            title: "Expert Healthcare Support",
            subtitle: "PROFESSIONAL CARE",
            description:
              "Our team of healthcare professionals, pharmacists, and wellness experts are here to guide you on your health journey. Get personalized recommendations, expert advice, and ongoing support for all your healthcare needs.",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop",
          },
        ]}
      />

      <Team1 
        heading="Meet Our Healthcare Experts"
        description="Our diverse team of healthcare professionals brings together decades of experience in pharmaceuticals, medicine, and patient care. We're committed to providing you with the highest quality healthcare solutions."
        members={[
          {
            id: "member-1",
            name: "Dr. Rajesh Kumar",
            role: "Chief Medical Officer",
            avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec0?q=80&w=2070&auto=format&fit=crop",
          },
          {
            id: "member-2",
            name: "Dr. Priya Sharma",
            role: "Head of Pharmacy",
            avatar: "https://images.unsplash.com/photo-1594824475544-3b0b3b3b3b3b?q=80&w=2070&auto=format&fit=crop",
          },
          {
            id: "member-3",
            name: "Dr. Amit Patel",
            role: "Clinical Research Director",
            avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop",
          },
          {
            id: "member-4",
            name: "Dr. Neha Singh",
            role: "Quality Assurance Lead",
            avatar: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop",
          },
          {
            id: "member-5",
            name: "Dr. Arjun Reddy",
            role: "Patient Care Specialist",
            avatar: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2070&auto=format&fit=crop",
          },
          {
            id: "member-6",
            name: "Dr. Kavya Iyer",
            role: "Wellness Consultant",
            avatar: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2070&auto=format&fit=crop",
          },
        ]}
      />

      {/* Healthcare Services Features */}
      <Feature197 
        features={[
          {
            id: 1,
            title: "Prescription Medications",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2070&auto=format&fit=crop",
            description:
              "Access to a comprehensive range of prescription medications from leading pharmaceutical manufacturers. Our licensed pharmacists ensure accuracy and safety in every prescription filled.",
          },
          {
            id: 2,
            title: "Wellness Supplements",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop",
            description:
              "Premium quality vitamins, minerals, and herbal supplements to support your overall health and wellness. All products are tested for purity and potency.",
          },
          {
            id: 3,
            title: "Personal Care Products",
            image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2070&auto=format&fit=crop",
            description:
              "Essential personal care and hygiene products for daily wellness. From skincare to oral care, we offer trusted brands that prioritize your health and safety.",
          },
          {
            id: 4,
            title: "Medical Devices",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
            description:
              "Reliable medical devices and equipment for home healthcare. Our products meet strict quality standards and come with professional guidance for proper use.",
          },
          {
            id: 5,
            title: "Health Consultations",
            image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec0?q=80&w=2070&auto=format&fit=crop",
            description:
              "Professional health consultations and advice from our team of healthcare experts. Get personalized recommendations for your health and wellness journey.",
          },
        ]}
      />

      <Logos3 
        heading="Trusted by Leading Healthcare Partners"
        logos={[
          {
            id: "logo-1",
            description: "Pharmaceutical Partner 1",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop",
            className: "h-16 w-auto rounded-lg object-cover",
          },
          {
            id: "logo-2",
            description: "Pharmaceutical Partner 2",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2070&auto=format&fit=crop",
            className: "h-16 w-auto rounded-lg object-cover",
          },
          {
            id: "logo-3",
            description: "Pharmaceutical Partner 3",
            image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2070&auto=format&fit=crop",
            className: "h-16 w-auto rounded-lg object-cover",
          },
          {
            id: "logo-4",
            description: "Pharmaceutical Partner 4",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
            className: "h-16 w-auto rounded-lg object-cover",
          },
          {
            id: "logo-5",
            description: "Pharmaceutical Partner 5",
            image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec0?q=80&w=2070&auto=format&fit=crop",
            className: "h-16 w-auto rounded-lg object-cover",
          },
          {
            id: "logo-6",
            description: "Pharmaceutical Partner 6",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop",
            className: "h-16 w-auto rounded-lg object-cover",
          },
          {
            id: "logo-7",
            description: "Pharmaceutical Partner 7",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2070&auto=format&fit=crop",
            className: "h-16 w-auto rounded-lg object-cover",
          },
          {
            id: "logo-8",
            description: "Pharmaceutical Partner 8",
            image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2070&auto=format&fit=crop",
            className: "h-16 w-auto rounded-lg object-cover",
          },
        ]}
      />

      <Community2 />

      <Feature1 
        title="Revolutionizing Healthcare Delivery"
        description="Experience the future of healthcare with our innovative digital platform. We combine cutting-edge technology with compassionate care to deliver personalized health solutions that put you first. From prescription management to wellness tracking, we're making healthcare accessible, affordable, and effective."
        imageSrc="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop"
        imageAlt="Healthcare innovation and technology"
        buttonPrimary={{
          label: "Explore Services",
          href: "#services"
        }}
        buttonSecondary={{
          label: "Learn More",
          href: "#about"
        }}
      />

      <Feature1 
        title="Quality & Safety First"
        description="Your health and safety are our top priorities. Every product in our inventory undergoes rigorous quality testing and meets the highest industry standards. Our licensed pharmacists and healthcare professionals ensure that you receive only the best, most effective treatments for your health needs."
        imageSrc="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2070&auto=format&fit=crop"
        imageAlt="Healthcare quality and safety"
        buttonPrimary={{
          label: "Quality Standards",
          href: "#quality"
        }}
        buttonSecondary={{
          label: "Safety Protocols",
          href: "#safety"
        }}
        reverse={true}
      />

      <Gallery4 
        title="Healthcare Success Stories"
        description="Discover how our healthcare solutions are making a real difference in people's lives. These case studies showcase the positive impact of our products and services on patient outcomes and wellness journeys."
        items={[
          {
            id: "diabetes-management",
            title: "Diabetes Management Success",
            description: "How our comprehensive diabetes care program helped patients achieve better blood sugar control and improved quality of life through personalized treatment plans and continuous support.",
            href: "#diabetes-case-study",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2070&auto=format&fit=crop",
          },
          {
            id: "cardiovascular-health",
            title: "Cardiovascular Wellness Program",
            description: "Our heart health initiative resulted in significant improvements in cholesterol levels and blood pressure for participants, demonstrating the effectiveness of preventive healthcare approaches.",
            href: "#cardiovascular-case-study",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop",
          },
          {
            id: "immunity-boost",
            title: "Immunity Enhancement Results",
            description: "Patients using our immunity support products reported fewer seasonal illnesses and faster recovery times, highlighting the importance of preventive wellness strategies.",
            href: "#immunity-case-study",
            image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2070&auto=format&fit=crop",
          },
          {
            id: "bone-joint-health",
            title: "Bone & Joint Health Improvement",
            description: "Our comprehensive bone health program showed measurable improvements in bone density and joint flexibility, helping patients maintain active lifestyles as they age.",
            href: "#bone-health-case-study",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
          },
          {
            id: "mental-wellness",
            title: "Mental Wellness Support",
            description: "Through our mental health initiatives, patients experienced reduced stress levels and improved emotional well-being, demonstrating the holistic approach to healthcare.",
            href: "#mental-wellness-case-study",
            image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec0?q=80&w=2070&auto=format&fit=crop",
          },
        ]}
      />

      <Feature51 />

      <Timeline3 
        heading="Our Healthcare Journey"
        description="From humble beginnings to becoming a trusted healthcare partner, we've been committed to improving lives through innovative healthcare solutions and compassionate care."
        buttons={{
          primary: {
            text: "Join Our Mission",
            url: "#join-us"
          },
          secondary: {
            text: "Learn Our Story",
            url: "#about"
          }
        }}
        features={[
          {
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop",
            title: "Expanding Healthcare Access",
            description: "Extended our services to 15+ cities across India, making quality healthcare accessible to millions more patients."
          },
          {
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2070&auto=format&fit=crop",
            title: "Digital Healthcare Platform",
            description: "Launched our comprehensive digital healthcare platform, revolutionizing how patients access care and manage their health."
          },
          {
            image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2070&auto=format&fit=crop",
            title: "Pharmaceutical Innovation",
            description: "Introduced breakthrough pharmaceutical formulations and expanded our product portfolio to address diverse health needs."
          },
          {
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
            title: "Aanav Healthcare Founded",
            description: "Started with a vision to democratize healthcare access and provide quality pharmaceutical solutions to every Indian household."
          }
        ]}
      />

      <Feature74 />

      <Feature16 />

      <Stats8 
        heading="Healthcare Impact & Achievements"
        description="Delivering measurable results and positive health outcomes across India"
        link={{
          text: "View our annual health impact report",
          url: "#impact-report"
        }}
        stats={[
          {
            id: "stat-1",
            value: "500K+",
            label: "patients served across India",
          },
          {
            id: "stat-2",
            value: "15+",
            label: "cities with healthcare presence",
          },
          {
            id: "stat-3",
            value: "99.8%",
            label: "patient satisfaction rate",
          },
          {
            id: "stat-4",
            value: "24/7",
            label: "healthcare support availability",
          },
        ]}
      />

      {/* Healthcare Unique Features */}
      <Feature15 />

      {/* Healthcare Services Grid */}
      <Services12 />

      {/* Healthcare Core Features */}
      <Feature17 
        heading="Our Healthcare Excellence"
        subheading="Core Features"
        features={[
          {
            title: "Quality Care",
            description: "Every patient receives personalized, evidence-based care that meets the highest medical standards and best practices in healthcare delivery.",
            icon: <Timer className="size-4 md:size-6" />,
          },
          {
            title: "Medical Innovation",
            description: "We leverage cutting-edge medical technology and innovative treatment approaches to provide the most effective healthcare solutions.",
            icon: <Zap className="size-4 md:size-6" />,
          },
          {
            title: "Patient Safety",
            description: "Your safety is our top priority. We maintain strict protocols and quality assurance measures to ensure the highest level of patient care.",
            icon: <ZoomIn className="size-4 md:size-6" />,
          },
          {
            title: "Accessible Healthcare",
            description: "We break down barriers to healthcare access through telemedicine, mobile services, and community outreach programs.",
            icon: <PersonStanding className="size-4 md:size-6" />,
          },
          {
            title: "Affordable Care",
            description: "We believe quality healthcare should be accessible to everyone. Our transparent pricing and flexible payment options make care affordable.",
            icon: <DollarSign className="size-4 md:size-6" />,
          },
          {
            title: "24/7 Support",
            description: "Our healthcare professionals are available round-the-clock to provide medical guidance, emergency support, and continuous care.",
            icon: <MessagesSquare className="size-4 md:size-6" />,
          },
        ]}
      />

      <Hero45 
        badge="Aanav Healthcare"
        heading="Your Health, Our Priority"
        imageSrc="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop"
        imageAlt="Healthcare professionals providing care"
        features={[
          {
            icon: <HandHelping className="h-auto w-5" />,
            title: "Compassionate Care",
            description: "Every patient receives personalized, empathetic care from our experienced healthcare professionals.",
          },
          {
            icon: <Users className="h-auto w-5" />,
            title: "Expert Team",
            description: "Our diverse team of doctors, pharmacists, and healthcare specialists work together for your wellness.",
          },
          {
            icon: <Zap className="h-auto w-5" />,
            title: "24/7 Support",
            description: "Round-the-clock healthcare support and emergency services when you need them most.",
          },
        ]}
      />

      {/* Healthcare Advanced Features */}
      <Feature73 
        heading="Advanced Healthcare Solutions"
        description="Discover the cutting-edge healthcare technologies and services that make Aanav Healthcare the preferred choice for patients across India."
        linkUrl="#advanced-solutions"
        linkText="Explore Solutions"
        features={[
          {
            id: "feature-1",
            title: "AI-Powered Diagnostics",
            description: "Our advanced artificial intelligence systems analyze medical data with unprecedented accuracy, helping healthcare providers make faster, more informed decisions and improving patient outcomes through early detection.",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop",
          },
          {
            id: "feature-2",
            title: "Telemedicine Platform",
            description: "Access quality healthcare from anywhere with our comprehensive telemedicine platform. Connect with healthcare professionals remotely while maintaining the personal connection you deserve.",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2070&auto=format&fit=crop",
          },
          {
            id: "feature-3",
            title: "Pharmacy Integration",
            description: "Seamless integration between healthcare consultation and medication delivery. Our pharmacy services ensure you receive the right medications at the right time with proper guidance.",
            image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2070&auto=format&fit=crop",
          },
        ]}
      />

      {/* Healthcare Benefits */}
      <Feature43 
        heading="Why Choose Aanav Healthcare?"
        reasons={[
          {
            title: "Quality Care",
            description: "Every patient receives personalized, evidence-based care that meets the highest medical standards and best practices in healthcare delivery.",
            icon: <GitPullRequest className="size-6" />,
          },
          {
            title: "Expert Team",
            description: "Our diverse team of healthcare professionals brings together decades of experience in pharmaceuticals, medicine, and patient care.",
            icon: <SquareKanban className="size-6" />,
          },
          {
            title: "24/7 Support",
            description: "Round-the-clock healthcare support and emergency services when you need them most. Healthcare doesn't follow a schedule, and neither do we.",
            icon: <RadioTower className="size-6" />,
          },
          {
            title: "Medical Innovation",
            description: "We leverage cutting-edge medical technology and innovative treatment approaches to provide the most effective healthcare solutions.",
            icon: <WandSparkles className="size-6" />,
          },
          {
            title: "Proven Results",
            description: "Our track record speaks for itself - thousands of satisfied patients and measurable improvements in health outcomes across India.",
            icon: <Layers className="size-6" />,
          },
          {
            title: "Efficient Care",
            description: "Streamlined processes and optimized workflows ensure you receive the care you need quickly and efficiently, without unnecessary delays.",
            icon: <BatteryCharging className="size-6" />,
          },
        ]}
      />

      {/* Healthcare Services Grid */}
      <Feature72 
        heading="Comprehensive Healthcare Services"
        description="From primary care to specialized treatments, we offer a complete range of healthcare services designed to support your wellness journey at every stage."
        linkUrl="#services"
        linkText="View All Services"
        features={[
          {
            id: "feature-1",
            title: "Primary Care",
            description: "Comprehensive primary care services including health checkups, preventive care, and ongoing health management for individuals and families.",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop",
          },
          {
            id: "feature-2",
            title: "Specialized Treatment",
            description: "Expert care for specific health conditions with specialized medical professionals and advanced treatment protocols.",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2070&auto=format&fit=crop",
          },
          {
            id: "feature-3",
            title: "Pharmacy Services",
            description: "Full-service pharmacy with prescription management, medication counseling, and delivery services for your convenience.",
            image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2070&auto=format&fit=crop",
          },
          {
            id: "feature-4",
            title: "Wellness Programs",
            description: "Comprehensive wellness programs focusing on preventive care, lifestyle optimization, and holistic health improvement.",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
          },
        ]}
      />

      <Footer2 
        logo={{
          src: "/logo.png",
          alt: "Aanav Healthcare",
          title: "Aanav Healthcare",
          url: "/"
        }}
        tagline="Your trusted partner in healthcare and wellness."
        menuItems={[
          {
            title: "Healthcare Services",
            links: [
              { text: "Consultation", url: "#consultation" },
              { text: "Medications", url: "#medications" },
              { text: "Wellness Programs", url: "#wellness" },
              { text: "Telemedicine", url: "#telemedicine" },
              { text: "Health Monitoring", url: "#monitoring" },
              { text: "Emergency Care", url: "#emergency" },
            ],
          },
          {
            title: "Company",
            links: [
              { text: "About Us", url: "#about" },
              { text: "Our Team", url: "#team" },
              { text: "Careers", url: "#careers" },
              { text: "Contact", url: "#contact" },
              { text: "Privacy Policy", url: "#privacy" },
              { text: "Terms of Service", url: "#terms" },
            ],
          },
          {
            title: "Resources",
            links: [
              { text: "Health Blog", url: "#blog" },
              { text: "Patient Support", url: "#support" },
              { text: "Health Tips", url: "#tips" },
              { text: "FAQs", url: "#faqs" },
              { text: "Insurance", url: "#insurance" },
              { text: "Pharmacy Locator", url: "#locator" },
            ],
          },
          {
            title: "Connect",
            links: [
              { text: "Facebook", url: "#facebook" },
              { text: "Instagram", url: "#instagram" },
              { text: "LinkedIn", url: "#linkedin" },
              { text: "YouTube", url: "#youtube" },
              { text: "Twitter", url: "#twitter" },
              { text: "WhatsApp", url: "#whatsapp" },
            ],
          },
        ]}
        copyright="© 2024 Aanav Healthcare. All rights reserved."
        bottomLinks={[
          { text: "Terms and Conditions", url: "#terms" },
          { text: "Privacy Policy", url: "#privacy" },
          { text: "Cookie Policy", url: "#cookies" },
          { text: "Accessibility", url: "#accessibility" },
        ]}
      />
    </main>
  )
}
