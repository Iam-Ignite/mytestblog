import Footer from "../../component/footer/footer";
import Navbar from "../../component/navbar/navbar";
import {PostBlog,} from "../../component/post-content/post-content";
import "./blog.scss"

const Blog = () => {
    return ( 
        <>
        <Navbar/>
        <div className="blog-page">
            <PostBlog/>
            <div className="blog-page-content">
            </div>
            </div>
            <Footer/>
        </>
     );
}
 
export default Blog;