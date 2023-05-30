  //jshint esversion:6

const express = require("express");
const ejs = require("ejs");
const _=require('lodash');
const mongoose = require('mongoose'); 

const homeStartingContent = "Welcome to my blog, a place where ideas come to life through words. Explore captivating articles and discover insightful perspectives that will inspire and enrich your journey. Join me on this exciting adventure of thoughts and experiences, where every word is crafted with passion. Thank you for joining me on this journey. Together, let's make every day extraordinary!";
const aboutContent = "Hello there! I'm Adhithya Krishna, a passionate web developer and computer science graduate. Join me on this blog as I share my knowledge, insights, and experiences in the world of web development, helping you create stunning websites and stay up to date with the latest trends.";
const contactContent="I would love to hear from you! If you have any questions, or suggestions, or just want to say hello, feel free to reach out to me. Let's connect and build something amazing together!"

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

// var posts=[];

main().catch(err => console.log(err));

async function main(){
 
  await mongoose.connect('<MongoDB Atlas URL>');

  const blogSchema = new mongoose.Schema({
    title:String,
    content:String
  });

  const Blog = mongoose.model('Blog',blogSchema);
  
  

  app.get("/",async(req,res)=>{
    try{
      const posts = await Blog.find({});
      // console.log(posts)
      res.render("home",{startingContent:homeStartingContent,posts:posts});
    }catch(err){
      console.log(err);
    }

  });
  app.get("/about",(req,res)=>{
      res.render('about',{aboutContent:aboutContent});
  });


  app.get("/contact",(req,res)=>{
    res.render('contact',{contactContent:contactContent});
  });

  app.get("/compose",(req,res)=>{
    res.render('compose')
  });

  // const requestedTitle=_.lowerCase(req.params.blog;  
  //   posts.forEach(post=>{
  //     const storedTitle=_.lowerCase(post.title);
  //     if(storedTitle===requestedTitle){
  //       res.render('post',{title:post.title,content:post.content});
  //     }
  //   });

  app.get("/posts/:blogID",async(req,res)=>{
    const blogID = req.params.blogID;
    try {
        // res.render("post",{title:Blog.title,content:Blog.content});
        const newBlog = await Blog.findOne({_id:blogID});
        res.render("post",{title:newBlog.title,content:newBlog.content}); 
    } catch (error) {
      console.log(error);
    }
    
    
  });
  app.listen(process.env.PORT || 3000, function() {
    console.log("Server started on port 3000");
  });
  app.post("/compose",async(req,res)=>{

    const post = new Blog({
      title:req.body.myTitle,
      content:req.body.myPost
    });

    try {
      await post.save();
      res.redirect("/");  
    } catch (err) {
      console.log(err);
      // Handle the error appropriately, such as displaying an error message to the user
    }
  
  });

}











