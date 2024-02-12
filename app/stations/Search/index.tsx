import { useState } from 'react';
import Filter from './Filter';
import { FlexWrapper } from '@app/components/Modules/StyleComponents';
import { Button } from '@nextui-org/react';
import { useStationsStore } from '../../../store/stations';
import Input from './Input';

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
    <FlexWrapper className=" mobile:!gap-[0.1rem] tablet-lg:!gap-[0.5rem] mobile:!flex-wrap laptop:!flex-nowrap">
      <Filter />
      <form className="relative w-[100%]" onSubmit={(e) => e.preventDefault()}>
        <SearchIcon className="absolute left-2.5 top-1.5 tablet-lg:top-2.5 h-4 w-4 text-gray-500" />
        <div className="flex items-center gap-1 justify-between h-[100%] text-black">
          <Input
            searchType={searchType}
            inputValue={inputValue}
            setInputValue={setInputValue}
            handleEnterKey={handleEnterKey}
          />
          <Button
            className="ml-2 px-3 py-1 rounded-xl h-[100%]"
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
