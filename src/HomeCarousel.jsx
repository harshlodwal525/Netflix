import React from "react";
function HomeCarousel(){
return(
    <>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://www.desktopbackground.org/p/2011/03/30/180042_custom-netflix-wallpapers-2015-part-6-by-espioartwork-102-on-deviantart_1024x628_h.jpg" height={500} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://cdn.mos.cms.futurecdn.net/UMSyp6acCgnsBbaj9XZxYC-1200-80.jpg" height={500} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="http://www.geekysoumya.com/wp-content/uploads/2020/04/Hot-Star-Best-Movies.jpg" height={500} alt="Third slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://s3images.zee5.com/wp-content/uploads/sites/7/2020/09/Forbidden-Love-films-on-ZEE5.jpg" height={500} alt="Third slide"/>
    </div>
   
    <div class="carousel-item">
    <a href="sony.js">
      <img class="d-block w-100" src="https://ptrip.in/wp-content/uploads/2021/03/Untitled-1-1.jpg" height={500} alt="Third slide"/>
      </a>
    </div>
    <div class="carousel-item">
    <a href="voot.js">
      <img class="d-block w-100" src="https://i.ytimg.com/vi/YOjoefofPyE/maxresdefault.jpg"  height={500} alt="Third slide"/>
      </a> 
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    </>
)
}
export default HomeCarousel;
