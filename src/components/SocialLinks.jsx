import React from "react";

const social = [
    { href: "#",className:"fa fa-twitter" ,id:"200"},
    { href: "#",className:"fa fa-facebook" , id:"201" },
    { href: "#",className:"fa fa-instagram" ,id:"202"},
    { href: "#",className:"fa fa-telegram",id:"203" },
    { href: "#",className:"fa fa-whatsapp",id:"204" },
];




export default function SocialLinks() {
  return (  
  
  <div className="social-links">
     
  {social.map( ({href,className,id}) =>{
  
     return(
             <a href={href} key={id}>
                 <i className={className} ></i>
             </a> )}

     )}

 </div>
  
    
  )
}
