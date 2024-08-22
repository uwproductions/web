const fs = require("fs");
const path = require("path");

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

  return {
    id,
    title: `Project Title ${projectFolder}`,
    subtitle: `Subtitle for Project ${projectFolder}`,
    href: `/work/${category}/${projectFolder}`,
    src: images[0],
    bannerImages: images.slice(0, 3),
    images,
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

const projectsFilePath = path.join(
  __dirname,
  "..",
  "utils",
  "projects.ts"
);
const projectsFileContent = `const projects = ${JSON.stringify(
  projectsArray,
  null,
  2
)};\n\nexport default projects;`;

fs.writeFileSync(projectsFilePath, projectsFileContent);

console.log("projects.ts file generated successfully at " + projectsFilePath);
