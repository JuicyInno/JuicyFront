# Иконки в библиотеке
## 1. Добавление иконок

Макет с иконками находится по этой ссылке: [https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/?node-id=8%3A15635]

В связи с периодическими переездами на новый визуал меняется библиотека иконок. Для того, чтобы избежать ручного добавления иконок к нам в библиотеку, был добавлен скрипт, который массово преобразует исходные .svg файлы иконок в .tsx компоненты.
В дизайнерами был согласован следующий порядок ведения макета иконок:
- В макете существует зафиксированная структура хранения иконок по папкам (и в корне папок). Старые папки удалять или переименовывать нельзя, новые папки добавлять можно.
- Нельзя удалять или переименовывать существующие иконки. Это приведёт к тому, что в имортах будут отсутствовать нужные файлы. Добавлять новые иконки можно в любую точку структуры (в папку, в корень  и проч.)
- Все прозрачные иконки должны быть в цвете #8A96A8 (он автоматически подменяется на currentColor)

> Важно: в макете могут происходить точечные добавления иконок. Чтобы добавить новые иконки, необходимо скопировать ВСЕ иконки в макете. Это сделано для того, чтобы избежать коллизий имён и потери иконок

Скрипт принимает на вход исходные .svg файлы, преобразовывает их в готовые .tsx компоненты, далее создаёт индекс с импортами иконок, после чего создаёт стори с иконками.
Ниже пошагово описан алгоритм действий для добавления иконок в библиотеку.

1. Перейти в макет с иконками. С зажатым шифтом выделить все иконки (выделение лучше проводить по центру иконки, тогда произойдёт захват рамки иконки (24px или 40px). Даже если предполагается добавление одной или нескольких иконок, необходимо выгрузить все иконки (см. примечание выше). Чтобы отменить лишнее выделение (например, заголовка), достаточно один раз с тем же зажатым шифтом кликнуть по лишнему элементу - это отменит выделение.)
2. Добавить скачанные иконки в папку  ``` src/assets/icons/icons ```
3. В консоли запустить скрипт ``` yarn make-icons ```