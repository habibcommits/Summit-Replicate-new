import { build as viteBuild } from "vite";
import { rm } from "fs/promises";

async function buildVercel() {
  await rm("dist", { recursive: true, force: true });

  console.log("building client for Vercel...");
  await viteBuild();
  
  console.log("Build complete! Output in dist/public");
}

buildVercel().catch((err) => {
  console.error(err);
  process.exit(1);
});
