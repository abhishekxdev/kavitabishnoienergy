import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { HeroHeader } from "@/components/HeroHeader";

const projects = [
  {
    title: "ARTA (Plant No.-1) — 2.00 MW",
    details:
      "Circle: Barmer · Division: XEN (O&M), Gudamalani · Sub-division: AEN (O&M) Fagaliya · Plant: ARTA (Plant No.-1) · Capacity: 2.00 MW",
    image: "/solar1.jpg",
  },
  {
    title: "DHINPURA (Plant No.-1) — 2.00 MW",
    details:
      "Circle: Jalore · Division: XEN (O&M), Sanchore · Sub-division: AEN (O&M) Sanchore · Plant: DHINPURA (Plant No.-1) · Capacity: 2.00 MW",
    image: "/solar2.jpg",
  },
  {
    title: "GEEDA (Plant No.-1) — 2.00 MW",
    details:
      "Circle: Jalore · Division: XEN (O&M), Sanchore · Sub-division: AEN (O&M) Chitalwana · Plant: GEEDA (Plant No.-1) · Capacity: 2.00 MW",
    image: "/solar4.jpg",
  },
  {
    title: "Bhimthal (Plant No.-1) — 2.00 MW",
    details:
      "Circle: Barmer · Division: XEN (O&M), Gudamalani · Sub-division: AEN (O&M) Dhorimana · Plant: Bhimthal (Plant No.-1) · Capacity: 2.00 MW",
    image: "/solar5.jpg",
  },
  {
    title: "HARIYALI (Plant No.-1) — 2.00 MW",
    details:
      "Circle: Jalore · Division: XEN (O&M), Sanchore · Sub-division: AEN (O&M) Sanchore · Plant: HARIYALI (Plant No.-1) · Capacity: 2.00 MW",
    image: "/solar7.jpg",
  },
  {
    title: "FAGALIYA (Plant No.-1) — 2.00 MW",
    details:
      "Circle: Barmer · Division: XEN (O&M), Gudamalani · Sub-division: AEN (O&M) Fagaliya · Plant: FAGALIYA (Plant No.-1) · Capacity: 2.00 MW",
    image: "/solar6.jpg",
  },
  {
    title: "Mithadi (Plant No.-1) — 2.00 MW",
    details:
      "Circle: Barmer · Division: XEN (O&M), Gudamalani · Sub-division: AEN (O&M) Fagaliya · Plant: Mithadi (Plant No.-1) · Capacity: 2.00 MW",
    image: "/solarplant3.jpg",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen font-sans pb-24">
      <HeroHeader />
      <div className="max-w-5xl mx-auto px-6 pt-28 md:pt-36">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-light">All Projects</h1>
          <p className="text-black/70 mt-4">Utility-scale solar plants supplying power to government buyers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, idx) => (
            <Card key={idx} className="overflow-hidden border border-gray-200 shadow-none">
              <div className="h-56 bg-gray-100">
                <div className={`w-full h-full bg-[url('${""}')] hidden`}></div>
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <h3 className="text-xl font-semibold">{p.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-black/70">{p.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;


