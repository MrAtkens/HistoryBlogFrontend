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
	imageType?: 'fixed' | 'fluid';
	placeholderBG?: string;
}

const PostList: React.FunctionComponent<PostListProps> = ({
	image,
	title,
	url,
	date,
	tags,
	className,
	imageType,
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
						{imageType === 'fluid' ? (
							<Image
								src={image}
								alt='post preview'
							/>
						) : (
							<Image
								src={image}
								alt='post preview'
							/>
						)}
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
									<span key={index}>{`#${tag}`}</span>
								))}
							</PostTags>
						)}
					</PostMeta>
				</PostDetails>
			</Link>
		</PostListWrapper>
	);
};

PostList.defaultProps = {
	imageType: 'fluid',
};

export default PostList;
