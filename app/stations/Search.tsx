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

const Search = (props) => {
  return (
    <form className="relative mb-4">
      <SearchIcon className="absolute left-2.5 top-1.5 h-4 w-4 text-gray-500" />
      <div className="flex items-center justify-between text-black">
        <input className="pl-8 py-1 w-[100%] rounded-md" placeholder="충전소명 or 지역을 입력해주세요." type="search" />
        <button className="ml-2 px-3 py-1 rounded-md bg-blue-500 text-white">Search</button>
      </div>
    </form>
  );
};

export default Search;
