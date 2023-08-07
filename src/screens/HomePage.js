import SearchBar from "../components/Search";
import { useState } from "react";
import '../css/Home.css'
import FeedButtons from "../components/FeedButtons";

const HomePage = () => {
    const [searchText, setSearchText] = useState("")
    const btnList = [{name:'a', handler:() => {console.log("btn clicked")}},{name:'a', handler:() => {console.log("btn clicked")}},{name:'a', handler:() => {console.log("btn clicked")}}]
    return (
        <>
            <SearchBar searchText={searchText} setSearchText={setSearchText}/>
            <FeedButtons btnList={btnList}/>
        </>
    )
}

export default HomePage;