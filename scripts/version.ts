import fs from "fs";
import path from "path";

console.log("ℹ️ Running custom script to pin versions to each other");

const packages = fs
  .readdirSync(path.join(__dirname, "..", "packages"), { withFileTypes: true })
  .filter((file) => file.isDirectory())
  .map((dir) => dir.name)
  .filter((dir) => !dir.startsWith("."));

for (const name of packages) {
  const pkgJSON = path.join(__dirname, "..", "packages", name, "package.json");
  if (!fs.existsSync(pkgJSON)) {
    continue;
  }

  const content = fs.readFileSync(pkgJSON).toString();

  const version = JSON.parse(content).version;
  // matches `"@chiastack/*: ".*"` and replaces it with `"@chiastack/*: "${version}""`
  const newContent = content.replace(
    /\"@chiastack\/((\w|-)+)\": "([^"]|\\")*"/g,
    `"@chiastack/$1": "${version}"`
  );
  fs.writeFileSync(pkgJSON, newContent);
  console.log(`📍 Pinned ${name} @chiastack/* dependencies`);
}
