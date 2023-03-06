const Search = ({ search, setSearch }) => {
  return (
    <div>
      <h1 className="title">😎 EmojiSearch 😎</h1>
      <input
        onChange={(event) => {
          setSearch(event.target.value);
        }}
        value={search}
        className="searchbar"
        type="text"
        placeholder="what emoji are you looking for"
      />
    </div>
  );
};
export default Search;
