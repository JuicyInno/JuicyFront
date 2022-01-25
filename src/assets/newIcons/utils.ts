export const formatContent = (content: string) => {
  const regex_pipeline =
      [
        [
          /width=("\d+")/mg,
          '\n' +
      '      width={iconSize[size]}'
        ],
        [
          /height=("\d+")/mg,
          '\n' +
      '      height={iconSize[size]}\n' +
      '      {...props}\n' +
      '      '
        ]
      ];

  regex_pipeline.forEach(([regex_value, replace_value], index) => {
    if (typeof replace_value === 'string') {
      content = content.replace(regex_value, replace_value);
    }
  });

  const imports = 'import React from \'react\';\n' +
      'import { IIconProps, Size } from \'../../../types\';\n' +
      'import { iconSize } from \'../../../utils/helpers\';\n' +
      '/* eslint-disable max-len */\n';

  const opening = '\nexport default ({ size = \'xs\', ...props }: {size: Size, props: IIconProps}) => {\n' +
      '  return (\n' +
      '      ';

  const ending = '  );\n' +
      '};\n';

  return `${imports}${opening}${content}${ending}`;
};

export const makeImportExportIcon = (fileName: string) => {
  const name = fileName.substr(0, fileName.lastIndexOf('.')) + '';
  return `import ${name} from './assets/newIcons/resultDir/${name}';
export { ${name} };\n
`;
};
