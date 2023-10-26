'use client';

import * as S from './style';
import { useRef, useState } from 'react';
import { useGameList } from '@/hooks/useGameList';
import { ListView } from './listView';
import { useTheme } from '@/contexts/Theme';

export function SearchBar() {
  const { theme } = useTheme();
  const [query, setQuery] = useState<string>('');
  const [focus, setFocus] = useState<boolean>(false);
  const { fetchGames, gameList, loading } = useGameList();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchGames({ search: query });
  };

  const timerRef = useRef<NodeJS.Timeout | null>(setTimeout(() => {}, 0));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);

    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(async () => {
      fetchGames({ search: e.target.value });
    }, 600);
  };

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit} theme={theme}>
        <S.Input
          type='text'
          name=''
          value={query}
          onChange={handleChange}
          onFocus={() => {
            fetchGames({ search: query }).then(() => setFocus(true));
          }}
          onBlur={() => {
            setTimeout(async () => {
              setQuery(''), setFocus(false);
            }, 150);
          }}
        />
        <button type='submit'>Search</button>
      </S.Form>
      {focus && <ListView loading={loading} games={gameList} />}
    </S.Wrapper>
  );
}