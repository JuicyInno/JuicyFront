import React, { FC, useState } from 'react';

import Tile from '../../atoms/Tile';
import Tag from '../../atoms/Tag';
import UserPhoto from '../../atoms/UserPhoto';
import Tooltip from '../../atoms/Tooltip';
import Toast from '../../atoms/Toast';
import Button from '../../atoms/Button';

import Copy from '../../../assets/icons/Copy';

import { Variant } from '../../../types';
import { IUser } from '../../../types/projects.types';

import './CommentTile.scss';

export interface ICommentTile {
    /** Комментарий */
    comment?: string;
}

const Attachments: FC<ICommentTile> = ({
    comment = 'Ky',
}) => {

    // const [isCopied, setIsCopied] = useState(false);

    return <div className='rf-comment-tile__wrapper'>
        <Tile className='rf-comment-tile__tile'>
            {comment}
        </Tile>
    </div>;
};

export default Attachments;
