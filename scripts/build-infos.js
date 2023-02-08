import glob from "glob";
import fs from "fs";

const prefix = "src/data/raw/";

const files = glob.sync("src/data/raw/**/info.json");
const result = {};

for (const file of files) {
  const data = fs.readFileSync(file, "utf8");
  const json = JSON.parse(data);
  const key = file.replace(prefix, "").replace("/info.json", "");
  result[key] = json;
}

fs.writeFileSync("src/data/temp/infos.json", JSON.stringify(result, null, 2));
