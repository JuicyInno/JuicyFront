import fs from 'fs';
import { ICONPATH, STORYPATH } from './constants';

// Функция приведения названий атрибутов html к именам для react компонентов
// Убирает в названии атрибута тире и делает из строчной буквы заглавную в стие cameCase
function parsePropToAttribute(str: string) {
  let attr = '';
  let isTag = false;
  let isAttr = false;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '<') {
      isTag = true;
      attr += str[i];
      continue;
    } else if (str[i] === '>') {
      isTag = false;
      attr += str[i];
    }

    if (isTag) {

      if (str[i] === ' ' && !isAttr) {
        isAttr = true;
      }

      if (isAttr) {

        if (str[i] === '=') {
          isAttr = false;
          attr += str[i];
          continue;
        }

        if (str[i] === '-') {
          attr += str[i + 1].toUpperCase();
          i++;
          continue;
        }
      }

      attr += str[i];
    }
  }

  return attr;
}

export const formatContent = (content: string) => {
  const regex_pipeline =
      [
        [
          /width=("\d+")/mg,
          '\n' +
          '      {...props}\n' +
      '      width={iconSize[size]}'
        ],
        [
          /height=("\d+")/mg,
          '\n' +
      '      height={iconSize[size]}\n' +
      '      '
        ]
      ];

  regex_pipeline.forEach(([regex_value, replace_value]) => {
    if (typeof replace_value === 'string') {
      content = content.replace(regex_value, replace_value);
    }
  });

  const imports = 'import React from \'react\';\n' +
      'import { IIconProps, Size } from \'../../../types\';\n' +
      'import { iconSize } from \'../../../utils/helpers\';\n' +
      '/* eslint-disable max-len */\n';

  const opening = '\nexport default ({ size = \'xs\', ...props }: IIconProps) => {\n' +
      '  return (\n' +
      '      ';

  const ending = '  );\n' +
      '};\n';

  // Вызывем функцию пребразователь на содержимом svg
  return `${imports}${opening}${parsePropToAttribute(content)}${ending}`;
};

export const makeImportExportIcon = (fileName: string) => {
  const name = fileName.substr(0, fileName.lastIndexOf('.')) + '';
  return `import ${name} from './assets/newIcons/resultDir/${name}';
export { ${name} };\n
`;
};

export const makeIconStory = (content: fs.PathLike) => {
  const exports = 'import React from \'react\';\n' +
      'import { Story } from \'@storybook/react\';\n' +
      'import { StoryDocs, StoryDocsH1 } from \'../../storybook\';\n' +
      'import { withDesign } from \'storybook-addon-designs\';\n' +
      'import \'./Icons.style.scss\';\n';

  const iconArray: string[] = [];
  fs.readdirSync(content).forEach(filePath => {
    // Собираем имена файлов в массив
    const name = filePath.substr(0, filePath.lastIndexOf('.')) + '';
    iconArray.push(name);
  });

  const iconImports = iconArray.map(name => `import ${name} from '${ICONPATH}/${name}';`).join('\n');

  const storyExport = '\n' +
      'export default {\n' +
      '  title: \'icons,illustrations/Icons\',\n' +
      '  decorators: [withDesign],\n' +
      '};\n';

  const storyOpening = '\n' +
      'export const Demo: Story = () => {\n' +
      '  const onCopy = (event: React.MouseEvent, iconName: string) => {\n' +
      '    event.stopPropagation();\n' +
      '    navigator.clipboard.writeText(iconName);\n' +
      '  };\n' +
      '\n' +
      '  return (\n' +
      '    <StoryDocs>\n' +
      '      <StoryDocsH1>Icons</StoryDocsH1>\n' +
      '      <div className=\'iconsWrapper\'>\n' +
      '        ';

  const iconsJSX = iconArray.map(element => `        <div key=\'${element}\' className=\'container\'>
          <div className=\'iconContainer\'><${element} /></div>
          <div className=\'titleWrapper\'>
              ${element}
          </div>
          <div
            className='copyStyle'
            onClick={(event) => onCopy(event, \'${element}\')}
          >
            <AllCopy />
          </div>
        </div>`).join('\n');

  const storyEnding = '      </div>\n' +
      '    </StoryDocs>\n' +
      '  );\n' +
      '};\n' +
      '\n' +
      'Demo.parameters = {\n' +
      '  design: {\n' +
      '    type: \'figma\',\n' +
      '    url: \'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/?node-id=8%3A15635\',\n' +
      '  },\n' +
      '  actions: { disabled: true },\n' +
      '  controls: { disabled: true }\n' +
      '};\n';

  const result = `${exports}\n${iconImports}${storyExport}${storyOpening}${iconsJSX}${storyEnding}`;
  fs.appendFileSync(STORYPATH, result, 'utf8');
};
