import React from "react";

function Picture() {
    var num = Math.floor(Math.random() * 100);
    var img_url = "https://picsum.photos/144"
  
    return (
    <div>
    <img alt = "Random" src={img_url} />
    <p>This is my first React page. <br />
    My number is {num}
    </p>
    </div>
    );
  }


  export default Picture;