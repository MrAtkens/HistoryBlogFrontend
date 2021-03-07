import * as React from 'react';
import _ from 'lodash';
import Image from 'material-ui-image';
import {
	PostListWrapper,
	PostPreview,
	PostDetails,
	PostTitle,
	PostMeta,
	PostDate,
	PostTags,
} from './post-list.style';
import {Link} from "react-router-dom";

interface PostListProps {
	image?: any;
	title: string;
	url: string;
	date?: string;
	tags?: [];
	className?: string;
	placeholderBG?: string;
}

const PostList: React.FunctionComponent<PostListProps> = ({
	image,
	title,
	url,
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
			<Link to={url}>
				{image == null ? null : (
					<PostPreview className='post_preview'>
						<Image
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
								{tags.map((tag: string, index: number) => (
									<span key={index}>{`#${_.kebabCase(tag)}`}</span>
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
