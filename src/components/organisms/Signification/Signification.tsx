import React, {
  FC, ReactNode, useEffect, useRef, useState
} from 'react';

import './Signification.scss';
import { IRequestAttachment } from '../../../types/projects.types';
import {
  Button, CertReader, Chip, CircleConfirm, CircleReject, Close, Confirm, download, Hint, InputFile, Modal, PDFViewer, Tile
} from '../../../index';
import Document from '../../../assets/icons/Documents';
import { IBrowserCert, ICertResult } from '../../molecules/CertReader/CertReader';
import ContentExpander from '../../molecules/ContentExpander';
import { Certificate } from 'crypto-pro';
import Download from '../../../assets/icons/Download';
import { IFileData } from '../../../types';
import { classnames } from '../../../utils/classnames';
import { ITileProps } from '../../atoms/Tile/Tile';

export type TButtons = 'sign' | 'manual' | 'reject' | 'rejectManual';

export type ICustomTexts = {
  [key in TButtons]?: string;
};

export interface ISignifyCallback {
  file: IRequestAttachment,
  success?: TButtons,
  comment?: string,
  currentCert?: IBrowserCert
}


const buttonNamesDefault:ICustomTexts = {
  manual: 'Подписать вручную',
  reject: 'Отклонить ЭДО',
  sign: 'Подписать электронной подписью',
  rejectManual: 'Отклонить'
};


export interface IProps extends Pick<ITileProps, 'variant'> {
  /** Изначальный файл*/
  data: IRequestAttachment;
  /** Дополнительные данные о документе*/
  documentInfo?: ReactNode;
  /** заголовок*/
  title?: string;
  /** функция- результат подписания */
  onSignify?: (result: ISignifyCallback) => void;
  /** массив в котором название кнопок для скрытия */
  hideButtons?: TButtons[];
  /** показывать ли спойлер для документа
   * @default true
   */
  isSpoiler?: boolean;
  /** открыт или закрыт спойлер для документа
   * @default false
   */
  isOpenSpoiler?: boolean;
  /** фильтр сертификатов */
  filter?: (cert: Certificate) => Promise<boolean>;
  /** кастомные названия кнопок */
  buttonCustomTexts?: ICustomTexts;
  /** ссылка на pdf если надо открыть в отдельном окне */
  pdfUrl?: string;
}


const Signification:FC<IProps> = ({
  data,
  pdfUrl,
  onSignify = () => {},
  title = '',
  isSpoiler = true,
  isOpenSpoiler = false,
  documentInfo,
  variant = 'default',
  hideButtons = [],
  buttonCustomTexts = {},
  filter = async (cert) => !!~cert.issuerName.toLowerCase().indexOf('vtb')
}:IProps) => {
  /** тексты для кнопок*/
  const [textButtons, _] = useState<ICustomTexts>({
    ...buttonNamesDefault,
    ...buttonCustomTexts
  });
  /** текущий статус файла*/
  const [value, setValue] = useState<IRequestAttachment>(data);
  /** хранит текущий выбранный сертификат*/
  const [currentCert, setCurrentCert] = useState<IBrowserCert | undefined>(undefined);
  /** True если ошибка сертификатов*/
  const [certError, setCertError] = useState<boolean>(false);
  /** хранит приложеннный руками фойл*/
  const [manualFile, setManualFile] = useState<IRequestAttachment | undefined>(undefined);
  /** изначальный файл*/
  const initialFile = useRef<IRequestAttachment>(data);
  /** статус подписания*/
  const [finalStage, setFinalStage] = useState<'reject' | 'auto' | 'manual' | undefined>(undefined);
  /** открывает попап ручного подписания*/
  const [manualPopup, setManualPopup] = useState<boolean>(false);
  /** открывает попап в случае отказа подписания*/
  const [refusePopup, setRefusePopup] = useState<ICertResult|undefined|null>(undefined);
  /** открыт или закрыт спойлер*/
  const [isOpenContent, setOpenContent] = useState<boolean>(isOpenSpoiler);
  /** комментарий при отклонении*/
  const [comment, setComment] = useState<string>('');


  const status = ['auto', 'manual'].includes(finalStage || '') ? 'success' : 'danger';

  const onlyView = hideButtons?.includes('sign') && hideButtons?.includes('manual');
  // ===========
  useEffect(() => {
    data && setValue(data);
  }, [data]);
  // ===================================================================================================================

  const successHandle = (result: ICertResult) => {
    onSignify({
      file: result.data,
      success: 'sign',
      comment,
      currentCert: result.cert
    });
    setValue(result.data);
    setCurrentCert(result.cert);
    setFinalStage('auto');
    setOpenContent(false);
  };
  //* ************************************************
  const refuseHandle = (result: ICertResult) => {
    setCurrentCert(result.cert);
    setRefusePopup(result);
  };
  //* ************************************************
  const refuseHandlePopupSuccess = (comment = '') => {
    setComment(comment);
    setFinalStage('reject');
    setOpenContent(false);
    setRefusePopup(undefined);
    onSignify( {
      file: refusePopup ? refusePopup.data : initialFile.current,
      success: 'reject',
      comment,
      currentCert
    });
  };
  //* ************************************************
  const refuseHandlePopupFail = () => {
    setCurrentCert(undefined);
    setRefusePopup(undefined);
  };
  //* ************************************************
  const errorHandle = (e:Error) => {
    !~e.message.toLowerCase().indexOf('отменена пользователем') &&
    setCertError(true);
  };
  //* ************************************************
  const cancelSign = () => {
    setComment('');
    setFinalStage(undefined);
    setValue(initialFile.current);
    setCurrentCert(undefined);
    onSignify({ file: initialFile.current });

  };
  //* ************************************************
  const manualSignHandler = () => {
    setFinalStage('manual');
    const file = {
      ...value,
      ...manualFile
    };
    setValue(file);
    onSignify({
      file,
      success: 'manual',
      comment,
      currentCert
    });
    setManualPopup(false);
    setOpenContent(false);
  };
  //* ************************************************
  const setFileHandler = (file: IFileData[]) => {
    setManualFile({
      fileName: file[0].file.name,
      base64: file[0].base64
    });
  };

  const finalText = finalStage === 'auto' ?
    'Документ будет подписан сертификатом' :
    finalStage === 'manual' ?
      'Документ будет подписан ручной подписью' :
      'Документ будет отклонен';

  // =======================================================================================================================================
  const hasButtons =
    !hideButtons?.includes('sign') ||
    !hideButtons?.includes('manual') ||
    !hideButtons?.includes('reject') ||
    !hideButtons?.includes('rejectManual');

  const buttonsTSX = !finalStage && hasButtons &&
    <div className='buttons__wrapper'>
      {!hideButtons?.includes('sign') &&
        <div className='button__item'>
          <CertReader
            buttonTitle={textButtons.sign}
            filter={filter}
            file={data}
            onSuccess={successHandle}
            onError={errorHandle}
          />
        </div>
      }

      {!hideButtons?.includes('manual') &&
        <div className='button__item'>
          <Button buttonType='light' onClick={() => setManualPopup(true)}>{textButtons.manual}</Button>
        </div>
      }

      {!hideButtons?.includes('reject') &&
        <div className='button__item'>
          <CertReader
            buttonTitle={textButtons.reject}
            btnProps={{ buttonType: 'danger' }}
            filter={filter}
            file={data}
            onSuccess={refuseHandle}
            onError={errorHandle}
          />
        </div>
      }

      {!hideButtons?.includes('rejectManual') &&
        <div className='button__item'>
          <Button buttonType='danger' onClick={() => setRefusePopup(null)}>{textButtons.rejectManual}</Button>
        </div>
      }
    </div>;

  // =======================================================================================================================================
  const manualFileChipTSX = (name: string, onClick:(e:any) => void) =>
    <div className='manual__chip-wrapper'>
      <Chip onClick={() => manualFile && download(manualFile)} size='s' type='outline'>
        <div className='manual__chip-text'>
          {name}
          <div className='manual__chip-button' onClick={onClick}>
            <Close/>
          </div>
        </div>
      </Chip>
    </div>;

  // =======================================================================================================================================

  const finalCardTSX = finalStage &&
    <>
      <div
        style={{ alignItems: status === 'success' ? 'center' : 'start' }}
        className={`info-block__wrapper info-block__wrapper--${status}`}
      >
        <div className='info-block__icon'>
          {finalStage === 'reject' ?
            <CircleReject width='40px' height='40px' color1='#DA0B20' color2='#FFFFFF'/> :
            <CircleConfirm width='40px' height='40px' color1='#2ABB5B' color2='#FFFFFF'/>
          }
        </div>

        <div className='info-block__text-wrapper'>
          <div className={`info-block__main-text info-block__main-text--${status}`}>
            {finalText}
          </div>

          {['auto', 'reject'].includes(finalStage) &&
            <>
              {
                currentCert &&
                <div className='info-block__text '>{`${currentCert?.name} ${currentCert?.issuerName}`.slice(0, 100)}</div>
              }
              {
                comment &&
                <div className='info-block__comment'>
                  {comment}
                </div>}
            </>
          }
        </div>
        <div style={{ paddingTop: finalStage !== 'reject' ? 0 : '12px' }} className='info-block__button'>
          <Button onClick={cancelSign} buttonType='text'>
            <div className='info-block__button-inner'>
            Отменить
            </div>
          </Button>
        </div>
      </div>

      {finalStage === 'manual' && manualFileChipTSX(
        value.fileName,
        (e:Event) => {
          e.stopPropagation();
          cancelSign();
        }
      )}

    </>;

  // =======================================================================================================================================
  const refuseConfirmTSX = refusePopup !== undefined &&
    <Modal size='l'>
      <Confirm
        textAccept='Отклонить документ'
        text='Выбранный документ будет отклонен. Подтвердить отклонение документа?'
        onClose={refuseHandlePopupFail}
        onAction={refuseHandlePopupSuccess}
        comment=''
        showComment
      />
    </Modal>;

  // =======================================================================================================================================
  const manualPopupTSX = manualPopup &&
    <Modal size='xl'>
      <div className='manual__wrapper'>
        <div className='manual__header'>
          <div>Подписать вручную</div>
          <div className='manual__close' onClick={() => setManualPopup(false)}>
            <Close/>
          </div>
        </div>
        <div className='manual__hint-wrapper'>
          <Hint
            button={
              <Button
                onClick={() => download(value)}
                buttonType='text'
                startAdornment={<Download/>}
              >
                  Скачать
              </Button>
            }
            icon='info'
            maxWidth='648px'
            title='Название'
            variant='default'
          >
            Скачайте и подпишите документ. После прикрепите подписанный файл
          </Hint>
        </div>

        {manualFile && manualFileChipTSX(manualFile.fileName, (e:Event) => {
          e.stopPropagation();
          setManualFile(undefined);
        })}

        <div className='modal_buttons'>
          <div className='modal_button'>
            <InputFile showChips={false} multiple={false} setFile={setFileHandler} buttonType='light' placeholder='Прикрепить файл'/>
          </div>
          <div className='modal_button'>
            <Button onClick={manualSignHandler} disabled={!manualFile}>Подписать</Button>
          </div>
        </div>
      </div>
    </Modal>;

  // =======================================================================================================================================
  const certErrorTSX = certError && !finalStage &&
   <div data-testid='error' className='cert-error__wrapper'>
     <Hint
       button={
         <Button
           onClick={() => window.open('https://intranet.vtb.com/podrazdeleniya/pik/dppsis/support/Pages/default.aspx')}
           buttonType='text'
           textColor='red'
           startAdornment={<Download/>}
         >
          Инструкция
         </Button>
       }
       icon='info'
       maxWidth='648px'
       title='Не найден сертификат, который осуществляет подпись'
       variant='red'
     >
        Для получения сертификата ЭП (электронная подпись) ознакомьтесь, пожалуйста, с инструкцией
     </Hint>
   </div>;

  // =======================================================================================================================================
  const expanderContentTSX = <>
    {buttonsTSX}
    {(!finalStage || isSpoiler) &&
      <PDFViewer
        url={pdfUrl}
        file={data}
      />
    }
  </>;

  return <div className='signification__wrapper'>
    <Tile variant={variant}>
      <div className={classnames('signification__title-row', onlyView && 'signification__title-row--onlyView')}>
        <Document color1={onlyView ? '#F1F2F4' : undefined}/>
        <div className='signification__title-text'>{title}</div>
      </div>

      {documentInfo && <div className='signification__doc-info'>{documentInfo}</div>}
      {finalCardTSX}
      {certErrorTSX}
      {!isSpoiler && expanderContentTSX}

      {isSpoiler &&
        <>
          <ContentExpander
            onExpand={() => setOpenContent(!isOpenContent)}
            expanded={isOpenContent}
            title={isOpenContent ? 'Скрыть' : `Просмотреть${!finalStage && !onlyView ? ' и подписать документ' : ''} `}
          >
            {isOpenContent &&
              <div className={classnames(hasButtons && 'signification__expander-content')}>
                {expanderContentTSX}
              </div>
            }
          </ContentExpander>
        </>}
    </Tile>

    {manualPopupTSX}
    {refuseConfirmTSX}
  </div>;
};

export default Signification;
