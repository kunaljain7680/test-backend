require('dotenv').config();

const express=require("express");

const app=express();

const port=4000;

// make an object

const github={
    
        "login": "kunaljain7680",
        "id": 102716904,
        "node_id": "U_kgDOBh9V6A",
        "avatar_url": "https://avatars.githubusercontent.com/u/102716904?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/kunaljain7680",
        "html_url": "https://github.com/kunaljain7680",
        "followers_url": "https://api.github.com/users/kunaljain7680/followers",
        "following_url": "https://api.github.com/users/kunaljain7680/following{/other_user}",
        "gists_url": "https://api.github.com/users/kunaljain7680/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/kunaljain7680/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/kunaljain7680/subscriptions",
        "organizations_url": "https://api.github.com/users/kunaljain7680/orgs",
        "repos_url": "https://api.github.com/users/kunaljain7680/repos",
        "events_url": "https://api.github.com/users/kunaljain7680/events{/privacy}",
        "received_events_url": "https://api.github.com/users/kunaljain7680/received_events",
        "type": "User",
        "site_admin": false,
        "name": "Kunal Jain",
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": null,
        "twitter_username": null,
        "public_repos": 28,
        "public_gists": 0,
        "followers": 1,
        "following": 1,
        "created_at": "2022-03-31T05:39:00Z",
        "updated_at": "2024-02-15T18:08:33Z"
      }

app.get("/",(req,res)=>{  // app says to server ki agar "/" route pe koi bhi request ati h then send response 
    res.send("Hello Kunal");
})  

app.get('/github',(req,res)=>{
    res.json(github);  // res.json takes object
})

app.listen(process.env.PORT,()=>{
    console.log(`App is listening on ${port}`);
})
