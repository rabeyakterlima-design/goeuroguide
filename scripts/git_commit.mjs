import git from "isomorphic-git";
import fs from "fs";

async function commitAll() {
  const dir = ".";
  console.log("Initializing git repository if not present...");
  try {
    await git.init({ fs, dir });
  } catch (err) {
    console.log("Git already initialized or init error:", err.message);
  }

  console.log("Calculating status matrix...");
  const status = await git.statusMatrix({
    fs,
    dir,
    filter: (f) =>
      !f.startsWith("node_modules") &&
      !f.startsWith(".git") &&
      !f.startsWith(".next") &&
      !f.startsWith(".env.local") &&
      !f.startsWith(".env") &&
      f !== ".env.local",
  });

  console.log(`Found ${status.length} files to process.`);

  for (const [filepath, head, workdir, stage] of status) {
    if (workdir !== 0) {
      await git.add({ fs, dir, filepath });
    }
  }

  const sha = await git.commit({
    fs,
    dir,
    message: "Initial commit: GoEuroGuide complete European travel information and planning platform",
    author: {
      name: "rabeyakterlima-design",
      email: "rabeyakterlima-design@users.noreply.github.com",
    },
  });

  console.log("COMMIT SUCCESSFUL! SHA:", sha);
}

commitAll().catch(console.error);
