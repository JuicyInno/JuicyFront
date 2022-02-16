import React, {
  useEffect, useRef, useState
} from 'react';
import { Story } from '@storybook/react';
import { IOption } from '../../../types';
import StoryRow from '../../storybook/StoryRow';
import StoryItem from '../../storybook/StoryItem';
import StoryContainer from '../../storybook/Story';
import Button from '../Button';
import FormGroup from '../FormGroup';
import { AllIconPlace } from '../../../indexIcon';
import Select from '.';
import Input from '../Input';

export default {
  title: 'forms/withTest/Select',
  component: Select,
};

const list: IOption[] = [];

const list2: IOption[] = [
  {
    value: '0',
    label: 'Москва'
  },
  {
    value: '1',
    label: 'Санкт-Петербург'
  },
  {
    value: '2',
    label: 'Новосибирск'
  },
  {
    value: '3',
    label: 'Екатеринбург'
  },
  {
    value: '4',
    label: 'Казань'
  },
  {
    value: '5',
    label: 'Нижний Новгород'
  },
  {
    value: '6',
    label: 'Челябинск'
  },
  {
    value: '7',
    label: 'Самара'
  },
  {
    value: '8',
    label: 'Омск'
  },
  {
    value: '9',
    label: 'Ростов-на-Дону'
  },
  {
    value: '10',
    label: 'Уфа'
  },
  {
    value: '11',
    label: 'Красноярск'
  },
  {
    value: '12',
    label: 'Воронеж'
  },
  {
    value: '13',
    label: 'Пермь'
  },
  {
    value: '14',
    label: 'Волгоград'
  },

];

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

  const onChangeMultiselect = (options: IOption[]) => {

    setCities(options);

  };

  const [filteredOptions, setFilteredOptions] = useState<IOption[]>(list);
  const [loading, setLoading] = useState<boolean>(false);
  const timer = useRef<any>(undefined);

  const filterWithDelay = (query: string) => {
    if (query === '') {
      setFilteredOptions(list2);
      return;
    }

    setLoading(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      const filtered = list2.filter((o: IOption) => o.label.toLowerCase().includes(query.toLowerCase()));
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

  const [state, setState] = useState([]);
  const [state1, setState1] = useState([]);
  const [cities, setCities] = useState<IOption[]>([]);

  const onChange1 = (options: IOption[]) => {
    // @ts-ignore
    setState(options);
  };

  const onChange2 = (options: IOption[]) => {
    // @ts-ignore
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
    <StoryContainer name='Select' description='виды Select' width={400}>
      <form action='' onSubmit={() => console.log('submit')}>
        <StoryItem description='Select default'>
          <FormGroup label={'Label'}>
            <Select
              placeholder='Placeholder'
              options={[]}
              variant='base'
              values={state}
              onChange={onChange2}

            />
          </FormGroup>
        </StoryItem>
        <StoryItem description='Select invalid'>
          <FormGroup label='Label' invalid errorMessage='Error'>
            <Select
              placeholder='Выберите значение'
              options={list}
              values={state1}
              invalid
              onChange={onChange2}
              preloader={loading}
            />
          </FormGroup>
        </StoryItem>
        <StoryItem description='Select disabled'>
          <FormGroup label='Label' >
            <Select
              placeholder='Выберите значение'
              options={list}
              values={state1}
              disabled
              onChange={onChange2}
              preloader={loading}
            />
          </FormGroup>
        </StoryItem>
        <StoryItem description='Select start adornment'>
          <FormGroup label='Label' >
            <Select
              placeholder='Выберите значение'
              options={list}
              values={state1}
              onChange={onChange2}
              preloader={loading}
              startAdornment={<AllIconPlace size='s' />}
            />
          </FormGroup>
        </StoryItem>

        <StoryItem description='Multiselect'>
          <Select
            placeholder='Выберите город'
            options={filteredOptions}
            values={cities}
            onChange={onChangeMultiselect}
            onSearch={onSearch}
            multiselect
            maxOptions={5}
            preloader={loading}
          />
        </StoryItem>

        <StoryItem description='Изменяемое значение извне'>
          <Button
            onClick={() => {
              // @ts-ignore
              setState([list[1]]);
            }}
          >
            Set State
          </Button>
          <div style={{ height: '20px' }} />
          <Select
            placeholder='Выберите значение'
            options={list}
            values={state}
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
            onChange={onChange2}
            preloader={loading}
          />
        </StoryItem>

        <StoryItem description='Disabled'>
          <Select
            placeholder='Выберите значение'
            options={list}
            values={state}
            onChange={onChange2}
            preloader={loading}
            disabled={disabled}
          />
          <br />
          <Button onClick={() => setDisabled(!disabled)}>toggle disabled</Button>
        </StoryItem>
        <StoryItem description='Tag select'>
          <FormGroup label={'Tag select'}>
            <Input placeholder={'Это текстовый инпут'} />

            <Select
              variant={'tag'}
              placeholder='$'
              options={list}
              values={state}
              onChange={onChange2}
              preloader={loading}
            />
          </FormGroup>
          <br />
          <Button onClick={() => setDisabled(!disabled)}>toggle disabled</Button>
        </StoryItem>
        <StoryItem description='Select Menu Button'>
          <FormGroup label={'Default Menu Button'}>
            <div style={{ width: '168px', }}>
              <Select
                placeholder='Placeholder'
                options={list}
                variant='menu'
                values={state}
                onChange={onChange2}
                dropdownMaxWidth={'240px'}
              />
            </div>
          </FormGroup>
        </StoryItem>
        <StoryItem description='Select Menu Button'>
          <FormGroup label={'Feedback Menu Button'}>
            <div style={{ width: '168px', }}>
              <Select
                placeholder='Placeholder'
                options={list}
                variant='menu'
                values={state}
                onChange={onChange2}
                dropdownMaxWidth={'240px'}
                menuVariantSize='s'
              />
            </div>
          </FormGroup>
        </StoryItem>
        <StoryItem description='Select Menu Button'>
          <FormGroup label={'Select Menu Button disabled'}>
            <div style={{ width: '168px', }}>
              <Select
                placeholder='Placeholder'
                options={list}
                variant='menu'
                disabled
                values={state}
                onChange={onChange2}
                dropdownMaxWidth={'240px'}
                menuVariantSize='m'
              />
            </div>
          </FormGroup>
        </StoryItem>
        <StoryItem description='Select Menu Button'>
          <FormGroup label={'Select Menu Button preloader'}>
            <div style={{ width: '168px', }}>
              <Select
                placeholder='Placeholder'
                options={[]}
                variant='menu'
                disabled
                values={state}
                onChange={onChange2}
                dropdownMaxWidth={'240px'}
                menuVariantSize='m'
              />
            </div>
          </FormGroup>
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
              onChange={() => { }}
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
          <Select placeholder='Выберите значение' values={[]} options={list} onChange={() => { }} {...args} />
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
