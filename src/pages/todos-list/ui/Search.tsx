import { useTodos } from '@/entities/todo';
import { Input } from '@/shared/ui';
import { memo, useEffect, useState } from 'react';

const Search: React.FC<{ handleSetQuery: (query: any) => void }> = memo(({ handleSetQuery }) => {
  const { todosIsEmpty } = useTodos();
  const [inputSearch, setInputSearch] = useState<string>('');

  useEffect(() => {
    if (todosIsEmpty) {
      setInputSearch('');
    }

    const query = { query: inputSearch };

    handleSetQuery(query);
  }, [todosIsEmpty, inputSearch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearch(e.target.value);
  };

  return (
    <div className="container">
      <Input
        value={inputSearch}
        disabled={todosIsEmpty}
        onChange={handleInputChange}
        type="search"
        placeholder="query?:[completed?, reversed?, uncompleted?]"
      />
    </div>
  );
});

export default Search;
