import React from 'react';
import '../css/main.css';
import {intro} from './content.js'; 

export default function Intro() {
    return (
        <section id="intro">   

   	<div class="intro-overlay"></div>	

   	<div class="intro-content">
   		<div class="row">

   			<div class="col-twelve">

	   			<h5> {intro.topsub }</h5>
	   			<h1>I'm {intro.name}.</h1>

	   			<p class="intro-position">
	   				<span>{intro.des}</span>
	   				{/* <span>UI/UX Designer</span>  */}
	   			</p>

	   			<a class="button stroke smoothscroll" href="#about" title="">More About Me</a>

	   		</div>  
   			
   		</div>   		 		
   	</div> 

   	<ul class="intro-social">        
         <li><a href={intro.linkedin}><i class="fa fa-linkedin"></i></a></li>
         <li><a href={intro.github}><i class="fa fa-github"></i></a></li>
         {/* <li><a href="#"><i class="fa fa-twitter"></i></a></li> */}
         {/* <li><a href="#"><i class="fa fa-dribbble"></i></a></li> */}
         {/* <li><a href="#"><i class="fa fa-instagram"></i></a></li> */}
      </ul> 	

   </section>
    );
}