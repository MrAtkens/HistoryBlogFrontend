import * as React from 'react';
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io';
import {
  PaginationWrapper,
  PrevPage,
  NextPage,
  PageNumber,
} from './pagination.style';
import {observer} from "mobx-react-lite";
import blogs from 'stores/blogsStore'

type PaginationProps = {

  currentPage: string;
  totalPage: string;
  className?: string;
};

const Pagination: React.FunctionComponent<PaginationProps> = observer(({
  currentPage,
  totalPage,
  className,
  ...props
}) => {
    console.log(blogs.getCountPages)
    console.log(blogs.getCurrentPage)
  return (
    <PaginationWrapper {...props} className={className}>
      <PrevPage>
        {blogs.getCurrentPage != 1 && (
          <a onClick={() => blogs.prevPage()} aria-label="Prev">
            <IoMdArrowRoundBack />
          </a>
        )}
      </PrevPage>

      <PageNumber>{`Page ${currentPage} Of ${totalPage}`}</PageNumber>

      <NextPage>
        {Math.ceil(blogs.getCountPages/blogs.countOfBlogsOnPage) != blogs.getCurrentPage && (
          <a onClick={() => blogs.nextPage()} aria-label="Next">
            <IoMdArrowRoundForward />
          </a>
        )}
      </NextPage>
    </PaginationWrapper>
  );
})

export default Pagination;
