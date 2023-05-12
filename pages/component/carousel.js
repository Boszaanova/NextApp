export default function Carousel(){
    return (
        <>
        <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
    <div class="carousel-item active">
        <img src="https://b2c-cdn.carsome.co.th/cdn-cgi/image/format=auto,quality=60,width=1920/B2C/20e1ef5c-850f-418d-9661-30aa900a9bde.jpg" />

        <div class="container">
          <div class="carousel-caption text-start">
            <h1 className="text-dark fs-1">ลงทะเบียนคลิก!<br/> เพื่อรับบัตรน้ำมัน 5,000บ.</h1>
            <p className="text-dark">รับข้อเสนอพิเศษเฉพาะในงานเท่านั้น!</p>
            <p><a class="btn btn-lg btn-primary" href="#">ลงทะเบียน</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://b2c-cdn.carsome.co.th/cdn-cgi/image/format=auto,quality=60,width=1920/B2C/13801811-326d-42ee-a38d-b8ccbec288da.jpg" />

        <div class="container">
          <div class="carousel-caption text-start">
            <h1 className="text-dark fs-1">ลงทะเบียนคลิก!<br/> เพื่อรับบัตรน้ำมัน 5,000บ.</h1>
            <p className="text-dark">รับข้อเสนอพิเศษเฉพาะในงานเท่านั้น!</p>
            <p><a class="btn btn-lg btn-primary" href="#">ลงทะเบียน</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
       
        <img src="https://b2c-cdn.carsome.co.th/cdn-cgi/image/format=auto,quality=60,width=1920/B2C/607e4232-0de5-4d62-9683-bdd87ff76946.png"/>

        <div class="container">
          <div class="carousel-caption text-start">
            <h1 className="text-dark fs-1">ลงทะเบียนคลิก!<br/> เพื่อรับบัตรน้ำมัน 5,000บ.</h1>
            <p className="text-dark">รับข้อเสนอพิเศษเฉพาะในงานเท่านั้น!</p>
            <p><a class="btn btn-lg btn-primary" href="#">ลงทะเบียน</a></p>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
        </>
    )
}