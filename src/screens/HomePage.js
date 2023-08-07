import SearchBar from "../components/Search";
import { useState } from "react";
import '../css/Home.css'

const HomePage = () => {
    const [searchText, setSearchText] = useState("")
    return (
        <SearchBar searchText={searchText} setSearchText={setSearchText}/>
    )
}

export default HomePage;