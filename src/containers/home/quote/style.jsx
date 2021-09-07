import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const IntroWrapper = styled.div`
  max-width: 100%;
  margin: auto 0;
  padding: 150px 10px 150px 10px;
  display: flex;
  align-items: center;
  text-align: start;
  @media (max-width: 1400px) {
    padding: 120px 10px 120px 10px;
  }
  @media (max-width: 1200px) {
    padding: 100px 10px 100px 10px;
  }
  @media (max-width: 990px) {
    padding: 70px 25px 80px 25px;
  }
  @media (max-width: 575px) {
    display: block;
    padding: 50px 25px 80px 25px;
    text-align: center;
  }
  background: #FFFFFF;
`;

export const IntroImage = styled.div`
  padding: 30px;
  border-radius: 50%;
  margin-left: auto;
  border: 1px solid ${themeGet('colors.lightBorderColor', '#ededed')};
  flex-shrink: 0;
  @media (max-width: 990px) {
    width: 220px;
    height: 220px;
    padding: 25px;
    margin-bottom: 25px;
  }
  @media (max-width: 990px) {
    width: 180px;
    height: 180px;
    padding: 20px;
    margin-bottom: 20px;
  }
  
   @media (max-width: 575px) {
    margin: 20px auto;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 50%;
    object-fit: cover;
  }

  > div {
    border-radius: 50%;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.16);
  }
`;

export const IntroTitle = styled.h1`
  font-size: 30px;
  font-weight: 600;
  font-family: ${themeGet('fontFamily.1', "'Poppins', sans-serif")};
  color: ${themeGet('colors.textColor', '#292929')};
  margin-bottom: 5px;
  @media (max-width: 990px) {
    font-size: 26px;
    margin-bottom: 15px;
  }
  @media (max-width: 575px) {
    font-size: 22px;
  }
`;

export const Description = styled.p`
  color: ${themeGet('colors.textColor', '#292929')};
  font-size: ${themeGet('fontSizes.3', '15')}pt;
  line-height: ${themeGet('lineHeights.text', '2')};
  margin-bottom: 10px;
`;

export const Date = styled.p`
  font-size: 18px;
  line-height: ${themeGet('lineHeights.text', '2')};
  margin-bottom: 5px;
`;

export const IntroInfo = styled.div`
  padding-left: 30px;
  text-align: start;
  margin-right: auto;
  @media (max-width: 575px) {
    padding-left: 0;
    text-align: center;
  }
`;
