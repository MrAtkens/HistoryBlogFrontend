import * as React from 'react';
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io';
import {
  PaginationWrapper,
  PrevPage,
  NextPage,
  PageNumber,
} from './pagination.style';
import {observer} from "mobx-react-lite";

import blogStore from '~/stores/blogStore'

const Pagination = observer(({
  currentPage,
  totalPage,
  className,
  ...props
}) => {
    console.log(blogStore.getCountPages)
    console.log(blogStore.getCurrentPage)
  return (
    <PaginationWrapper {...props} className={className}>
      <PrevPage>
        {blogStore.getCurrentPage !== 1 && (
          <a onClick={() => blogStore.prevPage()} aria-label="Prev">
            <IoMdArrowRoundBack />
          </a>
        )}
      </PrevPage>

      <PageNumber>{`Page ${currentPage} Of ${totalPage}`}</PageNumber>

      <NextPage>
        {Math.ceil(blogStore.getCountPages/blogStore.countOfBlogsOnPage) !== blogStore.getCurrentPage && (
          <a onClick={() => blogStore.nextPage()} aria-label="Next">
            <IoMdArrowRoundForward />
          </a>
        )}
      </NextPage>
    </PaginationWrapper>
  );
})

export default Pagination;
