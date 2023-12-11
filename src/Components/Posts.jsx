import { useEffect, useState } from "react"

function Posts() {
    const [posts, setPosts] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data.posts))
            .catch(error => console.error('Error fetching products:', error));
    }, []
    )

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(response => response.json())
            .then(data => setUsers(data.users))
            .catch(error => console.error('Error fetching products:', error));
    }, []
    )

    // console.log(users);
    // console.log(posts);

    return (
        <section className="my-posts text-center col-lg-6 col-md-8 col-sm-12">
            <div className="top-posts text-primary">
                <h1>Top Posts</h1>
            </div>
            <hr className="text-primary" />
            {posts && posts.length > 0 ? (
                posts.map((post) => {
                    const user = users.find((user) => user.id === post.userId);

                    if (user) {
                        return (
                            <div className="user-posts" key={post.id}>
                                <div className="name-pfp">
                                    <img src={user.image} alt={user.name} />
                                    <h2>
                                        {user.firstName} {user.lastName}
                                    </h2>
                                </div>
                                <h4>{post.title}</h4>
                                <p>{post.body}</p>
                                <p>{post.tags.join("     ---- ")}</p>
                            </div>
                        );
                    }

                    return null;
                })
            ) : (
                <p>Loading posts...</p>
            )}
        </section>
    );
}
export default Posts