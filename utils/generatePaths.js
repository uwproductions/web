const fs = require("fs");
const path = require("path");

const meta = {
  "/work/architecture/1": {
    title: "Green Atrium",
    subtitle: "Sustainable City Design",
    client: "Jane & Piece Morgan",
    location: "Melbourne CBD, Vic",
    date: "April 2023",
  },
  "/work/architecture/2": {
    title: "Glass Tower",
    subtitle: "Modern Elegance",
    client: "Jane & Piece Morgan",
    location: "Melbourne CBD, Vic",
    date: "April 2023",
  },
  "/work/architecture/3": {
    title: "Classic Reimagined",
    subtitle: "Traditional Meets Modern",
    client: "Jane & Piece Morgan",
    location: "Melbourne CBD, Vic",
    date: "April 2023",
  },
  "/work/architecture/4": {
    title: "The Loft",
    subtitle: "Versatile Living Spaces",
    client: "Jane & Piece Morgan",
    location: "Melbourne CBD, Vic",
    date: "April 2023",
  },
  "/work/architecture/5": {
    title: "Beach House",
    subtitle: "Elegant Coastal Retreat",
    client: "Jane & Piece Morgan",
    location: "Melbourne CBD, Vic",
    date: "April 2023",
  },
  "/work/food/1": {
    title: "Artisan Bistro",
    subtitle: "Local Flavors, Refined",
    client: "Jane & Piece Morgan",
    location: "Melbourne CBD, Vic",
    date: "April 2023",
  },
  "/work/concert/1": {
    title: "Grand Performance",
    subtitle: "Music Meets Architecture",
    client: "Jane & Piece Morgan",
    location: "Melbourne CBD, Vic",
    date: "April 2023",
  },
  "/work/fashion/1": {
    title: "Couture Collection",
    subtitle: "Classic Meets Modern",
    client: "Jane & Piece Morgan",
    location: "Melbourne CBD, Vic",
    date: "April 2023",
  },
  "/work/fashion/2": {
    title: "Street Style",
    subtitle: "Bold Urban Fashion",
    client: "Jane & Piece Morgan",
    location: "Melbourne CBD, Vic",
    date: "April 2023",
  },
};

const getImagesFromFolder = (folderPath) => {
  const dirPath = path.join(__dirname, "..", "public", folderPath); // Adjusted the path
  return fs
    .readdirSync(dirPath)
    .filter((file) => /\.(jpg|jpeg|png|gif)$/.test(file))
    .map((file) => path.join(folderPath, file).replace(/\\/g, "/"));
};

const getProjectData = (category, projectFolder, id) => {
  const projectPath = `/assets/work/${category}/${projectFolder}`;
  const images = getImagesFromFolder(projectPath);

  const href = `/work/${category}/${projectFolder}`;
  const metaInfo = meta[href];

  return {
    id,
    title: metaInfo.title,
    subtitle: metaInfo.subtitle,
    href: `/work/${category}/${projectFolder}`,
    src: images[0],
    bannerImages: images.slice(0, 3),
    images,
    meta: meta[`/work/${category}/${projectFolder}`],
  };
};

const categories = ["architecture", "food", "concert", "fashion"];

let projectIdCounter = 1;
const projects = categories.flatMap((category) => {
  const categoryPath = path.join(
    __dirname,
    "..",
    "public",
    "assets",
    "work",
    category
  );
  const projectFolders = fs
    .readdirSync(categoryPath)
    .filter((folder) =>
      fs.statSync(path.join(categoryPath, folder)).isDirectory()
    );

  return projectFolders.map((projectFolder) => {
    const projectData = getProjectData(
      category,
      projectFolder,
      projectIdCounter
    );
    projectIdCounter += 1;
    return projectData;
  });
});

const projectsArray = projects;

const projectsFilePath = path.join(__dirname, "..", "utils", "projects.ts");
const projectsFileContent = `const projects = ${JSON.stringify(
  projectsArray,
  null,
  2
)};\n\nexport default projects;`;

fs.writeFileSync(projectsFilePath, projectsFileContent);

console.log("projects.ts file generated successfully at " + projectsFilePath);
