import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const FooterWrapper = styled.footer`
  position: relative;
  overflow: hidden;
  color: ${themeGet('colors.textColor', '#292929')};
  font-size: ${themeGet('fontSizes.3', '15')}px;
  padding: 30px 15px;
  margin-top: 60px;
  text-align: center;
  border-top: 1px solid #f3f3f3;
  @media (max-width: 575px) {
    padding: 22px 15px;
  }

  a {
    color: ${themeGet('colors.textColor', '#292929')};
    font-size: ${themeGet('fontSizes.3', '15')}px;
    transition: 0.15s ease-in-out;
    &:hover {
      color: ${themeGet('colors.primary', '#D10068')};
    }
  }
`;

export default FooterWrapper;
