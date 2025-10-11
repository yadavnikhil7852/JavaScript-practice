// Task 1: Fetch posts and display first 5 titles
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(Response => Response.json())
    .then(data => {
        console.log("first 5 post title")
        data.slice(0, 5).forEach((post, index) => {
            console.log(`${index + 1}. ${post.title}`);
        });
    })
    .catch(error => console.error("Error fetching posts:", error));
