const svgr = require('@svgr/core').default;
const rimraf = require('rimraf');
const fs = require('fs');
const changeCase = require('change-case');
const prettier = require('prettier');

const DIR = './icons';
const DEST = './src/components/ui/icons';
const componentsList = [];

function readIcon(file) {
  return fs.readFileSync(file, 'utf8');
}

function writeComponent(componentName, jsxContent) {
  jsxContent = jsxContent
    .replace(`function ${componentName}(props)`, `export const ${componentName} = () =>`)
    .replace(` {...props}`, '')
    .replace(`export default ${componentName};`, '');
  jsxContent = prettier.format(jsxContent, { semi: false, parser: 'babel' });
  fs.writeFileSync(`${DEST}/${componentName}.tsx`, jsxContent, 'utf8');
}

function getComponentName(name) {
  return `${changeCase.pascalCase(name.replace('.svg', ''))}`;
}

function createJsx(svgCode, name) {
  const componentName = getComponentName(name);
  const jsx = svgr.sync(svgCode, { icon: true }, { componentName });
  writeComponent(componentName, jsx);
  return componentName;
}

function writeComponents() {
  const files = fs.readdirSync(DIR);

  files.forEach(async file => {
    if (file.match('.svg')) {
      const svgData = readIcon(`${DIR}/${file}`);
      const componentName = createJsx(svgData, file);

      componentsList.push(componentName);
    }
  });

  console.log(`Created ${files.length} icon components`);
}

rimraf(`${DIR}/components/*`, () => {
  writeComponents();
});
