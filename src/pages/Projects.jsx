import Konesans from "../assets/images/konesans.jpg"
import Tradisyon from "../assets/images/tradisyon.jpg"
import Ouve from "../assets/images/Ouve.jpg"
export function Projects() {
    return (
        <>
            <h2> Below are website projects that I completed for my clients</h2>   
            <h3><a href="https://konesanslakay.com/">Haitian Education Website Project</a></h3>            
            <img src={Konesans} alt="profile" height="200" />
            <h3><a href="https://tradisyonlakay.com/">Haitian Traditional Products Website Project</a></h3>
            <img src={Tradisyon} alt="profile" height="200" />
            <h3><a href="https://ouvejew.com/">Haitian Non-Organization Website Project</a></h3>
            <img src={Ouve} alt="profile" height="200" />
            <hr/> 
        </>
    ) 
}