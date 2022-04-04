import React, { useState, useEffect } from 'react';
import Button from '../button/button';
import InfiniteScroll from 'react-infinite-scroll-component';
import './post-content.scss';

export const PostBlog = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = () => {
		fetch(
			'http://www.giropay.xyz/api/v1/giro-app/products',
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		)
			.then((response) => response.json())
			.then((res) => {
				setData(res.data);
				setLoading(false);
				setError(res.Error);
				setSuccess(res.success);
			});
	};

	return (
		<>
			<h2>
				<img
					src='/asset/Group.svg'
					height='25px'
					alt='up'
				/>
				Top Post
			</h2>
			<div className='post-row'>
				<div className='posts'>
					{loading ? <p>Loading...</p> : <p>{error}</p>}
					{success ? <p>{success}</p> : <p>{error}</p>}
					<div className='blog-post'>
						{data
							.filter((item, idx) => idx < 5)
							.map((item) => (
								<div
									className='blog-post-image'
									key={item.id}
									style={{
										backgroundImage: `url(${item.metaImageUrl})`,
									}}>
									<div className='blog-post-content'>
										<p>{item.description}</p>
									</div>
								</div>
							))}
					</div>
				</div>
			</div>
			<InfiniteScroll 
            next={fetchData} 
            dataLength={data.length}
            loader={<div className='load'>
						<Button>Loading more ...</Button>
					</div>}
            hasMore={true}>
			<h2>
				<img
					src='/asset/Group.svg'
					height='25px'
					alt='up'
				/>
				Trending
			</h2>
			<div className='trend-card'>
				<div className='post-column'>
					<PostBlogTrending
						data={data}
						success={success}
						loading={loading}
						error={error}
					/>
				</div>
			</div>
			</InfiniteScroll>
		</>
	);
};
export const PostBlogTrending = ({
	data,
	loading,
	success,
	error,
}) => {
	return (
		<div>
			{loading ? <p>Loading...</p> : <p>{error}</p>}
			{success ? <p>{success}</p> : <p>{error}</p>}
			<div className='blog-post-two'>
				{data.map((item) => (
					<div
						className='blog-post-image'
						key={item.id}
						style={{
							backgroundImage: `url(${item.metaImageUrl})`,
						}}>
						<div className='blog-post-content'>
							<p>{item.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
