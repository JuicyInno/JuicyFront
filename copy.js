const fs = require('fs');
const { exec } = require("child_process");

const configs = {
  "wp5_template.js": "dist/wp5_template.js",
  "webpack.config.js": "dist/webpack.config.js",
  ".eslintrc.json": "dist/.eslintrc.json",
  ".stylelintrc.json": "dist/.stylelintrc.json",
  "commitlint.config.js": "dist/commitlint.config.js",
  "changelog.config.js": "dist/changelog.config.js",
  ".lintstagedrc.json": "dist/.lintstagedrc.json",
  "public/index.html": "dist/index.html",
  "public/favicon.ico": "dist/favicon.ico"
};

const styles = {
  "src/styles/mixins.scss": "dist/styles/mixins.scss",
  "src/styles/common.scss": "dist/styles/common.scss",
  "src/styles/variables.scss": "dist/styles/variables.scss",
};

Object.entries(configs).forEach(([from, destination]) => {
  fs.copyFile(from, destination, (err) => {
    if (err) throw err;
    console.info(`${from} was copied to ${destination}`);
  });
});

if (!fs.existsSync('dist/styles')) {
  fs.mkdir('dist/styles', (err) => {
    if (err) throw err;
  });
}

if (!fs.existsSync('dist/assets')) {
  fs.mkdir('dist/assets', (err) => {
    if (err) throw err;
  });
}

Object.entries(styles).forEach(([from, destination]) => {
  fs.copyFile(from, destination, (err) => {
    if (err) throw err;
    console.log(`${from} was copied to ${destination}\t`);
  });
});

exec("yarn exec shx cp src/assets/illustrations/* dist/assets/illustrations", (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});
