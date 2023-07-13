import { Wrapper, Button } from './styles';
import { ArrowIcon } from 'assets/svgs';

type PaginationProps = {
  className?: string;
  currentPage: number;
  totalPages: number;
  handleOnJump: (page: number) => (e: React.MouseEvent<HTMLButtonElement>) => void;
  visibleCount?: number;
};

export default function Pagination(props: PaginationProps) {
  const { className, currentPage, totalPages, handleOnJump, visibleCount = 3 } = props;
  const pageBuffer = Math.floor(visibleCount / 2);
  let startPage = currentPage - pageBuffer;
  let endPage = currentPage + pageBuffer;

  if (startPage < 1) {
    endPage += Math.abs(startPage) + 1;
    startPage = 1;
  }
  if (endPage > totalPages) {
    startPage -= endPage - totalPages;
    endPage = totalPages;
  }

  const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  const shouldShowEllipsisStart = startPage > 1;
  const shouldShowEllipsisEnd = endPage < totalPages;

  return (
    <Wrapper className={className}>
      <Button disabled={currentPage - 1 <= 0} onClick={handleOnJump(currentPage - 1)} type="button">
        <ArrowIcon />
        <p>Prev</p>
      </Button>
      {shouldShowEllipsisStart && (
        <Button disabled type="button">
          <p>...</p>
        </Button>
      )}
      {pageNumbers.map((i, key) => (
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
      {shouldShowEllipsisEnd && (
        <Button disabled type="button">
          <p>...</p>
        </Button>
      )}
      <Button
        disabled={currentPage + 1 > totalPages}
        onClick={handleOnJump(currentPage + 1)}
        type="button"
      >
        <ArrowIcon />
        <p>Next</p>
      </Button>
    </Wrapper>
  );
}
