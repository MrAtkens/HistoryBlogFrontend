import React, { useReducer, useEffect } from 'react';
import {observer} from "mobx-react-lite";
import SearchReducer, { initialState } from './search-reducer';
import { Scrollbars } from 'react-custom-scrollbars';
import { rebuildIndex } from './search-index-builder-function';
import {
  SearchWrapper,
  SearchForm,
  SearchResult,
  NoResult,
} from './search.style';

import blogs from 'stores/blogsStore'
import PostList from "components/post-list/post-list";

const Search = observer(() => {
  const [state, dispatch] = useReducer(SearchReducer, initialState);

  useEffect(() => {
    blogs.getBlogs()
  },[])

  const dataset = blogs.getBlogsTable;

  const searchData = (e: any) => {
    const { search } = state;
    const queryResult = search.search(e.target.value);
    dispatch({
      type: 'SET_SEARCH_QUERY',
      payload: { searchQuery: e.target.value, searchResults: queryResult },
    });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  useEffect(() => {
    if (dataset.length !== 0) {
      let data: any = [];
      dataset.forEach(item => {
        let formatedData = {
          ...item,
          title: item.title
        };
        data.push(formatedData);
      });

      dispatch({ type: 'SET_DATA', payload: data });
      const dataToSearch = rebuildIndex(data);
      if (dataToSearch) {
        dispatch({
          type: 'SET_SEARCH',
          payload: dataToSearch,
        });
      }
    }
  }, [dataset]);

  const { searchResults, searchQuery } = state;
  const queryResults = searchResults;

  return (
    <SearchWrapper>
      <SearchForm onSubmit={handleSubmit}>
        <input
          id="Search"
          value={searchQuery}
          onChange={searchData}
          placeholder="Enter Your Search Topic"
        />
      </SearchForm>
      <SearchResult>
        {queryResults.length == 0 && searchQuery !== '' ? (
          <NoResult>No result found</NoResult>
        ) : (
          ''
        )}

        {queryResults.length !== 0 && (
            <Scrollbars
                autoHeight={true}
                autoHeightMax={505}
                className="search-scrollbar"
            >
              {queryResults.map((item: any) => {
                console.log(item)
                const tags = item.tags.split(' ')
                tags.pop()
                return (
                    <PostList
                        key={item.id}
                        title={item.title}
                        url={"/blog/"+item.id}
                        image={item.image}
                        date={item.date}
                        tags={tags}
                    />
                )
              })}
            </Scrollbars>
        )}
      </SearchResult>
    </SearchWrapper>
  );
})

export default Search;
