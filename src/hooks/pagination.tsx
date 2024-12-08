import { useMemo } from "react";

type UsePaginationProps = {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  siblingCount?: number; 
};

export const usePagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  siblingCount = 1,
}: UsePaginationProps): (number | string)[] => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalItems / itemsPerPage);

    const totalPageNumbers = siblingCount + 5;

    if (totalPageNumbers >= totalPageCount) {
      return Array.from({ length: totalPageCount }, (_, i) => i + 1);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftRange = Array.from(
        { length: 3 + 2 * siblingCount },
        (_, i) => i + 1
      );
      return [...leftRange, "...", totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightRange = Array.from(
        { length: 3 + 2 * siblingCount },
        (_, i) => totalPageCount - (3 + 2 * siblingCount) + i + 1
      );
      return [firstPageIndex, "...", ...rightRange];
    }

    const middleRange = Array.from(
      { length: rightSiblingIndex - leftSiblingIndex + 1 },
      (_, i) => leftSiblingIndex + i
    );

    return [firstPageIndex, "...", ...middleRange, "...", lastPageIndex];
  }, [totalItems, itemsPerPage, currentPage, siblingCount]);

  return paginationRange;
};
