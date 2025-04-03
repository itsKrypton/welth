import HeroSection from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { featuresData, howItWorksData, statsData, testimonialsData } from "@/data/landing";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-40">
      <HeroSection />

      {/* Stats Data */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((statsData, index) => (
              <div className="text-center" key={index}>
                <div className="text-4xl font-bold text-blue-600 mb-2"> {statsData.value} </div>
                <div className="text-gray-600"> {statsData.label} </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Data */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Everything you need to manage your finances</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <Card key={index} className="p-6">
                <CardContent className="space-y-4 pt-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold"> {feature.title} </h3>
                  <p className="text-gray-600"> {feature.description} </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Data */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How it Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorksData.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6"> {step.icon} </div>
                <h3 className="text-xl font-semibold mb-4"> {step.title} </h3>
                <p className="text-gray-600"> {step.description} </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Data */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What our users say</h2>
          <div className="px-10">
            <Carousel>
              <CarouselContent>
                {testimonialsData.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <div className="md:flex text-center md:text-left">
                      <div className="flex justify-center mb-4 md:mb-0">
                        <Image src={testimonial.image} alt={testimonial.name} width={200} height={200} className="rounded-full" />
                      </div>
                      <div className="flex flex-col justify-between px-8">
                        <p className="text-xl md:text-2xl text-gray-500"> "{testimonial.quote}" </p>
                        <div className="mt-4">
                          <div className="font-semibold"> {testimonial.name} </div>
                          <div className="text-sm text-gray-600"> {testimonial.role} </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4"> Ready to take control over your finances? </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto"> Join thousands of users who are already managing their finances smarter with Welth </p>
          <Link href="/dashboard">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 animate-bounce"> Start Free Trial </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
