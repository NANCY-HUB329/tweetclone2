import React,{useState} from 'react'
import "./TweetBox.css";
import { Avatar,Button} from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
    const[tweetMessage,setTweetMessage] =useState("");
    const[tweetImage,setTweetImage] =useState("");
    const sendTweet = e =>{
        e.preventDefault();
        db.collection('posts').add({
          displayName:'Nancy Gathoni',
          username:'sonniegee',
          verified:true,
          text:tweetMessage,
          image:tweetImage,
          avatar:"https://lh3.googleusercontent.com/YWln0WLdaBKkRwZpkMlZ_LmSSXqIS9wPEDWn5HcwyGM5PNxs9SpZgZgGsjrASRzlm53a_LfNM-Lik6u_6QIuW2un0Q=w640-h400-e365-rj-sc0x00ffffff", 
          });
          setTweetMessage("");
          setTweetImage("");
    };
    return <div className ="tweetBox">
        <form >
            <div className ="tweetBox__input">
             <Avatar src="https://lh3.googleusercontent.com/YWln0WLdaBKkRwZpkMlZ_LmSSXqIS9wPEDWn5HcwyGM5PNxs9SpZgZgGsjrASRzlm53a_LfNM-Lik6u_6QIuW2un0Q=w640-h400-e365-rj-sc0x00ffffff"/>
             <input
              onChange = {e => setTweetMessage(e.target.value)}
              value={tweetMessage} placeholder ="What's happening?" type ="text"/>   
             
            </div>
            <input 
            value ={tweetImage}
            onChange={e =>setTweetImage(e.target.value)}
            className ="tweetBox__imageInput"
             placeholder =" Optional:  Enter image URL" type ="text"
            />
            <Button onClick={sendTweet} type="submit"className ="tweetBox__tweetButton">Tweet</Button>
        </form>

        </div>;
     
}
export default TweetBox;