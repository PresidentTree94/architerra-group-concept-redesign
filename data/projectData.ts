export type ProjectType = {
  title: string;
  type: string;
  location: string;
};

export const projects: ProjectType[] = [
  { title: "Simpson Mine Park", type: "Parks & Recreation", location: "Lafayette" },
  { title: "Globeville Landing Park", type: "Urban Design", location: "Denver" },
  { title: "Discovery Park", type: "Parks & Recreation", location: "Parker" },
  { title: "Wonderland Creek", type: "Environmental Design", location: "Boulder" },
  { title: "Wheatlands Park", type: "Parks & Recreation", location: "Aurora" },
  { title: "Goldsmith Gulch", type: "Environmental Design", location: "Greenwood Village" },
  { title: "Denver Museum of Nature & Science", type: "Urban Design", location: "Denver" },
  { title: "Village Greens North", type: "Parks & Recreation", location: "Greenwood Village" },
  { title: "Downtown Denver Playground", type: "Parks & Recreation", location: "Denver" },
  { title: "McFall Park", type: "Urban Design", location: "Westminster" },
  { title: "Confluence Park", type: "Parks & Recreation", location: "Denver" }
];