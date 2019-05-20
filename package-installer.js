const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

// const scaffold = require('./scaffold') // waiting for joel to push this

const packageInstaller = {};

const spawnNPMInit = () => {
  const child = spawn('npm', ['init', '-y']);
  process.stdin.pipe(child.stdin);
  child.stdout.on('data', data => console.log(`child stdout:\n${data}`));
};

const spawnNPM = (pkg, isNew) => {
  return spawn('npm', [isNew ? 'install' : 'update', pkg], {
    stdio: 'inherit'
  });
};

const spawnYarn = (pkg, isNew) => {
  return spawn('yarn', [isNew ? 'add' : 'upgrade', pkg], {
    stdio: 'inherit'
  });
};

const SPAWN_FUNCTIONS = { npm: spawnNPM, yarn: spawnYarn };

const getPackageManager = () => {
  const hasLocalNPM = fs.existsSync(path.resolve(process.cwd(), 'package-lock.json'));
  const hasLocalYarn = fs.existsSync(path.resolve(process.cwd(), 'yarn.lock'));
  if (hasLocalNPM) {
    return 'npm';
  }
  // else if (hasLocalYarn) {
  //   return 'yarn';
  // } else if (spawn('yarn', [' --version'], { stdio: 'ignore' }).error) {
  //   return 'npm';
  // } else {
  //   return 'yarn';
  // }
};

const getLocalPath = () => {
  const manager = getPackageManager();
  if (manager === 'yarn') {
    try {
      let yarnDir = spawn('yarn', ['dir'])
        .stdout.toString()
        .trim();
      return path.join(yarnDir, 'node_modules');
    } catch (e) {
      console.error(e);
    }
  }
  return spawn('npm', ['root']);
};

packageInstaller.spawnInstaller = pkg => {
  // const localPath = getLocalPath();

  const pkgPath = path.resolve(`${process.cwd()}/node_modules`, pkg);

  const packageManager = getPackageManager();
  const isNew = !fs.existsSync(pkgPath);

  console.log('Package to install: ', pkg);
  // console.log('pkgPath: ', pkgPath);
  // console.log('which package manager:', packageManager);
  // console.log('Is is installed already: ', isNew);
  // console.log(SPAWN_FUNCTIONS[packageManager]);
  return SPAWN_FUNCTIONS[packageManager](pkg, isNew);
};

// packageInstaller.spawnInstaller('babel-loader');
// console.log(spawnInstaller('babel-loader'));
// ('babel-loader', true);
// const pkgsToInstall = scaffold.getAnswers()
// pkgsToInstall.forEach(p => spawnInstaller(p))

module.exports = packageInstaller;
