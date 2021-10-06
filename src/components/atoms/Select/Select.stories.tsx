import React, {
  useEffect, useRef, useState
} from 'react';
import Select from './Select';
import { IOption } from '../../../types';
import StoryItem from '../../storybook/StoryItem';
import Story from '../../storybook/Story';
import Button from '../Button';
import InputNumber from '../InputNumber';

export default {
  title: 'Form Controls/Select',
  component: Select
};

const list: IOption[] = [];

for (let i = 1; i < 15; i++) {
  list.push({
    value: `${i}`,
    label: `Вариант ${i} Изменяемое значение извне Изменяемое значение извне Изменяемое значение извне`,
    disabled: i % 6 === 0
  });
}

export const select = () => {
  const [values, setValues] = useState<IOption[]>([]);


  const onChange = (options: IOption[]) => {
    console.log(options);
  };

  const [filteredOptions, setFilteredOptions] = useState<IOption[]>(list);
  const [loading, setLoading] = useState<boolean>(false);
  const timer = useRef<any>(undefined);

  const filterWithDelay = (query: string) => {
    if (query === '') {
      setFilteredOptions(list);
      return;
    }

    setLoading(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      const filtered = list.filter((o: IOption) => o.label.toLowerCase().includes(query.toLowerCase()));
      setFilteredOptions(filtered);
      setLoading(false);
    }, 1000);
  };

  const onSearch = (query: string) => {
    filterWithDelay(query);
  };

  useEffect(() => {
    setTimeout(() => {
      setValues([list[3]]);
    }, 1000);
  }, []);

  const [state, setState] = useState([list[0]]);
  const [state1, setState1] = useState([list[1]]);

  const onChange1 = (options: IOption[]) => {
    console.log(options);
    setState(options);
  };

  const onChange2 = (options: IOption[]) => {
    console.log(options);
    setState1(options);
  };

  const currencies = [
    {
      label: 'Р',
      value: '1'
    }
  ];

  return (
    <Story name='Select' description='Select кнопки' width={400}>
      <form action='' onSubmit={() => console.log('submit')}>
        <StoryItem description='Multiselect'>
          <Select placeholder='Выберите значение'
            options={ filteredOptions }
            values={values}
            tagsPosition='outside'
            onChange={onChange}
            onSearch={onSearch}
            multiselect
            preloader={loading}/>
        </StoryItem>

        <StoryItem description='Изменяемое значение извне'>
          <Button onClick={() => setState([list[1]])}>Set State</Button>
          <div style={{ height: '20px' }}/>
          <Select placeholder='Выберите значение'
            options={ filteredOptions }
            values={state}
            tagsPosition='outside'
            onChange={onChange1}
            onSearch={onSearch}
            preloader={loading}/>
        </StoryItem>

        <StoryItem description='Readonly Select'>
          <Select placeholder='Выберите значение'
            readOnly
            options={ list }
            values={state1}
            tagsPosition='outside'
            onChange={onChange2}
            preloader={loading}/>
        </StoryItem>

        <StoryItem description='Tag Select'>
          <div style={{ position: 'relative' }}>
            <InputNumber defaultValue={'1200.60'} floatPoints={2} />
            <Select placeholder='Выберите значение'
              readOnly
              variant='tag'
              options={ currencies }
              values={state1}
              onChange={onChange2}
              preloader={loading}/>
          </div>

        </StoryItem>

      </form>
    </Story>
  );
};
