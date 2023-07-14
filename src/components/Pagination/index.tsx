import { Wrapper, Button } from './styles';
import { ArrowIcon } from 'assets/svgs';

type PaginationProps = {
  className?: string;
  currentPage: number;
  totalPages: number;
  handleOnJump: (page: number) => (e: React.MouseEvent<HTMLButtonElement>) => void;
  visibleCount?: number;
  id?: string;
};

function generatePagination(currentPage: number, totalPage: number, visibleCount: number) {
  const pages: number[] = [];
  let showEllipsisStart = false;
  let showEllipsisEnd = false;

  if (totalPage === 0) {
    return { pages, showEllipsisStart, showEllipsisEnd }; // Return empty array and no ellipsis when totalPage is 0
  }

  showEllipsisStart = currentPage - Math.floor(visibleCount / 2) > 1;
  showEllipsisEnd = currentPage + Math.floor(visibleCount / 2) < totalPage;

  const halfVisibleCount = Math.floor(visibleCount / 2);
  let startPage = currentPage - halfVisibleCount;
  let endPage = currentPage + halfVisibleCount;

  if (showEllipsisStart && showEllipsisEnd) {
    startPage = currentPage - halfVisibleCount + 1;
    endPage = currentPage + halfVisibleCount - 1;
  } else if (showEllipsisStart) {
    startPage = currentPage - halfVisibleCount + 2;
    endPage = currentPage + halfVisibleCount;
  } else if (showEllipsisEnd) {
    startPage = currentPage - halfVisibleCount;
    endPage = currentPage + halfVisibleCount - 2;
  }

  if (startPage <= 0) {
    startPage = 1;
    endPage = Math.min(visibleCount, totalPage);
  }

  if (endPage > totalPage) {
    endPage = totalPage;
    startPage = Math.max(1, totalPage - visibleCount + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return { pages, showEllipsisStart, showEllipsisEnd };
}

export default function Pagination(props: PaginationProps) {
  const { className, currentPage, totalPages, handleOnJump, visibleCount = 3, id } = props;
  const { pages, showEllipsisEnd, showEllipsisStart } = generatePagination(
    currentPage,
    totalPages,
    visibleCount
  );

  return (
    <Wrapper className={className} id={id}>
      <Button disabled={currentPage - 1 <= 0} onClick={handleOnJump(1)} type="button">
        <ArrowIcon />
      </Button>
      {showEllipsisStart && (
        <Button disabled type="button">
          <p>...</p>
        </Button>
      )}
      {pages.map((i, key) => (
        <Button
          $isActive={i === currentPage}
          disabled={i === currentPage}
          onClick={handleOnJump(i)}
          key={key}
          type="button"
        >
          <p>{i}</p>
        </Button>
      ))}
      {showEllipsisEnd && (
        <Button disabled type="button">
          <p>...</p>
        </Button>
      )}
      <Button
        disabled={currentPage + 1 > totalPages}
        onClick={handleOnJump(totalPages)}
        type="button"
      >
        <ArrowIcon />
      </Button>
    </Wrapper>
  );
}
