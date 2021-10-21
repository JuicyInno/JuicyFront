import React, { FC, useState } from 'react';
import Tile from '../../atoms/Tile';
import Tag from '../../atoms/Tag';
import FormGroup from '../../atoms/FormGroup';
import Textarea from '../../atoms/Textarea';
import Toast from '../../atoms/Toast';
import Button from '../../atoms/Button';

import Copy from '../../../assets/icons/Copy';

import { Variant } from '../../../types';
import { IDebounceResult } from '../../../types/projects.types';

import './CommentTile.scss';

// export interface ICommentTileValues { // вынести
//     /** Начальное значение поиска*/
//     file?: string,
//     /** Начальное значение комментария*/
//     comment?: string,
//     debounce?: number;
// }

export interface ICommentTileProps {
    /** Начальный комментарий */
    comment?: string;
    /** Срабатывает при изменении значения*/
    // onChange?: (values: ICommentTileValues) => void,
    onDebounce?: (result: IDebounceResult) => void,
}

const Attachments: FC<ICommentTileProps> = ({
    comment = '',
    // onChange = (e: any) => console.log(e),
    onDebounce = () => console.log('333'),
}: ICommentTileProps) => {
    const [value, setValue] = useState(comment);
    const MAX_LENGTH = 255;

    // const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    //     setValue(event.target.value);
    // };

    const changeSearchHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newValues = {
            comment: event.target.value
        };
        // onChange(newValues)
    };

    return <div className='rf-comment-tile__wrapper'>
        <Tile className='rf-comment-tile'>
            <h1 className='rf-comment-tile__title'>Комментарии и файлы</h1>
            <FormGroup className='rf-comment-tile__input-wrapper' label={'Комментарий'} labelSecondary={`(${value.length}/${MAX_LENGTH})`}>
                <Textarea onChange={changeSearchHandler} value={value} placeholder='Оставить комментарий' />
            </FormGroup>
            <Button className='rf-comment-tile-button' buttonType='light' size='m'>Прикрепить файл</Button>
        </Tile>
    </div>;
};

export default Attachments;
