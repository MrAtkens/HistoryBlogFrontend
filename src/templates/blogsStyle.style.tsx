import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const BlogPostsWrapper = styled.div`
  margin: 0 auto;
  padding: 60px 75px 0 75px;
  position: relative;

  @media (max-width: 1400px) {
    padding: 60px 35px 0 35px;
  }
  @media (max-width: 990px) {
    padding: 60px 25px 0 25px;
  }
  .pagination {
    margin-top: 80px;
    @media (max-width: 1024px) {
      margin-top: 60px;
    }
    @media (max-width: 575px) {
      margin-top: 30px;
    }
  }
`

export const SecTitle = styled.div`
  color: ${themeGet("colors.textColor", "#292929")};
  font-size: 16px;
  font-weight: 500;
  font-family: ${themeGet("fontFamily.0", "'Fira Sans',sans-serif")};
  letter-spacing: 0.17em;
  position: relative;
  margin-bottom: 30px;

  &:after {
    content: "";
    width: 68px;
    height: 1px;
    background: #292929;
    display: block;
    margin-top: 8px;
  }
`

export const SortButtons = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 25px;
	margin-left: -5px;
	margin-right: -5px;
	@media (max-width: 1024px) {
		margin-bottom: 20px;
	}
	@media (max-width: 767px) {
		margin-bottom: 15px;
	}
`;



export const Button = styled.div`
  min-width: 64px;
 	margin-left: 10px;
	margin-right: 10px;
  a {
    width: 64px;
    height: 64px;
    color: ${themeGet('colors.textColor', '#292929')};
    border-radius: 50%;
    background-color: #f3f3f3;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.15s ease-in-out;
    svg {
      display: block;
    }
    &:hover {
      color: #fff;
      background-color: ${themeGet('colors.primary', '#D10068')};
    }

`;


export const RelatedPostItem = styled.div`
  flex: 0 0 33.333333333%;
  max-width: 33.333333333%;
  padding: 0 15px;
  @media (max-width: 575px) {
    flex: 0 0 100%;
    max-width: 100%;
    &:nth-child(n + 2) {
      margin-top: 50px;
    }
  }
  .post_card {
    &:hover {
      .post_preview {
        a {
          transform: scale(1.05);
        }
      }
    }

    .post_preview {
      margin-bottom: 16px;
      overflow: hidden;
      a {
        display: block;
        transition: 0.25s ease-in-out;
      }
      &:before {
        filter: blur(10px);
      }
    }
    .post_title {
      font-size: 21px;
      a {
        display: block;
        white-space: nowrap;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      @media (max-width: 1400px) {
        font-size: 19px;
      }
      @media (max-width: 1200px) {
        font-size: 17px;
      }
      @media (max-width: 990px) {
        font-size: 15px;
      }
    }
    .post_content {
      max-width: 100%;
    }

    .post_tags {
      margin-top: 20px;
      a {
        @media (max-width: 990px) {
          font-size: 12px;
          margin-right: 15px;
        }
      }
    }
  }
`;


export const TagPageHeading = styled.div`
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  margin-top: 80px;
  margin-bottom: 40px;
  position: relative;
  @media (max-width: 1200px) {
    padding-left: 80px;
  }
  @media (max-width: 990px) {
    padding-left: 40px;
    font-size: 13px;
    margin-bottom: 30px;
  }
  @media (max-width: 575px) {
    padding-left: 5px;
  }
`;

export const TagName = styled.h1`
  font-size: 30px;
  font-weight: 700;
  color: ${themeGet('colors.primary', '#D10068')};
  margin-bottom: 8px;
  @media (max-width: 990px) {
    font-size: 26px;
  }
  @media (max-width: 575px) {
    font-size: 22px;
  }
`;


export const SortName = styled.h1`
  font-size: 18px;
  font-weight: 700;
  color: #757575;
  margin-bottom: 8px;
  @media (max-width: 990px) {
    font-size: 16px;
  }
  @media (max-width: 575px) {
    font-size: 24px;
  }
`;

export const BlogPostFooter = styled.div`
  margin: 0 auto;
  width: 870px;
  max-width: 100%;
  padding-top: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 990px) {
    padding-top: 40px;
  }
`;

export const BlogPostComment = styled.div`
  margin: 0 auto;
  width: 870px;
  max-width: 100%;
  padding-top: 80px;
  @media (max-width: 990px) {
    padding-top: 60px;
  }
`;

export const PostShare = styled.div`
  display: flex;
  align-items: center;
  > span {
    flex-shrink: 0;
  }
  > div,
  .react-share__ShareButton {
    cursor: pointer;
    margin-left: 25px;
    font-size: 22px;
    outline: 0;
    color: ${themeGet('colors.textColor', '#292929')};
    transition: 0.15s ease-in-out;
    @media (max-width: 767px) {
      font-size: 18px;
      margin-left: 20px;
    }
    &:hover {
      color: ${themeGet('colors.primary', '#D10068')};
    }
    svg {
      display: block;
    }
  }
`;

export const BlogDetailsContent = styled.div`
  flex: 0 0 calc(100% - 360px);
  max-width: calc(100% - 360px);
  padding-right: 60px;

  @media (max-width: 1249px) {
    flex: 0 0 calc(100% - 320px);
    max-width: calc(100% - 320px);
    padding-right: 50px;
  }
  @media (max-width: 1100px) {
    flex: 0 0 calc(100% - 280px);
    max-width: calc(100% - 280px);
    padding-right: 40px;
  }

  @media (max-width: 990px) {
    flex: 0 0 calc(100% - 220px);
    max-width: calc(100% - 220px);
    padding-right: 30px;
  }

  @media (max-width: 767px) {
    flex: 0 0 100%;
    max-width: 100%;
    padding-right: 0;
  }
`;

export const PostTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  @media (max-width: 575px) {
    display: none;
  }

  a {
    display: block;
    margin-right: 30px;
    font-size: 14px;
    font-weight: 400;
    color: ${themeGet('primary', '#D10068')};
    @media (max-width: 990px) {
      font-size: 13px;
      margin-right: 25px;
    }
  }
`;


export const PostCategory = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 25px;
	margin-left: -5px;
	margin-right: -5px;
	@media (max-width: 1024px) {
		margin-bottom: 20px;
	}
	@media (max-width: 767px) {
		margin-bottom: 15px;
	}
	a {
		font-size: 16px;
		background-color: ${themeGet('primary', '#FF2E55')};
		font-weight: ${themeGet('fontWeights.6', '700')};
		text-transform: uppercase;
		color: ${themeGet('white', '#FFFFFF')};
		padding: 2px 10px;
		display: inline-block;
		margin: 0 5px 5px;
		@media (max-width: 575px) {
			font-size: ${themeGet('fontSizes.0', '10')}px;
		}
	}
`;