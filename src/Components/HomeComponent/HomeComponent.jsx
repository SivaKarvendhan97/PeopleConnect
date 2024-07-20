
import react from 'react';
import logo from '../../assets/desktop_homePage.jpg'
import Styles from '../HomeComponent/HomeComponent.css'
import ContentComponent from '../ContentComponent/ContentComponent';
import FounderDetailsModal from '../FounderDetails/FounderDetails';
const HomeComponent =() =>{
    return(
        <>
     <img src={logo} alt="description" className="responsive-image" />
     <ContentComponent/>
     <FounderDetailsModal/>
        </>
    )
}

export default HomeComponent;