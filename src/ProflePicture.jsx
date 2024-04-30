
function ProfilePicture(){
    // const imageUrl = './src/assets/doctor1.png';
    // const handleClick = ()=> console.log("OUCH!");

    // return(<img onClick={handleClick} src={imageUrl}></img>);

                    //another example
    const imageUrl = './src/assets/doctor1.png';
    const handleClick = (e)=> e.target.style.display="none";
                
    return(<img onClick={(e)=>handleClick(e)} src={imageUrl}></img>);
}

export default ProfilePicture;