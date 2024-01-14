import { useState } from 'react';
import Filter from './Filter';
import { FlexWrapper } from '@app/components/Modules/StyleComponents';
import { Button } from '@nextui-org/react';
import { useStationsStore } from '../../../store/stations';

interface ISearchIconProps {
  className: string;
}
const SearchIcon = (props: ISearchIconProps) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

interface IProps {
  onSearch: Function;
}

const Search = (props: IProps): JSX.Element => {
  const { onSearch } = props;
  const { searchType } = useStationsStore((state) => state.filter);
  const [inputValue, setInputValue] = useState<string>('');
  const handleEnterKey = (e: any): void => {
    e.preventDefault();
    if (e.keyCode === 13) {
      onSearch(inputValue);
    }
  };

  return (
    <FlexWrapper>
      <Filter />
      <form className="relative w-[100%]" onSubmit={(e) => e.preventDefault()}>
        <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
        <div className="flex items-center gap-1 justify-between h-[100%] text-black">
          <input
            name="search"
            className="pl-8 py-1 w-[100%] h-[100%] rounded-xl"
            placeholder={searchType === 'address' ? '주소명/지역명' : '충전소명'}
            type="search"
            value={inputValue}
            onChange={(e) => setInputValue(e.currentTarget.value)}
            onKeyUp={handleEnterKey}
          />
          <Button
            className="ml-2 px-3 py-1 rounded-xl"
            color="primary"
            onClick={(_) => {
              onSearch(inputValue);
            }}
          >
            검색
          </Button>
        </div>
      </form>
    </FlexWrapper>
  );
};

export default Search;
