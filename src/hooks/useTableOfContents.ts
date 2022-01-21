import {
  useCallback, useEffect, useRef, useState
} from 'react';
import { map, throttleTime } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

export interface IHeadingData {
    id: string;
    htmlNode: HTMLElement;
}

export interface IUseTableOfContentsProps {
    /** Селектор для отслеживаемых заголовков/элементов */
    selector: string;
    /** Доп. зависимости для запуска парсинга тайтлов */
    deps?: any[];
  /** Блок со скроллом - по-умочанию window */
    parent?: HTMLElement;
}

export interface IActiveTitle {
  activeTitleId?: string;
  activeIndex: number;
}

export interface ITableOfContents {
  activeTitle: IActiveTitle;
  onClick: (title: IActiveTitle) => void;
}

const useTableOfContents = ({ selector, deps = [], parent }: IUseTableOfContentsProps): ITableOfContents => {
  const [activeTitle, setActiveTitle] = useState<IActiveTitle>({
    activeIndex: 0,
    activeTitleId: undefined
  });
  const [titlesNodes, setTitlesNodes] = useState<IHeadingData[]>([]);
  const clicked = useRef<boolean>(false);

  const onClick = (title: IActiveTitle) => {
    setActiveTitle(title);
    clicked.current = true;
  };

  const parseTitles = () => {
    const htmlNodes: HTMLElement[] = Array.from(document.querySelectorAll(selector));

    return htmlNodes.map((node) => ({
      id: node.id,
      htmlNode: node,
    }));
  };

  const findActiveNode = useCallback(() => {
    if (titlesNodes.length) {

      if (clicked.current) {
        clicked.current = false;
        return;
      }

      const offsets = titlesNodes.map((node) => node.htmlNode.getBoundingClientRect().top);

      let activeIndex = offsets.findIndex(offset => {
        return offset > (Math.floor((parent ? parent.offsetHeight : window.innerHeight) / 2));
      });

      /** Активируем последний заголовок если вся страница проскролена */
      const globalScroll = window.innerHeight + document.documentElement.scrollTop >= document.documentElement.scrollHeight;

      if (parent ? parent.offsetHeight + parent.scrollTop >= parent.scrollHeight : globalScroll) {
        activeIndex = titlesNodes.length - 1;

        setActiveTitle({
          activeTitleId: titlesNodes[activeIndex].id,
          activeIndex
        });

        return;
      }

      if (activeIndex === -1) {
        activeIndex = titlesNodes.length - 1;
      } else if (activeIndex > 0) {
        activeIndex -= 1;
      }

      setActiveTitle({
        activeTitleId: titlesNodes[activeIndex].id,
        activeIndex
      });
    }
  }, [titlesNodes, parent]);

  useEffect(() => {
    setTimeout(() => {
      setTitlesNodes(parseTitles());
    });
  }, [selector, ...deps]);

  useEffect(() => {
    if (!activeTitle.activeTitleId && titlesNodes.length) {
      setActiveTitle({
        activeTitleId: titlesNodes[0].id,
        activeIndex: 0
      });
    }

    const subscription = fromEvent(parent ? parent : window, 'scroll').pipe(
      throttleTime(300, undefined, {
        leading: true,
        trailing: true
      }),
      map(() => findActiveNode())
    ).subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [findActiveNode]);


  return {
    activeTitle,
    onClick
  };
};

export default useTableOfContents;
