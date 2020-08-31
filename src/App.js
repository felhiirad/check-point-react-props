import React from 'react';
import './App.css';
import Profile from './Profile/Profile';
import PropTypes from 'prop-types';

Profile.propTypes = {
  firstName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string
}





function App() {
 
  return (
    <>
    <div>
      <h1 style={{textAlign:"center" }}>the most popular in the world</h1>
      <Profile firstName="Isaac Newton" bio="Physicien anglais, Isaac Newton est reconnu pour ses découvertes en physique, astronomie, optique ou mathématiques. Ses travaux sur l'inertie et la gravité ont permis de grandes avancées." profession="scientist">
        <div>
          <img src="/img1.jpg" alt="isaac newton" style={{ width: 350,
    height: 350,
    borderRadius: "15px 60px"}}/>
        </div>
        </Profile>


    </div>
    <div>
      <Profile firstName="Mark Zuckerberg" bio="Mark Zuckerberg est le créateur du mondialement connu réseau social Facebook.

Né en 1984 dans l'Etat de New York au sein d'une famille juive, Mark Zuckerberg est un petit génie de l'informatique depuis tout jeune, concevant ses premiers programmes dès l'adolescence. A 18 ans, il entre dans la prestigieuse université de Harvard, et c'est là, en 2004, qu'il crée le site internet The Facebook. Initialement destiné aux élèves de l'école, le réseau social, fort de son succès, est très vite étendu à d'autres universités puis au grand public, regroupant aujourd'hui plus d'un milliard d'utilisateurs à travers le monde." profession="American computer programmer and entrepreneu">
        <div>
          <img src="/img2.jpg" alt="marc " style={{ width: 350,
    height: 350,
    borderRadius: "15px 60px"}}/>
        </div>
        </Profile>


    </div>
    <div>
      <Profile firstName="Elon Musk" bio="American entrepreneur who cofounded the electronic-payment firm PayPal and formed SpaceX, maker of launch vehicles and spacecraft. He was also one of the first significant investors in, as well as chief executive officer of, the electric car manufacturer Tesla.Musk was born to a South African father and a Canadian mother. He displayed an early talent for computers and entrepreneurship. At age 12 he created a video game and sold it to a computer magazine. In 1988, after obtaining a Canadian passport, Musk left South Africa because he was unwilling to support apartheid through compulsory military service and because he sought the greater economic opportunities available in the United States." profession="Ingénieur en aérospatiale, inventeur, programmeur, ingénieur, entrepreneur, acteur">
        <div>
          <img src="/img3.jpg" alt="Elon Musk " style={{ width: 350,
    height: 350,
    borderRadius: "15px 60px"}}/>
        </div>
        </Profile>


    </div>
    <div>
      <Profile firstName=" Bill Gates" bio="Né en 1955 à Seattle, Bill Gates entre à l'université de Harvard en 1973, où il rencontre Steve Ballmer, actuel PDG de Microsoft, et Paul Allen, avec qui il propose le premier langage de programmation développé pour l'ordinateur personnel, l'Altair Basic. En 1986, le titre Microsoft entre en bourse et, le jour même, Bill Gates devient milliardaire. En 2008, il prend du recul par rapport aux affaires et consacre désormais une partie de sa fortune à la fondation humanitaire qui porte son nom." profession="	Entrepreneur, programmeur, informaticien, inventeur, financier, joueur de bridge, investisseur, acteur, philanthrope">
        <div>
          <img src="/img4.jpg" alt="Bill Gates " style={{ width: 350,
    height: 350,
    borderRadius: "15px 60px"}}/>
        </div>
        </Profile>


    </div>
    </>



          
    
  );
}

export default App;
