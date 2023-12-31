'use client';
import { IGameInfo, IGameInput } from '@/@types/games';
import React, { ReactNode, useCallback, useState } from 'react';
import ReactPaginate from 'react-paginate';
import * as S from './style';
import { useTranslations } from 'next-intl';
import { Tag } from '../Tag';
interface IPaginationProps {
  games: IGameInfo[] | undefined;
  fetchGame: (input?: IGameInput) => void;
  loading: boolean;
  children: ReactNode;
}

//Pagination component
export function Pagination({ games, fetchGame, children }: IPaginationProps) {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const selectValues = [8, 16, 32, 60];
  const [itemsPerPage, setItemsPerPage] = useState<number>(selectValues[0]);
  const t = useTranslations();
  const count = games?.[0]?.count;
  const pageCount = count ? Math.ceil(count / itemsPerPage) - 1 : 1;

  //Executes a new request when paging indexes are touched
  const handlePageClick = useCallback(
    (data: { selected: number }) => {
      setCurrentPage(data.selected);
      fetchGame({ page: data.selected + 1, page_size: itemsPerPage });
    },
    [fetchGame, itemsPerPage],
  );

  //Executes a new request when indexes per page are changed
  const handlePageChangeSize = (value: number) => {
    fetchGame({ page: currentPage + 1, page_size: value });
    setItemsPerPage(value);
  };

  return (
    <div accessKey='2'>
      <S.MenuPaginate>
        <Tag>{t('Games.title')}</Tag>
        <select
          value={itemsPerPage}
          onChange={(e) => {
            handlePageChangeSize(Number(e.target.value));
          }}
        >
          {selectValues.map((item) => {
            return (
              <option key={`select-item-per-page${item}`} value={item}>
                {item} / {t('Pagination.perPage')}
              </option>
            );
          })}
        </select>
      </S.MenuPaginate>
      <S.Content>
        <div className='flex flex-wrap gap-[20px] justify-center'>
          {children}
        </div>
        <S.ReactPaginate className='font-big'>
          <ReactPaginate
            pageCount={pageCount}
            pageRangeDisplayed={5}
            marginPagesDisplayed={1}
            previousLabel={t('Pagination.previous')}
            nextLabel={t('Pagination.next')}
            breakLabel={'...'}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            activeClassName={'active'}
            initialPage={currentPage}
          />
        </S.ReactPaginate>
      </S.Content>
    </div>
  );
}
