import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const PostDetailsWrapper = styled.div`
  position: relative;
  overflow-wrap: anywhere;

  
`;

export const PostTitle = styled.h1`
  font-size: 30px;
  font-weight: 700;
  color: ${themeGet('colors.textColor', '#292929')};
  line-height: 1.53;
  margin-bottom: 10px;
  @media (max-width: 1200px) {
    font-size: 26px;
    margin-bottom: 15px;
  }
  @media (max-width: 990px) {
    font-size: 24px;
    margin-bottom: 15px;
  }
  @media (max-width: 575px) {
    font-size: 20px;
    margin-bottom: 15px;
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
		font-size: 12px;
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

export const PostDate = styled.span`
  display: block;
  font-size: ${themeGet('fontSizes.3', '15')}px;
  color: ${themeGet('textColor', '#292929')};
  font-weight: 400;
  text-transform: uppercase;
  @media (max-width: 990px) {
    font-size: 14px;
  }
  @media (max-width: 575px) {
    font-size: 13px;
  }
`;

export const PostPreview = styled.div`
  margin-top: 45px;
  position: relative;
  @media (max-width: 1200px) {
    margin-top: 40px;
  }
  @media (max-width: 575px) {
    margin-top: 35px;
  }

  img {
    border-radius: 3px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }

`;

export const PostDescriptionWrapper = styled.div`
  margin-top: 90px;
  max-width: 100%;
  @media (max-width: 1200px) {
    margin-top: 70px;
  }
  @media (max-width: 575px) {
    overflow-wrap: anywhere;
    margin-top: 30px;
    margin-left: 20px;
    margin-right: 20px
    width: 35%;
  }
`;

export const PostDescription = styled.div`
 @media (max-width: 575px) {
   iframe{
        width: 90%;    
    }
  }

`;

export const PostTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 60px;

  a {
    display: block;
    margin-right: 30px;
    font-size: 14px;
    font-weight: 400;
    color: ${themeGet('primary', '#D10068')};
  }
`;
