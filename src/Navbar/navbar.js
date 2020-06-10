import React from 'react';
import logosimp from './logosimp.png';
import  './navbar.css';



const list=["Acceuil","Equipe","Apropos","Contact"];



function Navbar(){
    return (
    <div><nav className='navbar'>

            <img   className=" logo" src={logosimp} alt="logo simplon" width="100px"/>

         <span className="link-span">{
               list.map( el=> <a  className = "links"  href="#">{el}</a>)
              }

              </span>
            </nav>


          
            </div>
    )
    
}
export default Navbar;