const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process")

// const scaffold = require('./scaffold') // waiting for joel to push this

const spawnNPMInit = () => {
  const child = spawn("npm", ["init", "-y"])
  process.stdin.pipe(child.stdin)
  child.stdout.on("data", data => console.log(`child stdout:\n${data}`))
}

const spawnNPM = (pkg, isNew) => {
    return spawn("npm", [isNew ? "install" : "update", pkg], {
        stdio: "inherit"
    });
}

const spawnYarn = (pkg, isNew) => {
  return spawn("yarn", [isNew ? "add" : "upgrade", pkg], {
        stdio: "inherit"
    });
}

const SPAWN_FUNCTIONS = { npm: spawnNPM, yarn: spawnYarn };

const getPackageManager = () => {
    const hasLocalNPM = fs.existsSync(path.resolve(process.cwd(), "package-lock.json"));
    const hasLocalYarn = fs.existsSync(path.resolve(process.cwd(), "yarn.lock"));
    if (hasLocalNPM) {
        return "npm";
    }
    else if (hasLocalYarn) {
        return "yarn";
    }
    else if (spawn("yarn", [" --version"], { stdio: "ignore" }).error) {
        return "npm";
    }
    else {
        return "yarn";
    }
}

const getPathToLocalPackages = () => {
    const manager = getPackageManager();
    if (manager === "yarn") {
        try {
            let yarnDir = spawn("yarn", ["dir"])
                .stdout.toString()
                .trim();
            return path.join(yarnDir, "node_modules");
        }
        catch (e) { console.error(e) }
    }
    return spawn("npm", ["root"])
}

const spawnChild = (pkg) => {
    const localPath = getPathToLocalPackages();
    const pkgPath = path.resolve(localPath, pkg);
    const packageManager = getPackageManager();
    const isNew = !fs.existsSync(pkgPath);

    return SPAWN_FUNCTIONS[packageManager](pkg, isNew);
}

// const pkgsToInstall = scaffold.getAnswers()
// pkgsToInstall.forEach(p => spawnChild(p))
