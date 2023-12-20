import { Card, Col,Button } from "react-bootstrap"
import styles from './index.module.css'
import useMusic from "../../hooks/useMusic"




export const MusicCard = (showData) =>{
 const{handleDrinkIdClick} =useMusic()

 

    return(
        <Col md={6} lg={3}>
<Card className={`mb-4  ${styles.FondoCard} `}>

<Card.Img variant='top' className={styles.imgCard} src={showData.music.album.images[0].url}  />

<Card.Body>

<Card.Title className={styles.favoriteBoxFlex} >
    <div>


 <p className={styles.NameSong}> Nombre: {showData.music.artists[0].name}</p>

 </div>
 <div className={styles.favoriteBox}>




 </div>
</Card.Title>

<Button 
className={`w-100 text-uppercase mt-2 ${styles.buttonView}`} onClick={()=>{ handleDrinkIdClick(showData.music.id);
    }} >
    Ver mas
</Button>

</Card.Body>


</Card>

        </Col>
    )
}
