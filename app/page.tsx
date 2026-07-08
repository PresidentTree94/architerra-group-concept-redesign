import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";

const stats = [
  { label: "Years of Excellence", number: 25 },
  { label: "Projects Completed", number: 20 },
  { label: "Awards Received", number: 15 },
  { label: "Team Members", number: 10 }
]

const projects = [
  { title: "Simpson Mine Park", type: "Parks & Recreation" },
  { title: "Globeville Landing Park", type: "Urban Design" },
  { title: "Discovery Park", type: "Parks & Recreation" },
  { title: "Wonderland Creek", type: "Environmental Design" }
];

const services = [
  { title: "Landscape Architecture", icon: "ri-building-line", description: "Comprehensive design services for parks, plazas, streetscapes, trails, and natural open spaces that balance aesthetics with function." },
  { title: "Planning & Design", icon: "ri-map-pin-2-line", description: "Master planning, site analysis, and visioning services that guide communities in creating livable, sustainable public environments." },
  { title: "Public Engagement", icon: "ri-community-line", description: "Inclusive stakeholder collaboration processes that ensure design solutions reflect the authentic needs and aspirations of the communities we serve." },
  { title: "Environmental Design", icon: "ri-leaf-line", description: "Sustainable design practices integrating native plantings, stormwater management, and ecological restoration to enhance natural systems." }
];

const rewards = [
  { title: "ASLA Colorado Urban Design Honor Award", year: 2022, project: "Globeville Landing Outfall" },
  { title: "ASLA Colorado Design Merit Award", year: 2021, project: "Denver Museum of Nature and Science" },
  { title: "ACEC Colorado Engineering Excellence Award", year: 2021, project: "Globeville Landing Outfall" },
  { title: "ASLA Colorado Landmark Award", year: 2021, project: "Denver Skatepark" },
  { title: "Colorado Governor's Award — Best Use of Public Space", year: 2018, project: "Discovery Park" },
  { title: "Top 30 US Playgrounds", year: 2016, project: "Westminster Center Park" }
]

export default function Home() {
  return (
    <main>
      <Hero projects={projects} />
      <section className="bg-background-light">
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="tiny text-primary">Who We Are</span>
              <h2 className="mt-4 mb-8 text-4xl md:text-5xl lg:text-6xl">
                <span className="block uppercase">Architerra :</span>
                <span className="text-primary italic">Design of earth, land</span>
              </h2>
              <p className="text-sm text-foreground-light">At The Architerra Group, we believe that achieving balance is fundamental to successful design: balance between the transformation and conservation of the landscape; balance between diverse goals of project stakeholders; and balance between a creative vision and project constraints.</p>
              <p className="text-sm text-foreground-light mt-6 mb-8">Our firm's mission is to enhance local communities through the design of public spaces. Our inclusive landscape architecture design process allows us to work for the users of our projects by working with them.</p>
              <Link href="/about" className="tiny text-primary border-b border-primary inline-flex items-center gap-2 pb-1 hover:border-secondary hover:text-secondary transition-colors duration-200">Learn Our Story<i className="ri-arrow-right-line text-xs"></i></Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4">
              <Image src="/open-spaces.png" alt="Open Spaces" width={1590} height={710} className="h-80 rounded-lg object-cover" />
              <Image src="/trails-and-crossings.png" alt="Trails and Crossings" width={1591} height={626} className="h-80 rounded-lg object-cover mt-8" />
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 pt-16 border-t border-border text-center">
            {stats.map((s, index) => (
              <div key={index}>
                <p className="text-4xl md:text-5xl text-primary font-display font-light">{s.number}+</p>
                <p className="tiny text-foreground-light">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-background-dark">
        <div>
          <span className="tiny text-primary">Our Work</span>
          <div className="flex flex-col md:flex-row md:items-end justify-between mt-3 gap-8">
            <h2 className="text-4xl md:text-5xl">Featured Projects</h2>
            <Link href="/projects" className="tiny text-foreground-light flex items-center gap-2 hover:text-primary transition-colors duration-200">View All Projects<i className="ri-arrow-right-line text-xs"></i></Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
            {projects.map((p, index) => (
              <div key={index} className="rounded-lg overflow-hidden flex items-end relative h-105 group">
                <img src={`/${p.title.toLowerCase().replace(/ /g, "-")}.png`} alt={p.title} className="absolute object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="relative p-6">
                  <span className="tiny text-background-light/70">{p.type}</span>
                  <h3 className="text-xl text-background-light mt-1 mb-2">{p.title}</h3>
                  <Link href="/projects" className="tiny flex items-center gap-2 text-secondary font-medium transition-all duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">View Project<i className="ri-arrow-right-line text-xs"></i></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-background-light">
        <div className="text-center">
          <span className="tiny text-primary">What We Do</span>
          <h2 className="text-4xl md:text-5xl mt-3">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 mb-12">
            {services.map((s, index) => (
              <Link href="/services" key={index} className="bg-background-dark hover:bg-secondary/10 transition-colors duration-300 p-8 rounded-lg text-left group flex flex-col justify-between gap-5">
                <div>
                  <i className={`${s.icon} text-2xl text-secondary p-3 group-hover:text-primary transition-colors duration-300`}></i>
                  <h3 className="font-light text-lg mb-4 mt-8 group-hover:text-primary transition-colors duration-300">{s.title}</h3>
                  <p className="text-foreground-light text-sm">{s.description}</p>
                </div>
                <span className="tiny text-primary flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Learn More<i className="ri-arrow-right-line text-xs"></i></span>
              </Link>
            ))}
          </div>
          <Link href="/services" className="tiny text-primary inline-flex items-center gap-2 hover:text-secondary transition-colors duration-200">View All Services<i className="ri-arrow-right-line text-xs"></i></Link>
        </div>
      </section>
      <section className="bg-foreground-dark">
        <div>
          <span className="tiny text-secondary">Awards & Recognition</span>
          <div className="flex flex-col md:flex-row md:items-end justify-between mt-3 gap-8">
            <h2 className="!text-background-light text-4xl md:text-5xl">Excellence in<br/>Landscape Architecture</h2>
            <Link href="/recognition" className="tiny text-secondary flex items-center gap-2 hover:text-[oklch(.76_.1_155)] transition-colors duration-200">View All Awards<i className="ri-arrow-right-line text-xs"></i></Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
            {rewards.map((r, index) => (
              <div key={index} className="border border-[oklch(.3_0_0)] hover:border-primary/70 p-6 rounded-lg group transition-colors duration-300">
                <p className="tiny text-secondary">{r.year}</p>
                <h4 className="font-display text-background-light group-hover:text-[oklch(.76_.1_155)] transition-colors duration-300 my-2">{r.title}</h4>
                <p className="text-foreground-inverse text-xs">{r.project}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative min-h-125 md:min-h-150 flex">
        <Image src="/athletic-fields.png" alt="Athletic Fields" fill sizes="100%" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/50"></div>
        <div className="relative p-12 md:p-16 flex flex-col justify-between flex-1">
          <h2 className="text-5xl sm:text-6xl md:text-7xl max-w-lg !text-background-light">Let's Shape Your Community</h2>
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8">
            <Link href="/contact" className="bg-background-light px-6 py-4 flex items-center gap-4 hover:bg-[oklch(.93_.04_155)] group transition-colors duration-300">
              <span className="tiny">Start A Conversation</span>
              <div className="bg-foreground-dark group-hover:bg-primary w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300">
                <i className="ri-arrow-right-line text-background-light text-sm"></i>
              </div>
            </Link>
            <p className="text-background-light/80 max-w-xs text-sm">Based in Littleton, CO — serving municipalities and agencies across Colorado and beyond.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
