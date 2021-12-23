import React, {
  useEffect, useRef, useState
} from 'react';
import { Story } from '@storybook/react';

import Select from './Select';
import { IOption } from '../../../types';
import StoryRow from '../../storybook/StoryRow';
import StoryItem from '../../storybook/StoryItem';
import StoryContainer from '../../storybook/Story';
import Button from '../Button';
import InputNumber from '../InputNumber';

export default {
  title: 'forms/не проверено/Select',
  component: Select,
};

const list: IOption[] = [];

for (let i = 1; i < 15; i++) {
  list.push({
    value: `${i}`,
    label: `Вариант ${i} Изменяемое значение извне Изменяемое значение извне Изменяемое значение извне`,
    disabled: i % 6 === 0,
  });
}

export const Demo = () => {
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
  const [state2, setState2] = useState(true);

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
      label: 'РOO',
      value: '1',
    },
  ];

  const [disabled, setDisabled] = useState(true);

  return (
    <StoryContainer name='Select' description='Select кнопки' width={400}>
      <form action='' onSubmit={() => console.log('submit')}>
        <StoryItem description='Multiselect'>
          <Select
            placeholder='Выберите значение'
            options={filteredOptions}
            values={values}
            invalid={true}
            tagsPosition='outside'
            onChange={onChange}
            onSearch={onSearch}
            multiselect
            preloader={loading}
          />
        </StoryItem>

        <StoryItem description='Изменяемое значение извне'>
          <Button
            onClick={() => {
              setState([list[1]]);
              setState2(!state2);
            }}
          >
            Set State
          </Button>
          <div style={{ height: '20px' }} />
          <Select
            placeholder='Выберите значение'
            options={filteredOptions}
            values={state}
            invalid={state2}
            tagsPosition='outside'
            onChange={onChange1}
            onSearch={onSearch}
            preloader={loading}
          />
        </StoryItem>

        <StoryItem description='Readonly Select'>
          <Select
            placeholder='Выберите значение'
            readOnly
            options={list}
            values={state1}
            tagsPosition='outside'
            onChange={onChange2}
            preloader={loading}
          />
        </StoryItem>

        <StoryItem description='Disabled'>
          <Select
            placeholder='Выберите значение'
            options={list}
            values={state1}
            onChange={onChange2}
            preloader={loading}
            disabled={disabled}
          />
          <br />
          <Button onClick={() => setDisabled(!disabled)}>toggle disabled</Button>
        </StoryItem>

        <StoryItem description='Tag Select'>
          <div style={{ position: 'relative' }}>
            <InputNumber defaultValue={'1200.60'} floatPoints={2} />
            <Select
              placeholder='Выберите значение'
              readOnly
              variant='tag'
              options={currencies}
              values={state1}
              onChange={onChange2}
              preloader={loading}
            />
          </div>
        </StoryItem>

        <StoryItem description='Small options'>
          <Select
            placeholder='Выберите значение'
            options={[
              {
                value: 'v',
                label: 'label'
              }
            ]}
            values={[]}
            onChange={onChange2}
          />
        </StoryItem>
      </form>
    </StoryContainer>
  );
};

export const LazySelect: Story = () => {
  const [list, setList] = useState<IOption[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [totalItems, setTotalItems] = useState<number>(0);
  const limit = 10;

  const onSearch = (query: string, isPagination?: boolean) => {
    if (!query) {
      return;
    }

    const offset = isPagination ? list.length : 0;

    setIsLoading(true);

    return fetch(`https://jsonplaceholder.typicode.com/todos?_start=${offset}&_limit=${limit}`)
      .then((response) => response.json())
      .then((json) => {
        const resList = json.map((item: any) => ({
          value: item.id,
          label: item.title,
        }));

        setList((prevList) => (isPagination ? [...prevList, ...resList] : resList));

        setTotalItems(200);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const hasMore = !isLoading && list.length < totalItems;

  return (
    <StoryContainer>
      <StoryRow>
        <StoryItem subtitle='Асинхронный select с InfinityScroll' description='Для примера используется апи jsonplaceholder.typicode.com'>
          <form>
            <Select
              placeholder='Поиск'
              values={[]}
              options={list}
              onChange={() => {}}
              isAsync
              infinityScrollProps={{
                hasMore,
                dataLength: list.length,
              }}
              onSearch={onSearch}
            />
          </form>
        </StoryItem>
      </StoryRow>
    </StoryContainer>
  );
};

export const Playground: Story = (args) => {
  return (
    <StoryContainer>
      <StoryRow>
        <StoryItem description='Select'>
          <Select placeholder='Выберите значение' values={[]} options={list} onChange={() => {}} {...args} />
        </StoryItem>
      </StoryRow>
    </StoryContainer>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=4%3A15730',
  },
};
