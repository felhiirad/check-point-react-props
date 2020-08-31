import React from 'react';






const Profile=(props)=>{
    const {firstName="undefined", bio="undifined",profession="undifined"}=props;
      const handelName=()=>{
       alert(`${firstName}
              ${bio}
              ${profession}`);

}

   
return(
    <div style={{ textAlign: "center",
    borderLeft: "20px solid black",
    backgroundColor: "bleu",
    borderRadius: 100,
    borderRight: "1px solid blue",
    marginBottom: 30 }}>

      
<h1 style={{color:"brown",letterSpacing:3, fontFamily:"fantasy",textDecorationLine:" underline",
  textDecorationStyle:" double"}}> {firstName}</h1>
    
<h3 style={{padding: "20px 20px",
        color:"black",
        fontSize: 15,
        borderRadius: 25}}> Bio:{bio}</h3>

        
<h5 style={{color:"brown", fontFamily:"cursive"}}> {profession}</h5>
{props.children}

<button onClick={handelName} style={{ padding: "20px 20px",
        color:"black",
        fontSize: 20,
        borderRadius: 50}}>see more</button>
    


    </div>



);
}

export default Profile;