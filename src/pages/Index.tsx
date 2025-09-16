
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
                Kavita Bishnoi Energy Pvt. Ltd. supplies solar energy from utility-scale plants to government buyers. We structure bankable PPAs, manage scheduling and SLDC coordination, and ensure reliable delivery to DISCOMs and public sector entities across India.
              </p>
              <p className="text-muted-foreground">Our mission is to accelerate India's clean energy transition by bridging solar generation with government demand—delivering compliant, reliable, and cost-effective power at scale.</p>

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
              Our values guide every contract and megawatt delivered—compliance, transparency, reliability, and sustainability—powering public infrastructure with clean solar energy.
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
            <h2 className="text-balance text-4xl font-light lg:text-5xl">Government Solar Power Supply</h2>
            <p className="mt-4">End-to-end supply of solar energy from plants to government buyers with full regulatory compliance.</p>
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

                <h3 className="mt-6 font-medium">PPA Structuring & Bidding</h3>
              </CardHeader>

              <CardContent>
                <p className="text-sm">Drafting and negotiating PPAs, tender participation, tariff discovery, and risk allocation aligned with state and central policies.</p>
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

                <h3 className="mt-6 font-medium">Scheduling & SLDC Coordination</h3>
              </CardHeader>

              <CardContent>
                <p className="mt-3 text-sm">Day-ahead scheduling, real-time revisions, forecasting, and compliance with SLDC/RLDC protocols for seamless dispatch.</p>
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

                <h3 className="mt-6 font-medium">Metering, Billing & Settlement</h3>
              </CardHeader>

              <CardContent>
                <p className="mt-3 text-sm">ABT-compliant metering, monthly energy accounting, deviation charges management, and transparent invoicing for DISCOMs and agencies.</p>
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
                Featured Government Power Supply Projects
              </h2>
            </div>
            <p className="text-black/70 text-lg max-w-2xl">
              Explore our recent supply contracts and successful delivery of solar power to government buyers, demonstrating our compliance, reliability, and grid readiness.
            </p>
            <div className="mt-8">
              <Button 
                variant="outline" 
                className="border-black text-black hover:bg-black hover:text-white rounded-xl px-6 py-3"
                asChild
              >
                <a href="/projects">
                  View all projects
                </a>
              </Button>
            </div>
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
                  <h3 className="text-xl font-semibold mb-2">ARTA (Plant No.-1) — 2.00 MW</h3>
                  <p className="text-black/70 text-sm">
                    Circle: Barmer · Division: XEN (O&amp;M), Gudamalani · Sub-division: AEN (O&amp;M) Fagaliya · Plant: ARTA (Plant No.-1) · Capacity: 2.00 MW
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
                  <h3 className="text-xl font-semibold mb-2">DHINPURA (Plant No.-1) — 2.00 MW</h3>
                  <p className="text-black/70 text-sm">
                    Circle: Jalore · Division: XEN (O&amp;M), Sanchore · Sub-division: AEN (O&amp;M) Sanchore · Plant: DHINPURA (Plant No.-1) · Capacity: 2.00 MW
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directors Section */}
      <section id="directors" className="relative z-10 bg-white text-black py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-12 text-center">
            <span className="text-black/60 text-sm font-medium tracking-wider uppercase">Leadership</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-light">Our Directors</h2>
            <p className="mt-4 text-black/70 max-w-2xl mx-auto">Guiding our mission to deliver reliable, compliant solar power to government buyers with integrity and operational excellence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border border-gray-200 shadow-none">
              <div className="h-64 bg-white overflow-hidden flex items-center justify-center">
                <img src="/mohanlal.png" alt="Director" className="w-full h-full object-contain" />
              </div>
              <CardHeader>
                <h3 className="text-xl font-semibold">Mohanlal Godara</h3>
                <p className="text-sm text-black/60">Director</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-black/70">Leads strategic partnerships, compliance oversight, and government buyer relationships, ensuring bankable contracts and dependable delivery.</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-none">
              <div className="h-64 bg-white overflow-hidden flex items-center justify-center">
                <img src="/mahipal.png" alt="Director" className="w-full h-full object-contain" />
              </div>
              <CardHeader>
                <h3 className="text-xl font-semibold">Mahipal Saran</h3>
                <p className="text-sm text-black/60">Director</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-black/70">Oversees operations, scheduling, and SLDC coordination—maintaining grid compliance, forecasting accuracy, and settlement performance.</p>
              </CardContent>
            </Card>
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
                <a href="https://wa.me/9950618424" target="_blank" rel="noopener noreferrer">
                  Contact Us
                </a>
              </Button>
            </div>
            <p className="text-black/70 text-lg">
              Find answers to common questions about supplying solar energy to government buyers—PPAs, scheduling, metering, settlements, and compliance.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border-b border-black/20">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-black/60 text-lg mr-4">01</span>
                <span className="text-lg font-medium">What types of government buyers do you serve?</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pl-12 text-black/70">
                We supply to state DISCOMs, municipal corporations, public sector undertakings, utilities, and government departments under state and central procurement frameworks.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-b border-black/20">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-black/60 text-lg mr-4">02</span>
                <span className="text-lg font-medium">Do you sign and manage PPAs?</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pl-12 text-black/70">
                Yes. We structure, negotiate, and manage PPAs with government buyers, including tariff terms, scheduling obligations, metering, and settlement clauses.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-b border-black/20">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-black/60 text-lg mr-4">03</span>
                <span className="text-lg font-medium">How do forecasting and scheduling work?</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pl-12 text-black/70">
                We provide day-ahead and intra-day schedules with real-time revisions per SLDC guidelines, using advanced forecasting to minimize DSM/deviation charges.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-b border-black/20">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-black/60 text-lg mr-4">04</span>
                <span className="text-lg font-medium">What compliance and approvals are handled?</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pl-12 text-black/70">
                We handle SLDC registration, meter approvals, open access permissions (where applicable), grid connectivity, and adherence to CEA/CERC/SERC regulations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-b border-black/20">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-black/60 text-lg mr-4">05</span>
                <span className="text-lg font-medium">How are billing and settlements managed?</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pl-12 text-black/70">
                We manage ABT-compliant metering, monthly energy accounting, deviation settlements, and transparent invoicing aligned with PPA terms and regulatory rules.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border-b border-black/20">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-black/60 text-lg mr-4">06</span>
                <span className="text-lg font-medium">How do government buyers get started?</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pl-12 text-black/70">
                Contact our procurement team with your demand profile and preferred tenure. We'll propose a compliant structure, timeline, and onboarding plan.
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
              Government buyer or utility? Reach out to source reliable solar power under compliant PPAs with full scheduling, metering, and settlement support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-light mb-6">Kavita Bishnoi Energy Pvt. Ltd.</h3>
              <p className="text-black/70 text-lg mb-8">
                Supplier of solar energy from partner plants to government buyers—delivering contracted megawatts with regulatory compliance and operational excellence.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-black text-xl">📞</span>
                  <div>
                    <p className="text-black/60 text-sm">Phone</p>
                    <p className="text-black font-medium">+91 9950618424</p>
                  </div>
                </div>
                
                  <div className="flex items-center gap-4">
                    <img src="/whatsapp1.png" alt="WhatsApp" className="w-6 h-6 object-contain" />
                  <div>
                    <p className="text-black/60 text-sm">WhatsApp</p>
                    <p className="text-black font-medium">+91 9950618424</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-black text-xl">📧</span>
                  <div>
                    <p className="text-black/60 text-sm">Email</p>
                    <p className="text-black font-medium">
                      <a href="mailto:mahipalsaran2929@gmail.com" className="underline-offset-2 hover:underline">mahipalsaran2929@gmail.com</a>
                    </p>
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
                  <a href="https://wa.me/9950618424" target="_blank" rel="noopener noreferrer">
                    <span>Connect on WhatsApp</span>
                  </a>
                </Button>
                
                <Button 
                  variant="outline"
                  className="w-full border-black text-black hover:bg-black hover:text-white rounded-xl px-8 py-4 text-lg font-semibold"
                  asChild
                >
                  <a href="tel:+919950618424">
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
