import { MusicList } from "../../components/MusicList";
 import { MusicModalDetail } from "../../components/MusicModalDetail";  
import { SearchForm } from "../../components/SearchForm";
import { Menu } from "../../components/Menu";

export const Home = ()=>{

        
    return(
        <>
        <Menu/>
        <SearchForm/> 
        <MusicList/>
        <MusicModalDetail/>      
        </>
    )
}