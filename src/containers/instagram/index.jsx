import React from 'react';
import Image from "material-ui-image"
import kebabCase from "kebab-case";

import {
  SidebarWrapper,
  SidebarWidget,
  WidgetTitle,
  TagItem,
  InstagramWrapper,
  InstagramPhoto,
} from './style';

const Sidebar = () => {


  const Posts = [];
  const Tags = [];
  const InstagramPhotos = [];

  return (
    <SidebarWrapper>
      <SidebarWidget>
        <WidgetTitle>Promotion</WidgetTitle>
        <a
          href="https://1.envato.market/r1jdv"
          aria-label="Get StoryHub"
          target="_blank"
        >
          <img src={PromotionImage} alt="Get StoryHub" />
        </a>
      </SidebarWidget>


      <SidebarWidget>
        <WidgetTitle>Tags</WidgetTitle>
        {Tags.map((tag) => (
          <TagItem key={tag.fieldValue}>
            <span>#</span>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} <span>({tag.totalCount})</span>
            </Link>
          </TagItem>
        ))}
      </SidebarWidget>

      <SidebarWidget>
        <WidgetTitle>Instagram</WidgetTitle>
        {InstagramPhotos ? (
          <InstagramWrapper>
            {InstagramPhotos.map(({ node }) => {
              // Random Placeholder Color
              const placeholderColors = [
                '#55efc4',
                '#81ecec',
                '#74b9ff',
                '#a29bfe',
                '#ffeaa7',
                '#fab1a0',
                '#e17055',
                '#0984e3',
                '#badc58',
                '#c7ecee',
              ];
              const setColor =
                placeholderColors[
                  Math.floor(Math.random() * placeholderColors.length)
                ];

              return (
                <InstagramPhoto key={node.id}>
                  <a
                    href={`https://www.instagram.com/p/${node.id}`}
                    target="_blank"
                  >
                    <Image
                      src={node.localFile.childImageSharp.fluid}
                      alt="Instagram Photo"
                    />
                  </a>
                </InstagramPhoto>
              );
            })}
          </InstagramWrapper>
        ) : (
          ''
        )}
      </SidebarWidget>
    </SidebarWrapper>
  );
};

export default Sidebar;
