import { useState } from "react";
import EmojiList from "./component/emojilist";
import Header from "./component/header";
import SearchBar from "./component/searchbar";
import filterEmoji from "./filterEmoji";

export default function App(){
  const initialEmojis=filterEmoji("",20);
const [filteredEmojis,setFilterEmojis]= useState(initialEmojis)
return (
    <>
  <div>
    <Header/>
    <SearchBar setEmoji={setFilterEmojis}/>
    <EmojiList data={filteredEmojis}/>
  </div>
  </>
);
}