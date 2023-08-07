import SearchBar from "../components/Search";
import { useState } from "react";
import '../css/Home.css'
import FeedButtons from "../components/FeedButtons";
import HomeFeed from "../components/HomeFeed";

const HomePage = () => {
    const [searchText, setSearchText] = useState("")
    const btnList = [{name:'unread', handler:() => {console.log("btn clicked")}},{name:'last week', handler:() => {console.log("btn clicked")}},{name:'last month', handler:() => {console.log("btn clicked")}},{name:'All', handler:() => {console.log("btn clicked")}}]

    const tagsList = [{name:'Web development', handler:() => {console.log("btn clicked")}},{name:'Machine Learning', handler:() => {console.log("btn clicked")}},{name:'Technology', handler:() => {console.log("btn clicked")}}, {name:'Web development', handler:() => {console.log("btn clicked")}},{name:'Machine Learning', handler:() => {console.log("btn clicked")}},{name:'Technology', handler:() => {console.log("btn clicked")}}]

    
    
    const feed = [1,2,3];
    return (
        <>
            <SearchBar searchText={searchText} setSearchText={setSearchText}/>

            <FeedButtons btnList={btnList}/>
            <hr style={{"width": "min(75%, 700px)", "margin-top":"20px", "border": "1px solid #bbb"}}/> 
            <FeedButtons btnList={tagsList}/>

            <HomeFeed feed={feed}/>
        </>
    )
}

export default HomePage;