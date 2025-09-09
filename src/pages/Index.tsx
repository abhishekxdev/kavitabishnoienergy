
import React, { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight, ChevronDown, Facebook, Instagram, Twitter, Linkedin, Settings2, Sparkles, Zap } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import HeroSection from "@/components/HeroSection";

const Index = () => {


  return (
    <div className="min-h-screen font-sans">
      <HeroSection />

      {/* Content Section */}
      <section id="about" className="py-16 md:py-32">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl lg:text-5xl">About Us</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                <video
                  className="rounded-[15px] w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="https://res.cloudinary.com/doevp9obh/video/upload/v1756925879/Drone_Shot_Animation_of_Solar_Farm_gzw6o7.mov" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-muted-foreground">
                Kavita Bishnoi Energy Pvt. Ltd. is a trusted solar panel manufacturing company committed to driving the shift towards renewable energy. With cutting-edge technology, superior quality products, and a dedication to sustainability, we empower individuals and businesses to reduce their carbon footprint while enjoying reliable and affordable power solutions.
              </p>
              <p className="text-muted-foreground">Our mission is to make clean energy accessible to everyone, providing innovative solar solutions that combine efficiency, durability, and environmental responsibility for a brighter, more sustainable future.</p>

            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section id="values" className="relative z-10 bg-white text-black py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-16">
            <div className="mb-6">
              <span className="text-black/60 text-sm font-medium tracking-wider uppercase">Our Values</span>
            </div>
            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl font-light leading-tight">
                Our Values, Our Foundation
              </h2>
            </div>
            <p className="text-black/70 text-lg max-w-2xl">
              Our values drive every solar solution—sustainability, innovation, reliability, and excellence—creating clean energy systems that power homes, businesses, and communities for generations.
            </p>
          </div>
          
          {/* Architecture Image */}
          <div className="mt-16 mb-16">
            <img 
              src="/solar.png" 
              alt="Solar panel installation and clean energy system" 
              className="w-full h-auto object-contain"
            />
          </div>
          
          {/* Values Pills */}
          <div className="flex flex-wrap gap-4 justify-center items-center mt-12">
            <div className="flex items-center gap-4 border border-black rounded-full px-8 py-4 w-64 justify-center">
              <div className="w-8 h-8 border border-black/30 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 border border-black/30 rounded-full"></div>
              </div>
              <span className="text-black/60 text-lg">Sustainable</span>
            </div>
            <div className="flex items-center gap-4 border border-black rounded-full px-8 py-4 mx-8 w-64 justify-center">
              <div className="w-8 h-8 border border-black rounded-sm flex items-center justify-center">
                <div className="w-3 h-3 bg-black"></div>
              </div>
              <span className="text-black text-lg font-medium">Efficient</span>
            </div>
            <div className="flex items-center gap-4 border border-black rounded-full px-8 py-4 w-64 justify-center">
              <div className="w-8 h-8 border border-black/30 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 border border-black/30 rounded-full"></div>
              </div>
              <span className="text-black/60 text-lg">Reliable</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-32">
        <div className="@container mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-balance text-4xl font-light lg:text-5xl">Our Solar Services</h2>
            <p className="mt-4">Comprehensive solar energy solutions designed to power your future with clean, renewable energy.</p>
          </div>
          <div className="mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 [--color-background:var(--color-muted)] [--color-card:var(--color-muted)] *:text-center md:mt-16 dark:[--color-muted:var(--color-zinc-900)]">
            <Card className="group border border-gray-200 shadow-none">
              <CardHeader className="pb-3">
                <CardDecorator>
                  <Zap
                    className="size-6"
                    aria-hidden
                  />
                </CardDecorator>

                <h3 className="mt-6 font-medium">Solar Installation</h3>
              </CardHeader>

              <CardContent>
                <p className="text-sm">Professional installation of high-efficiency solar panels for residential, commercial, and industrial properties.</p>
              </CardContent>
            </Card>

            <Card className="group border border-gray-200 shadow-none">
              <CardHeader className="pb-3">
                <CardDecorator>
                  <Settings2
                    className="size-6"
                    aria-hidden
                  />
                </CardDecorator>

                <h3 className="mt-6 font-medium">System Maintenance</h3>
              </CardHeader>

              <CardContent>
                <p className="mt-3 text-sm">Regular maintenance and monitoring services to ensure optimal performance and longevity of your solar system.</p>
              </CardContent>
            </Card>

            <Card className="group border border-gray-200 shadow-none">
              <CardHeader className="pb-3">
                <CardDecorator>
                  <Sparkles
                    className="size-6"
                    aria-hidden
                  />
                </CardDecorator>

                <h3 className="mt-6 font-medium">Energy Consulting</h3>
              </CardHeader>

              <CardContent>
                <p className="mt-3 text-sm">Expert consultation on energy efficiency, system design, and renewable energy solutions tailored to your needs.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 bg-gray-50 text-black py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-16">
            <div className="mb-6">
              <span className="text-black/60 text-sm font-medium tracking-wider uppercase">Featured Projects</span>
            </div>
            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl font-light leading-tight">
                Featured Solar Projects
              </h2>
            </div>
            <p className="text-black/70 text-lg max-w-2xl">
              Explore our featured government solar projects, showcasing our high-efficiency solar panel manufacturing capabilities, advanced technology, and commitment to sustainable energy solutions for public infrastructure.
            </p>
          </div>

          {/* Project Cards */}
          <div className="space-y-8">
            {/* Project 1 - Government Solar Farm */}
            <div className="relative rounded-3xl overflow-hidden bg-white shadow-lg">
              <div className="h-96 bg-gradient-to-r from-gray-200 to-gray-300 relative">
                <div className="absolute inset-0 bg-[url('/solar1.jpg')] bg-cover bg-center"></div>
                <div className="absolute top-6 left-6 bg-white rounded-xl p-6 max-w-sm shadow-lg">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 bg-black rounded-sm"></div>
                    <span className="text-black/60 text-sm">Government</span>
                    <span className="text-black/40 text-sm ml-auto">10 Aug 2025</span>
                  </div>
                  <div className="w-full h-32 bg-gray-200 rounded-lg mb-4 bg-[url('/solar1.jpg')] bg-cover bg-center"></div>
                  <h3 className="text-xl font-semibold mb-2">National Solar Farm Project</h3>
                  <p className="text-black/70 text-sm">
                    Manufacturing and supplying 50MW of high-efficiency solar panels for a government solar farm, featuring advanced monitoring systems and grid integration.
                  </p>
                </div>
              </div>
            </div>

            {/* Project 2 - Government Building Solar */}
            <div className="relative rounded-3xl overflow-hidden bg-white shadow-lg">
              <div className="h-96 bg-gradient-to-r from-green-100 to-green-200 relative">
                <div className="absolute inset-0 bg-[url('/solar2.jpg')] bg-cover bg-center"></div>
                <div className="absolute top-6 left-6 bg-white rounded-xl p-6 max-w-sm shadow-lg">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 bg-black rounded-sm"></div>
                    <span className="text-black/60 text-sm">Government</span>
                    <span className="text-black/40 text-sm ml-auto">28 Sep 2025</span>
                  </div>
                  <div className="w-full h-32 bg-gray-200 rounded-lg mb-4 bg-[url('/solar2.jpg')] bg-cover bg-center"></div>
                  <h3 className="text-xl font-semibold mb-2">Government Building Solar Initiative</h3>
                  <p className="text-black/70 text-sm">
                    Supplying high-efficiency solar panels for government buildings, reducing carbon footprint and energy costs while promoting sustainable infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative z-10 bg-gray-50 text-black py-24">
        <div className="max-w-4xl mx-auto px-8">
          <div className="mb-16">
            <div className="mb-6">
              <span className="text-black/60 text-sm font-medium tracking-wider uppercase">FAQ</span>
            </div>
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-4xl md:text-5xl font-light leading-tight">
                Frequently Asked Questions
              </h2>
              <Button 
                variant="outline" 
                className="border-black text-black hover:bg-black hover:text-white rounded-none px-6 py-2"
                asChild
              >
                <a href="https://wa.me/9828215566" target="_blank" rel="noopener noreferrer">
                  Contact Us
                </a>
              </Button>
            </div>
            <p className="text-black/70 text-lg">
              Find answers to common questions about our solar panel manufacturing capabilities, government project requirements, quality standards, and sustainable energy solutions.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border-b border-black/20">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-black/60 text-lg mr-4">01</span>
                <span className="text-lg font-medium">What quality standards do your solar panels meet?</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pl-12 text-black/70">
                Our solar panels meet international IEC standards and are certified for government projects. We maintain strict quality control with 25-year performance warranties and rigorous testing protocols.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-b border-black/20">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-black/60 text-lg mr-4">02</span>
                <span className="text-lg font-medium">Do you manufacture panels for government projects?</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pl-12 text-black/70">
                Yes, we specialize in manufacturing high-efficiency solar panels for government infrastructure projects, including solar farms, government buildings, and public facilities with strict compliance requirements.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-b border-black/20">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-black/60 text-lg mr-4">03</span>
                <span className="text-lg font-medium">What is your manufacturing capacity?</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pl-12 text-black/70">
                Our state-of-the-art manufacturing facility can produce up to 500MW of solar panels annually, with the capability to scale production to meet large government project requirements.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-b border-black/20">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-black/60 text-lg mr-4">04</span>
                <span className="text-lg font-medium">What certifications do your panels have?</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pl-12 text-black/70">
                Our panels are certified by IEC, UL, and CE standards. We also hold government procurement certifications and meet all regulatory requirements for public sector projects.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-b border-black/20">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-black/60 text-lg mr-4">05</span>
                <span className="text-lg font-medium">Do you provide technical support for government projects?</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pl-12 text-black/70">
                Yes, we offer comprehensive technical support including engineering consultation, project management, installation guidance, and ongoing maintenance support for all government solar projects.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border-b border-black/20">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-black/60 text-lg mr-4">06</span>
                <span className="text-lg font-medium">How do I get started with solar?</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pl-12 text-black/70">
                Contact us for a free consultation and site assessment. We'll evaluate your energy needs, roof suitability, and provide a customized solar solution with detailed cost savings analysis.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="relative z-10 bg-gray-50 text-black py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-16">
            <div className="mb-6">
              <span className="text-black/60 text-sm font-medium tracking-wider uppercase">Contact Information</span>
            </div>
            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl font-light leading-tight">
                Get In Touch
              </h2>
            </div>
            <p className="text-black/70 text-lg max-w-2xl">
              Ready to power your projects with our high-efficiency solar panels? Contact us for government project inquiries and custom manufacturing solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-light mb-6">Kavita Bishnoi Energy Pvt. Ltd.</h3>
              <p className="text-black/70 text-lg mb-8">
                Leading solar panel manufacturer committed to delivering clean, reliable, and affordable renewable energy solutions for government projects worldwide.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center">
                    <span className="text-black font-semibold">📞</span>
                  </div>
                  <div>
                    <p className="text-black/60 text-sm">Phone</p>
                    <p className="text-black font-medium">+91 9828215566</p>
                  </div>
                </div>
                
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center overflow-hidden">
                      <img src="/whatsapp1.png" alt="WhatsApp" className="w-8 h-8 object-cover" />
                    </div>
                  <div>
                    <p className="text-black/60 text-sm">WhatsApp</p>
                    <p className="text-black font-medium">+91 9828215566</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Actions */}
            <div className="flex flex-col justify-center">
              <div className="space-y-4">
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold"
                  asChild
                >
                  <a href="https://wa.me/9828215566" target="_blank" rel="noopener noreferrer">
                    <span>Connect on WhatsApp</span>
                  </a>
                </Button>
                
                <Button 
                  variant="outline"
                  className="w-full border-black text-black hover:bg-black hover:text-white rounded-xl px-8 py-4 text-lg font-semibold"
                  asChild
                >
                  <a href="tel:+919828215566">
                    <span>Call Now</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
    />
    <div
      aria-hidden
      className="bg-radial to-background absolute inset-0 from-transparent to-75%"
    />
    <div className="dark:bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t bg-white">{children}</div>
  </div>
);

export default Index;
