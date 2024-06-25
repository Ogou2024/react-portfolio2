import Profile from "../assets/images/profile.jpg"
export function Home() {
    return (<>           
        <h1>Hello, Welcome!</h1>
        {/*<img src="../assets/images/profile.PNG" height="200"/>*/}
        <img src={Profile} alt="profile" height="200" />
        <h1>I am a Web Developer</h1>           
        <h2> Click on the tabs in the upper right corner<br /> 
        to find out a bit about me.<br /> 
        See you there!</h2>
        <hr/>      
    </>        
    )    
}