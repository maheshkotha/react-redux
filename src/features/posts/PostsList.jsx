import { useSelector } from 'react-redux';
import { selectAllPosts } from './postsSlice';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';



const PostsList = () => {

    const posts = useSelector(selectAllPosts)

    const orderedpost = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
    
    const renderedPosts = orderedpost.map(post => {
        return <article key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <p className="postCredit">
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date}/>
            </p>
            <ReactionButtons post={post} />
        </article>
    })

    return (
        <section>
            <h1>Posts</h1>
            {renderedPosts}
        </section>
    )
}

export default PostsList;