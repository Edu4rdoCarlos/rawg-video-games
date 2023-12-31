export interface ISkeletonProps {
  type?: 'searchBarItem' | 'detailedCard';
}

//A component that displays a component replacement upon wait on request
export default function Skeleton({ type }: ISkeletonProps) {
  const allSkeleton: { [key: string]: JSX.Element } = {
    searchBarItem: (
      <ul>
        {[...Array(5)].map((movie, index) => (
          <li
            key={index}
            className='relative animate-pulse flex flex-row py-1 px-[10px] gap-2'
          >
            <div className='aspect-square h-[30px] w-[60px] overflow-hidden  bg-gray-300'></div>
            <p className='mt-2 block h-4 w-[80%] rounded-lg bg-gray-600 text-sm font-medium'></p>
          </li>
        ))}
      </ul>
    ),
    detailedCard: (
      <ul>
        {[...Array(1)].map((movie, index) => (
          <li
            key={index}
            className='relative animate-pulse flex flex-row py-1 px-[10px] gap-2 justify-center'
          >
            <div className='aspect-square h-[500px] rounded-[12px] w-[1300px] overflow-hidden  bg-gray-300'></div>
          </li>
        ))}
      </ul>
    ),
    gamesList: (
      <div className='w-full flex flex-col'>
        <ul className='flex flex-wrap justify-between align-center gap-[20px]'>
          {[...Array(8)].map((movie, index) => (
            <li
              key={index}
              className='relative animate-pulse max-w-[330px] w-full'
            >
              <div className='aspect-square h-[180px] w-full overflow-hidden rounded-lg bg-gray-300'></div>
              <p className='mt-2 h-4 w-1/2 rounded-lg h-[22px] bg-gray-600'></p>
              <p className='mt-2 block h-4 rounded-lg h-[22px] bg-gray-600 text-sm font-medium'></p>
              <p className='mt-2 block h-4 rounded-lg h-[22px] bg-gray-600 text-sm font-medium'></p>
              <p className='mt-2 block h-4 rounded-lg h-[22px] bg-gray-600 text-sm font-medium'></p>
              <p className='mt-2 block h-4 rounded-lg h-[22px] bg-gray-600 text-sm font-medium'></p>
            </li>
          ))}
        </ul>
      </div>
    ),
  };

  return <>{type ? allSkeleton[type] : allSkeleton['searchBarItem']}</>;
  return (
    <ul className='grid grid-cols-4 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8'>
      {[...Array(12)].map((movie, index) => (
        <li key={index} className='relative animate-pulse'>
          <div className='aspect-square h-[300px] w-full overflow-hidden rounded-lg bg-gray-300'></div>
          <p className='mt-2 h-4 w-1/2 rounded-lg bg-gray-600'></p>
          <p className='mt-2 block h-4 rounded-lg bg-gray-600 text-sm font-medium'></p>
          <p className='mt-2 block h-4 rounded-lg bg-gray-600 text-sm font-medium'></p>
        </li>
      ))}
    </ul>
  );
}
