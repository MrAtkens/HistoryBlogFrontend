import * as React from 'react';
import Image from "next/image"
import Link from "next/link";
import kebabCase from "kebab-case";

import {
	PostListWrapper,
	PostPreview,
	PostDetails,
	PostTitle,
	PostMeta,
	PostDate,
	PostTags,
} from './post-list.style';

const PostList = ({
	image,
	title,
	id,
	date,
	tags,
	className,
	placeholderBG,
	...props
}) => {
	// Add all class to an array
	const addAllClasses = ['post_list'];

	// className prop checking
	if (className) {
		addAllClasses.push(className);
	}

	return (
		<PostListWrapper className={addAllClasses.join(' ')} {...props}>
			<Link href={{
				pathname: '/blog/[slug]',
				query: {slug: id},
			}}>
				{image == null ? null : (
					<PostPreview className='post_preview'>
						<Image
							layout="responsive"
							width={150} height={150}
							src={image.webImagePath}
							alt={image.alt}
						/>
					</PostPreview>
				)}

				<PostDetails>
					<PostTitle className='post_title'>{title}</PostTitle>
					<PostMeta>
						{date && (
							<PostDate
								dangerouslySetInnerHTML={{
									__html: date,
								}}
								className='post_date'
							/>
						)}
						{tags == null ? null : (
							<PostTags className='post_tags'>
								{tags.map((tag) => (
									<Link href={{
										pathname: '/tags/[slug]',
										query: {slug: kebabCase(tag.slice(1))},
									}}>
										{kebabCase(tag)}
									</Link>
								))}
							</PostTags>
						)}
					</PostMeta>
				</PostDetails>
			</Link>
		</PostListWrapper>
	);
};


export default PostList;
