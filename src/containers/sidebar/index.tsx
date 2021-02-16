import React from 'react';
import _ from 'lodash';
import FeaturePost from '../../components/feature-post/feature-post';
import PromotionImage from '../../images/ad.png';
import {
  SidebarWrapper,
  SidebarWidget,
  WidgetTitle,
  TagItem,
  InstagramWrapper,
  InstagramPhoto,
} from './style';
import {Link} from "react-router-dom";
import Image from "material-ui-image"
type SidebarProps = {};

const Sidebar: React.FunctionComponent<SidebarProps> = () => {


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
        <WidgetTitle>Latest Post</WidgetTitle>
        {Posts.map(({ node }: any) => {
          const title = node.frontmatter.title || node.fields.slug;
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
            <FeaturePost
              key={node.fields.slug}
              title={title}
              image={
                node.frontmatter.cover == null
                  ? null
                  : node.frontmatter.cover.childImageSharp.fluid
              }
              url={node.fields.slug}
              tags={node.frontmatter.tags}
              placeholderBG={setColor}
            />
          );
        })}
      </SidebarWidget>

      <SidebarWidget>
        <WidgetTitle>Tags</WidgetTitle>
        {Tags.map((tag: any) => (
          <TagItem key={tag.fieldValue}>
            <span>#</span>
            <Link to={`/tags/${_.kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} <span>({tag.totalCount})</span>
            </Link>
          </TagItem>
        ))}
      </SidebarWidget>

      <SidebarWidget>
        <WidgetTitle>Instagram</WidgetTitle>
        {InstagramPhotos ? (
          <InstagramWrapper>
            {InstagramPhotos.map(({ node }: any) => {
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
