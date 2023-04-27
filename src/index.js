// const fs = require("fs/promises");
// const fileName = "myfile.txt";
// const updateFile = async (fileName, fileContent) => {
//   // write code here
//   // dont change function name
  
// };

// module.exports = updateFile;




const fs = require("fs/promises");
const fileName = "myfile.txt";

const updateFile = async (fileName, fileContent) => {
  try {
    // read the existing content of the file
    const existingContent = await fs.readFile(fileName, "utf-8");

    // concatenate the existing content with the new content
    const updatedContent = existingContent + ", " + fileContent;

    // write the updated content back to the file
    await fs.writeFile(fileName, updatedContent);

    return updatedContent;
  } catch (error) {
    console.error(error);
  }
};

module.exports = updateFile;
