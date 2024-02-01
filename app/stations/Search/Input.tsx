import { TSearchType } from '@app/types/stations/filter';
import React, { KeyboardEvent } from 'react';

interface IProps {
  searchType: TSearchType;
  inputValue: string;
  setInputValue: (nextState: string) => void;
  handleEnterKey: (e: KeyboardEvent<HTMLInputElement>) => void;
}

const Input = ({ searchType, inputValue, setInputValue, handleEnterKey }: IProps) => (
  <input
    name="search"
    className="pl-8 py-1 w-[100%] h-[100%] rounded-xl"
    placeholder={searchType === 'address' ? '주소명/지역명' : '충전소명'}
    type="search"
    value={inputValue}
    onChange={(e) => setInputValue(e.currentTarget.value)}
    onKeyUp={handleEnterKey}
  />
);

export default Input;
