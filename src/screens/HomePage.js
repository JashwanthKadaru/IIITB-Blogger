import SearchBar from "../components/Search";
import { useState } from "react";
import '../css/Home.css'
import FeedButtons from "../components/FeedButtons";
import HomeFeed from "../components/HomeFeed";

const HomePage = () => {
    const [searchText, setSearchText] = useState("")
    const btnList = [{name:'a', handler:() => {console.log("btn clicked")}},{name:'a', handler:() => {console.log("btn clicked")}},{name:'a', handler:() => {console.log("btn clicked")}}]
    
    const feed = [1,2,3];
    return (
        <>
            <SearchBar searchText={searchText} setSearchText={setSearchText}/>
            <FeedButtons btnList={btnList}/>

            <HomeFeed feed={feed}/>
        </>
    )
}

export default HomePage;