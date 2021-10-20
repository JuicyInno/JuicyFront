import { ICard } from './Card';
import { usersMocks } from '../../popups/FindUsers/users.mocks';

export const data: ICard[] = [
    {
        title: 'Надбавка за увеличение объёма продаж',
        requestNumber: '347347347',
        date: '01.01.2021',
        statusText: 'На согласовании',
        statusColor: 'yellow',
        users: usersMocks.slice(0, 1),
        onClick: () => { }
    },
    {
        title: 'Изменение ОШС',
        requestNumber: '347347347',
        date: '01.01.2021',
        statusText: 'На согласовании',
        statusColor: 'yellow',
        users: usersMocks.slice(0, 1).map((user, index) => ({ ...user, role: 'Инициатор' })),
        onClick: () => { }
    },
    {
        title: 'Заявка на перевод',
        requestNumber: '347347347',
        date: '01.01.2021',
        statusText: 'На согласовании',
        statusColor: 'yellow',
        users: usersMocks.slice(0, 1),
        onClick: () => { }
    },
    {
        title: 'Заявка на изменение основной выплаты',
        requestNumber: '0349',
        date: '21.05.2021',
        statusText: 'На согласовании',
        statusColor: 'yellow',
        users: usersMocks.slice(1, 2),
        onClick: () => { }
    },
    {
        title: 'Заявка на увольнение по соглашению сторон',
        requestNumber: '0349',
        date: '21.10.2021',
        statusText: 'На согласовании',
        statusColor: 'yellow',
        users: usersMocks.slice(0, 1),
        onClick: () => { }
    },
    {
        title: 'Заявка на совмещение обязанностей',
        requestNumber: '0349',
        date: '21.10.2021',
        statusText: 'На согласовании',
        statusColor: 'yellow',
        users: usersMocks.slice(0, 2)
            .map((user, index) => index === 1
                ? { ...user, period: '04.04.2021 - 09.11.2021', role: 'Совмещающий должность', position: null }
                : { ...user, role: 'Отсутствующий работник', position: null }),
        onClick: () => { }
    },
];