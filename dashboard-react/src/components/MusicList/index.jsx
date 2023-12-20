import logo from '../../images/logoCreativeSouls.png'
import { Row } from "react-bootstrap"
import { MusicCard } from "../MusicCard"
import useMusic from "../../hooks/useMusic"
import styles from './index.module.css'
export const MusicList = () =>{
 const{showData,loading}=   useMusic()



console.log(loading)
console.log(showData && showData.length === 0 ? 'siuu' : 'boee')
return (
    <Row className={`mt-5 align-self-stretch d-flex ${styles.fondo}`}>

       {
       
       showData && showData.length === 0 ? 
       <div className={styles.logo}> 
     <div>
      
      <img src={logo} className={styles.logo}></img>
      <p className='text-white'>Lo sentimos, No se encuentra</p>
      </div>
     </div>
       : 
       showData && loading === false ? showData.map((music) =>(
               <MusicCard  key={music.id} music={music}    />
               )) : loading === true ?
               <div className={styles.logo}> 
<div>
 
 <img src={logo} className={styles.logo}></img>
 <p className='text-white'>Buscando... Buscando... Buscando...</p>
 </div>
</div>
 :

<div className={styles.logo}> 
<div>
 
 <img src={logo} className={styles.logo}></img>
 <p className='text-white'>Busca el track de tu artista preferido en Creative Souls!</p>
 </div>
</div>
}
    </Row>
)

}