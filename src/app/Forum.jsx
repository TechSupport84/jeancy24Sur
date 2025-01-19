import React, { useEffect, useState } from 'react';
import '../styles/Forum.css';
import { FaComments, FaQuestionCircle, FaLightbulb, FaSmile, FaTrash } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import { API_URL } from '../screens/Api_Url';

function Forum() {
  const [activeSection, setActiveSection] = useState('General Discussion');
  const [showPostForm, setShowPostForm] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posts, setPosts] = useState([]);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState({});  // Object to store comments for each post
  const [error, setError] = useState('');

  const { token, user } = useAuth();

  const threads = [
    { title: 'General Discussion', description: 'Talk about anything here!', posts: 12, icon: <FaComments /> },
    { title: 'Help & Support', description: 'Get assistance with your issues.', posts: 5, icon: <FaQuestionCircle /> },
    { title: 'Suggestions', description: 'Share your ideas for improvement.', posts: 3, icon: <FaLightbulb /> },
    { title: 'Off-topic', description: 'A space for non-related discussions.', posts: 8, icon: <FaSmile /> },
  ];

  // Fetch comments when posts change
  useEffect(() => {
    const fetchCommentsForPosts = async () => {
      try {
        const commentRequests = posts.map(post =>
          axios.get(`${API_URL}/comment/${post.id}/comments`, {
            headers: { Authorization: `Bearer ${token}` },
          })
        );
        
        const commentResponses = await Promise.all(commentRequests);
        const newComments = commentResponses.reduce((acc, response, index) => {
          acc[posts[index].id] = response.data.comments;
          return acc;
        }, {});
        
        setComments(newComments);  // Store comments for each post by post ID
      } catch (error) {
        console.log('Error fetching comments:', error);
        setError(error.message);
      }
    };

    if (posts.length > 0) {
      fetchCommentsForPosts();
    }
  }, [posts, token, comment]);  // Depend on posts and token

  // Fetch posts on mount
  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const response = await axios.get(`${API_URL}/post/`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPosts(response.data.post);
      } catch (error) {
        console.log('Error occurred!');
      }
    };
    getAllPosts();
  }, [token]);

  const handleSectionClick = (title) => {
    setActiveSection(title);
    setShowPostForm(false);
  };

  const handleCreatePostClick = () => {
    setShowPostForm(true);
  };

  const handleSidebarToggle = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleCreatePost = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      return alert('All fields required');
    }
    try {
      await axios.post(
        `${API_URL}/post/create`,
        { title, description },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Post created successfully!');
      setTitle('');
      setDescription('');
    } catch (error) {
      console.log('Error occurred');
    }
  };

  const handleDeletePost = async (postId) => {
    try {
      const response = await axios.delete(`${API_URL}/post/delete/${postId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
        alert('Post deleted successfully!');
      }
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('Failed to delete post. Please try again later.');
    }
  };

  const handleAddComment = async (postId, commentBody) => {
    if (!commentBody) {
      return alert('Please enter a comment');
    }

    try {
      const response = await axios.post(
        `${API_URL}/comment/${postId}/newComment`,
        { commentBody },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setComment(''); // Clear the comment input field

      // After adding comment, refetch comments for the post
      const updatedComments = await axios.get(`${API_URL}/comment/${postId}/comments`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setComments((prevComments) => ({
        ...prevComments,
        [postId]: updatedComments.data.comments,
      }));
    } catch (error) {
      console.error('Error adding comment:', error);
      alert('Failed to add comment. Please try again later.');
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className="forum-container">
      {/* Sidebar */}
      <div className={`forum-sidebar ${isSidebarCollapsed ? 'collapsed' : ''}`}>
        <h3>Topics</h3>
        <ul>
          {threads.map((thread, index) => (
            <li
              key={index}
              className={`forum-sidebar-item ${activeSection === thread.title ? 'active' : ''}`}
              onClick={() => handleSectionClick(thread.title)}
            >
              <span className="icon">{thread.icon}</span>
              <span>{thread.title}</span>
            </li>
          ))}
        </ul>
        <button className="menu-toggle" onClick={handleSidebarToggle}>
          {isSidebarCollapsed ? 'Show Menu' : 'Hide Menu'}
        </button>
      </div>

      {/* Main Forum Section */}
      <div className="forum-main">
        <div className="forum-header">
          <h1>{activeSection}</h1>
          <p>{threads.find((thread) => thread.title === activeSection)?.description}</p>
        </div>

        {/* Posts Section */}
        <div className="forum-posts">
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <div className="forum-post" key={index}>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <span>{formatDate(post.createdAt)}</span>
                <span>{post.user.username}</span>

                {/* Show delete button only for the post owner */}
                {post.userId === user.id && (
                  <div className="delete-button">
                    <button onClick={() => handleDeletePost(post.id)} className="delete-btn">
                      <FaTrash />
                    </button>
                  </div>
                )}

                {/* Comment Section */}
                <div className="comment-section">
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Add a comment"
                    rows="3"
                  />
                  <button onClick={() => handleAddComment(post.id, comment)}>Add Comment</button>
                </div>

                <div className="comments-body">
  <h3>Comments</h3>
  <div className="comments-list">
    {comments[post.id]?.map((comment, commentIndex) => (
      <div key={commentIndex} className="comment-item">
        <div className="comment-header">
          <span className="comment-author">{comment.user.username}</span>
          <span className="comment-date">{formatDate(comment.createdAt)}</span>
        </div>
        <p className="comment-body">{comment.commentBody}</p>
      </div>
    ))}
  </div>
</div>



              </div>
            ))
          ) : (
            <p>No posts available</p>
          )}
        </div>

        {/* Post Creation Form */}
        {showPostForm ? (
          <div className="create-post">
            <h3>Create a New Post</h3>
            <form onSubmit={handleCreatePost}>
              <div className="form-group">
                <label htmlFor="post-title">Title</label>
                <input
                  type="text"
                  id="post-title"
                  value={title}
                  placeholder="Enter post title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="post-content">Content</label>
                <textarea
                  id="post-content"
                  rows="5"
                  value={description}
                  placeholder="Enter post content"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <button type="submit" className="submit-post">
                Submit Post
              </button>
            </form>
          </div>
        ) : (
          <div className="create-thread">
            <button onClick={handleCreatePostClick}>Create New Thread</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Forum;
