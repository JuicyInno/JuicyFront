import React, {
  useCallback, useMemo, useState
} from 'react';
import Search from './Search';
import './Search.scss';
import {
  StoryDocs, StoryDocsH1, StoryDocsH3
} from '../../storybook';
import StoryContainer from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';
import { Microphone } from '../../../indexIcon';
import { IDebounceResult } from '../../../types/projects.types';

export default {
  title: 'forms/withTest/Search',
  component: Search
};

export const Demo = () => {
  const frameStyle: React.CSSProperties = {
    display: 'flex',
    gap: 16,
    flexDirection: 'column',
    maxWidth: '516px',
    border: '1px dashed #7B61FF',
    borderRadius: 5,
    padding: 16,
  };
  const [expandSearch, setExpandSearch] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Change event', e.target.value);
  };

  const onDebounce = (result: IDebounceResult) => {
    console.log('Debounce event', result.debounceString);
  };

  const onClear = () => {
    console.log('Очистка');
  };


  const onSearchFocus = useCallback(() => {
    console.log('focus');

    setExpandSearch(true);
  }, [setExpandSearch]);

  const onSearchBlur = useCallback(() => {
    console.log('blur');
    setExpandSearch(false);
  }, [setExpandSearch]);

  const expandSearchClass = useMemo(() => expandSearch ? 'expand' : '', [expandSearch]);

  return (
    <StoryDocs>
      <StoryDocsH1>Search</StoryDocsH1>
      <div style={frameStyle}>
        <Search endAdornment={<Microphone />} />
        <Search value='Приве' onChange={onChange} onDebounce={onDebounce} onClear={onClear} />
        <Search onClear={onClear} />
        <StoryDocsH3>Search expandable</StoryDocsH3>
        <div className={`task-panel__search ${expandSearchClass}`}>
          <Search
            value=''
            onChange={onChange}
            onClear={onClear}
            onDebounce={onDebounce}
            onBlur={onSearchBlur}
            onFocus={onSearchFocus} />
        </div>

      </div>

    </StoryDocs>

  );
};

Demo.parameters = {
  actions: { disabled: true },
  controls: { disabled: true },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/gDl8sDPM8Zmh5ol4ywzLrj/Design-System-VTB-Home?node-id=20799%3A55341',
  },
};

export const Playground = (args: any) => {
  return (
    <StoryContainer>
      <StoryRow>
        <Search {...args} />
      </StoryRow>
    </StoryContainer>
  );
};
