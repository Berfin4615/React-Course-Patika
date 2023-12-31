import axios from "axios";

async function GetData(user_id){
    const {data: user} = await axios("https://jsonplaceholder.typicode.com/users/" + user_id);
    const {data: posts} = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + user_id);
    console.log("Users", user);
    console.log("Posts", posts);
};

export default GetData;