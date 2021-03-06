import { IAccordion } from './Accordion';

const data: IAccordion[] = [
  {
    title: 'Заголовок',
    content: 'Контент',
  },
  {
    title: 'Второй заголовок',
    content: `
    Будущее игр никогда не было таким вдохновляющим. 
    Творчество в играх процветает. Новые сервисы позволяют находить больше игр, а также приближают игроков к любимым играм, стримерам и создателям. 
    Облако создает огромную возможность для потоковой передачи игр консольного уровня, что позволит людям играть с теми игроками, с кем хочется и где захочется. 
    И для многих из нас нет ничего более вдохновляющего, чем рассвет нового поколения консолей.`
  },
  {
    title: 'Третий заголовок (Disabled)',
    content: 'Конетнт 3',
    disabled: true
  },
  {
    title: 'Четвертый заголовок',
    content: 'Конетнт 4'
  }
];

export default data;
