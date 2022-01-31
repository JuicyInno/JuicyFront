import fs from 'fs';

// константы имён папок и файлов
import {
  RESULTDIR, ICONDATA, INDEXICON, STORYPATH
} from './constants';

// Функция форматирования содержимого файла, создания индекса иконок
import {
  formatContent, makeIconStory, makeImportExportIcon
} from './utils';

// ---------------------------------------------------------------------------------------------------------------------
// Шаг 1. Создаём .tsx файлы со компонентами иконок


// Проверяем наличие папки, где будут лежать обработанные файлы - resultDir
// Есть есть, то удаляем её
if (fs.existsSync(RESULTDIR)) {
  // recursive - флаг на удаление папки с содержимым
  fs.rmdirSync(RESULTDIR, { recursive: true } );
}

// Если нет папки для результата, то создаём её
fs.mkdirSync(RESULTDIR); // TODO: переделать на __dirname


// Функция, которая предбразует svg файлы в react компоненты
const makeReactFiles = (node: fs.PathLike, suffix = '') => {
  // Шаг 1. Проходим по каждому элементу. Флаг withFileTypes позволяет определить тип элемента -
  // папка или файл
  fs.readdirSync(node, { withFileTypes: true }).forEach(item => {

    // Определяем тип элемента. Если элемент является папкой, пройтись по его содержимому
    if (item.isDirectory()) {
      makeReactFiles(`${node}/${item.name}`, item.name);
    } else {
      // Шаг 2. Создаём .tsx файл с отформатированным именем
      // Удаляем пробелы, если есть, ставим расширение ".tsx"
      const fileNameNoWhiteSpace = `${suffix}${item.name.replace(/\s+/g, '')}`;
      const fileNameTSX = fileNameNoWhiteSpace.substr(0, fileNameNoWhiteSpace.lastIndexOf('.')) + '.tsx';
      fs.writeFileSync(`${RESULTDIR}/${fileNameTSX}`, '');

      // Шаг 3. Форматируем содержимое файла
      const fileContent = fs.readFileSync(`${node}/${item.name}`, 'utf8');
      fs.appendFileSync(`${RESULTDIR}/${fileNameTSX}`, formatContent(fileContent));
    }
  });
};

// Передаём в функцию данные иконок, скачанных в папку icons
// Преобразованные файлы сохраняются в папку resultDir
makeReactFiles(ICONDATA);


// ---------------------------------------------------------------------------------------------------------------------
// Шаг 2. Создаём индекс со списком полученных иконок


// Проверяем наличие индекса с иконками
if (fs.existsSync(INDEXICON)) {
  // Если есть - удаляем, чтобы не перезатереть данные
  fs.rmdirSync(INDEXICON, { recursive: true } );
}

// Если нет индекса, то создаём его
fs.appendFileSync(INDEXICON, '', 'utf8');

// Функция, которая предбразует svg файлы в react компоненты
const makeIndexIcon = (content: fs.PathLike) => {
  // Проходим по каждому файлу с рект иконками
  fs.readdirSync(content).forEach(filePath => {
    // По каждому файлу добавляем импорт и экспорт
    fs.appendFileSync(INDEXICON, makeImportExportIcon(filePath as string));
  });
};

makeIndexIcon(RESULTDIR);


// ---------------------------------------------------------------------------------------------------------------------
// Шаг 3. Создаём стори с иконками
// Проверяем наличие файла со стори, и удаляем его
if (fs.existsSync(STORYPATH)) {
  // Удаляем файл во избежание ошибок
  fs.rmdirSync(STORYPATH, { recursive: true } );
}

// Создаём файл для стори с иконками
fs.appendFileSync(STORYPATH, '', 'utf8');

// Функция, которая заполняет стори с иконками
makeIconStory(RESULTDIR);
