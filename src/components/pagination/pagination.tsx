import * as React from 'react';
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io';
import {
  PaginationWrapper,
  PrevPage,
  NextPage,
  PageNumber,
} from './pagination.style';
import {Link} from "react-router-dom";

type PaginationProps = {
  prevLink?: string | undefined | null | boolean;
  nextLink?: string | undefined | null | boolean;
  currentPage: string;
  totalPage: string;
  className?: string;
};

const Pagination: React.FunctionComponent<PaginationProps> = ({
  prevLink,
  nextLink,
  currentPage,
  totalPage,
  className,
  ...props
}) => {
  return (
    <PaginationWrapper {...props} className={className}>
      <PrevPage>
        {prevLink && (
          <Link to={`${prevLink}`} aria-label="Prev">
            <IoMdArrowRoundBack />
          </Link>
        )}
      </PrevPage>

      <PageNumber>{`Page ${currentPage} Of ${totalPage}`}</PageNumber>

      <NextPage>
        {nextLink && (
          <Link to={`${nextLink}`} aria-label="Next">
            <IoMdArrowRoundForward />
          </Link>
        )}
      </NextPage>
    </PaginationWrapper>
  );
};

export default Pagination;
