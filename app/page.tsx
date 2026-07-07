import Image from "next/image";

const stats = [
  { label: "Years of Excellence", number: 30 },
  { label: "Projects Completed", number: 100 },
  { label: "Awards Received", number: 40 },
  { label: "Team Members", number: 15 }
]

const projects = [
  { title: "Simpson Mine Park", type: "Parks & Recreation", image: "https://static.wixstatic.com/media/9ca5af_97cc44d883eb4f6bb250b64d88855c37~mv2.jpg/v1/fill/w_700,h_900,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9ca5af_97cc44d883eb4f6bb250b64d88855c37~mv2.jpg" },
  { title: "Cherry Creek Trail", type: "Trails & Greenways", image: "https://static.wixstatic.com/media/9ca5af_262143483f6042e18afa3d3ad9448df7~mv2.jpg/v1/fill/w_700,h_900,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9ca5af_262143483f6042e18afa3d3ad9448df7~mv2.jpg" },
  { title: "Discovery Park", type: "Community Spaces", image: "https://static.wixstatic.com/media/9ca5af_476e480d52b345a39e1986b376010341~mv2.jpg/v1/fill/w_700,h_900,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9ca5af_476e480d52b345a39e1986b376010341~mv2.jpg" },
  { title: "Globeville Landing", type: "Urban Design", image: "https://static.wixstatic.com/media/9ca5af_46e70df9fb4a45a296808ed08776eda8~mv2.jpg/v1/fill/w_700,h_900,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9ca5af_46e70df9fb4a45a296808ed08776eda8~mv2.jpg" }
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
      <section className="border relative min-h-screen flex justify-center items-end">
        <img src="https://static.wixstatic.com/media/9ca5af_32d8b1271dfa47c38952d2f164e50d76~mv2.jpg/v1/fill/w_1280,h_654,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9ca5af_32d8b1271dfa47c38952d2f164e50d76~mv2.jpg" className="object-cover w-full h-full absolute" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/50"></div>
        <div className="relative p-8 text-background-light text-center">
          <span className="tiny text-background-light/80">Trails & Greenways</span>
          <h1 className="text-7xl font-light mt-3 mb-12">East-West Trail</h1>
          <a href="" className="tiny inline-block border border-background-light/70 px-8 py-3 font-light">View Projects</a>
          <div className="flex justify-center gap-3 mt-14">
            <button className="w-2 h-2 bg-background-light/40 rounded-full"></button>
            <button className="w-2 h-2 bg-background-light/40 rounded-full"></button>
            <button className="w-2 h-2 bg-background-light/40 rounded-full"></button>
            <button className="w-2 h-2 bg-background-light/40 rounded-full"></button>
          </div>
        </div>
        <div className="absolute left-8 top-1/2 -translate-y-1/2 border border-background-light/40 text-background-light w-12 h-12 flex items-center justify-center">
          <i className="ri-arrow-left-s-line text-lg"></i>
        </div>
        <div className="absolute right-8 top-1/2 -translate-y-1/2 border border-background-light/40 text-background-light w-12 h-12 flex items-center justify-center">
          <i className="ri-arrow-right-s-line text-lg"></i>
        </div>
      </section>
      <section className="bg-background-light">
        <div>
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
              <span className="tiny text-primary">Who We Are</span>
              <h2 className="mt-4 mb-8 text-6xl">
                <span className="block uppercase">Architerra :</span>
                <span className="text-primary italic">Design of earth, land</span>
              </h2>
              <p className="text-sm text-foreground-light">At The Architerra Group, we believe that achieving balance is fundamental to successful design: balance between the transformation and conservation of the landscape; balance between diverse goals of project stakeholders; and balance between a creative vision and project constraints.</p>
              <p className="text-sm text-foreground-light mt-6 mb-8">Our firm's mission is to enhance local communities through the design of public spaces. Our inclusive landscape architecture design process allows us to work for the users of our projects by working with them.</p>
              <a href="" className="tiny text-primary underline underline-offset-8">Learn Our Story</a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://static.wixstatic.com/media/9ca5af_4f3e5c104c654cc1b8231664c0378e4a~mv2.jpg/v1/fill/w_603,h_695,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9ca5af_4f3e5c104c654cc1b8231664c0378e4a~mv2.jpg" className="h-80 rounded-lg" />
              <img src="https://static.wixstatic.com/media/9ca5af_97cc44d883eb4f6bb250b64d88855c37~mv2.jpg/v1/fill/w_700,h_900,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9ca5af_97cc44d883eb4f6bb250b64d88855c37~mv2.jpg" className="h-80 rounded-lg mt-8" />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-8 mt-20 pt-16 border-t border-[oklch(.94_.006_80)] text-center">
            {stats.map((s, index) => (
              <div key={index}>
                <p className="text-5xl text-primary font-display font-light">{s.number}+</p>
                <p className="tiny text-foreground-light">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-background-dark">
        <div>
          <span className="tiny text-primary">Our Work</span>
          <div className="flex items-end justify-between mt-3">
            <h2 className="text-5xl">Featured Projects</h2>
            <a href="" className="tiny text-foreground-light">View All Projects</a>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-16">
            {projects.map((p, index) => (
              <div key={index} className="rounded-lg overflow-hidden flex items-end relative h-105">
                <img src={p.image} alt={p.title} className="absolute object-cover w-full h-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="relative p-6">
                  <span className="tiny text-background-light/70">{p.type}</span>
                  <h3 className="text-xl text-background-light">{p.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-background-light">
        <div className="text-center">
          <span className="tiny text-primary">What We Do</span>
          <h2 className="text-5xl mt-3">Our Services</h2>
          <div className="grid grid-cols-4 gap-8 mt-16 mb-12">
            {services.map((s, index) => (
              <div key={index} className="bg-background-dark p-8 rounded-lg text-left">
                <i className={`${s.icon} text-2xl text-primary p-3`}></i>
                <h3 className="font-light text-lg mb-4 mt-8">{s.title}</h3>
                <p className="text-foreground-light text-sm">{s.description}</p>
              </div>
            ))}
          </div>
          <a href="" className="text-primary">View All Services</a>
        </div>
      </section>
      <section className="bg-foreground-dark">
        <div>
          <span className="tiny text-secondary">Awards & Recognition</span>
          <div className="flex items-end justify-between mt-3">
            <h2 className="!text-background-light text-5xl">Excellence in<br/>Landscape Architecture</h2>
            <a href="" className="text-secondary">View All Rewards</a>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-16">
            {rewards.map((r, index) => (
              <div key={index} className="border border-[oklch(.3_0_0)] p-6 rounded-lg">
                <p className="tiny text-secondary">{r.year}</p>
                <h4 className="text-background-light my-2">{r.title}</h4>
                <p className="text-[oklch(.65_0_0)] text-xs">{r.project}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative min-h-150 flex">
        <img src="https://static.wixstatic.com/media/9ca5af_92fa585bd8ba4491a9f94697c885493a~mv2.jpg/v1/fill/w_1800,h_700,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9ca5af_92fa585bd8ba4491a9f94697c885493a~mv2.jpg" className="object-cover w-full h-full absolute" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/50"></div>
        <div className="relative p-16 flex flex-col justify-between flex-1">
          <h2 className="text-7xl max-w-lg !text-background-light">Let's Shape Your Community</h2>
          <div className="flex items-end justify-between">
            <a href="" className="tiny bg-background-light px-6 py-4">Start A Conversation</a>
            <p className="text-background-light/80 max-w-xs text-sm">Based in Littleton, CO — serving municipalities and agencies across Colorado and beyond.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
