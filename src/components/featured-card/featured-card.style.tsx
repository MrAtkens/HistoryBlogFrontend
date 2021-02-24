import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
export const FeaturedCardWrapper = styled.div`
  position: relative;
  margin-top: 50px;
  &:hover {
    .post_details {
      opacity: 1;
      bottom: 30px;
      @media (max-width: 1400px) {
        bottom: 25px;
      }
      @media (max-width: 1024px) {
        bottom: 20px;
      }
      @media (max-width: 990px) {
        bottom: 15px;
      }
    }
  }
  &.overlay {
    &:hover {
      &:before {
        opacity: 1;
      }
    }
    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      display: block;
      top: 0;
      left: 0;
      background: linear-gradient(
        to bottom,
        rgba(112, 112, 112, 0.2) 0%,
        rgba(0, 0, 0, 0.8) 100%
      );
      z-index: 1;
      pointer-events: none;
      opacity: 0;
      transition: 0.3s ease-in-out;
      @media (max-width: 1024px) {
        opacity: 1;
      }
    }
    .post_details {
      background: transparent;
      padding: 0;
    }
    .post_title {
      font-size: 15px;
      font-family: 'Fira Sans', sans-serif;
      line-height: 1.4;
      margin-bottom: 18px;
      a {
        color: #fff;
      }
    }
    .read_more {
      a {
        color: #f6c667;
        text-decoration: none;
      }
    }
  }
`;

export const PostPreview = styled.div`
  position: relative;
  overflow: hidden;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  img {
    border-radius: 3px;
    object-fit: cover !important;
  }
  a {
    display: block;
  }
  :hover {
     box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`;

export const PostDetails = styled.div`
  position: absolute;
  width: calc(100% - 60px);
  bottom: 0;
  left: 30px;
  background-color: #fff;
  padding: 30px;
  border-radius: 3px;
  opacity: 0;
  z-index: 2;
  transition: 0.3s ease-in-out;
  @media (max-width: 1400px) {
    width: calc(100% - 50px);
    left: 25px;
    padding: 25px;
  }
  @media (max-width: 1024px) {
    opacity: 1;
    bottom: 20px;
    width: calc(100% - 40px);
    left: 20px;
    padding: 20px;
  }
  @media (max-width: 990px) {
    opacity: 1;
    bottom: 15px;
    width: calc(100% - 30px);
    left: 15px;
    padding: 20px;
  }
`;

export const PostMeta = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

export const ReadMore = styled.div`
	.category  {
		font-size: 12px;
		background-color: #FF2E55;
		font-weight: ${themeGet('fontWeights.6', '700')};
		text-transform: uppercase;
		color: ${themeGet('white', '#FFFFFF')};
		padding: 2px 10px;
		display: inline-block;
		@media (max-width: 767px) {
			font-size: ${themeGet('fontSizes.0', '10')}px;
		}
	}
    
    .date{ font-size: 13px; 
    font-weight: 700; float: 
    right; color: #757575; 
    text-decoration: none; }
`

export const PostTitle = styled.h2`
  font-size: 21px;
  font-weight: 700;
  overflow-wrap: break-word;
  color: ${themeGet('colors.textColor', '#292929')};
  margin-bottom: 10px;
  a {
    color: ${themeGet('colors.textColor', '#292929')};
  }
  @media (max-width: 1400px) {
    font-size: 18px;
  }
  @media (max-width: 1024px) {
    font-size: 15px;
    margin-bottom: 10px;
  }
  @media (max-width: 575px) {
    font-size: 15px;
    margin-bottom: 10px;
  }
  @media (max-width: 990px) and (min-width: 768px) {
    font-size: 14px;
    max-height: 3em;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }
`;

export const PostTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-grow: 1;

  a {
    display: block;
    margin-right: 20px;
    font-size: 12pt;
    font-weight: 600;
    color: ${themeGet('primary', '#D10068')};
    @media (max-width: 990px) {
      font-size: 13px;
      margin-right: 15px;
    }
  }
`;

export const Excerpt = styled.p`
  overflow-wrap: break-word;
  font-size: ${themeGet('fontSizes.3', '15')}px;
  color: ${themeGet('textColor', '#292929')};
  font-weight: 400;
  line-height: 2;
  margin-bottom: 30px;
  @media (max-width: 990px) {
    font-size: 14px;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;
