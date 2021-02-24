import React, {useEffect} from 'react';
import SEO from 'components/seo';
import {
	TagPostsWrapper,
	TagPageHeading,
	TagName,

} from './templates.style';
import {observer} from "mobx-react-lite";
import {useParams} from "react-router-dom";
import blogs from "stores/blogsStore";
import FeaturedCard from "components/featured-card/featured-card";
import {FeaturedPostCol, FeaturedPostRow, FeaturedPostWrapper} from "containers/home/posts/style";

const Category = observer(() => {
	// @ts-ignore
	let { id } = useParams();
	useEffect(() => {
		blogs.getBlogsByCategory(id)
	},[id])
	const blogsCategory = blogs.getBlogsTableByCategory
	return (
		<>
			<SEO
				title={id.charAt(0).toUpperCase() + id.slice(1)}
				description={`A collection of ${blogsCategory.length} post`}
			/>

			<TagPostsWrapper>
				<TagPageHeading>
					<TagName>{id.charAt(0).toUpperCase() + id.slice(1)}</TagName>
					{`A collection of ${blogsCategory.length} post`}
				</TagPageHeading>
				<FeaturedPostWrapper>
					<FeaturedPostRow>
						{blogsCategory.map(item => {
							const tags = item.tags.split(' ');
							tags.pop()
							return(
								<FeaturedPostCol key={item.title}>
									<FeaturedCard
										key={item.id}
										title={item.title}
										category={item.category}
										image={item.image.webImagePath}
										creationDate={item.creationDate}
										url={"/blog/" + item.id}
										description={item.description}
										tags={tags}
									/>
								</FeaturedPostCol>)
						})}
					</FeaturedPostRow>
				</FeaturedPostWrapper>
			</TagPostsWrapper>
		</>
	);
})

export default Category;
