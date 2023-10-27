'use client';
import { IGenres, IPlatformInfo } from '@/@types/Games';
import Link from 'next/link';
import * as S from './style';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Badge } from '../Badge';
import { AiFillStar } from 'react-icons/ai';
import { useTheme } from 'styled-components';
import { Genres } from '../Genres';
import { Platforms } from '../Platforms';

interface IGameCard {
  id: number;
  name: string;
  backgroundImage: string;
  genres: IGenres[];
  platforms: IPlatformInfo[];
  metacritic: number;
}
export function GameCard({
  id,
  name,
  backgroundImage,
  genres,
  platforms,
  metacritic,
}: IGameCard) {
  const t = useTranslations('Game');
  const theme = useTheme();
  return (
    <S.GameCard>
      <Link href={`/games/${id}`}>
        <Image
          loader={() => backgroundImage}
          src={backgroundImage}
          width={100}
          height={200}
          alt={t('altImage', { name: name })}
        />
        <S.ContentCard>
          <h3>{name}</h3>
          <div className='flex justify-between'>
            <Genres data={genres} />
            <Badge
              label={String(metacritic)}
              isSmall
              color='white'
              icon={<AiFillStar fill={theme.yellow} />}
            />
          </div>
          <Platforms data={platforms} />
        </S.ContentCard>
      </Link>
    </S.GameCard>
  );
}