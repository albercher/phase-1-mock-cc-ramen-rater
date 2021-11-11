// write your code here
const baseurl = "http://localhost:3000/ramens"

fetch(baseurl)
  .then(response => response.json())
  .then(data => {
    // console.log(data); //test
    data.forEach(element => {
        let ramenMenu = document.querySelector("#ramen-menu");
        let newMenuImg = document.createElement("img");
        newMenuImg.src = element.image;
        newMenuImg.addEventListener("click", () => {
            // console.log("click"); //test
            let detailImg = document.querySelector(".detail-image");
            detailImg.src = element.image;
            let detailName = document.querySelector(".name");
            detailName.innerHTML = element.name;
            let detailRestaurant = document.querySelector(".restaurant");
            detailRestaurant.innerHTML = element.restaurant;
            let detailRating = document.querySelector(".rating");
            detailRating.innerHTML = element.rating;
            let detailComment = document.querySelector("#comment-display");
            detailComment.innerHTML = element.comment;
        });
        ramenMenu.appendChild(newMenuImg);
    })

    
  });

  const newForm =  document.querySelector("#new-ramen");
  newForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let nameInput = document.querySelector("#new-name").value;
      let restaurantInput = document.querySelector("#new-restaurant").value;
      let imageInput = document.querySelector("#new-image").value;
      let ratingInput = document.querySelector("#new-rating").value;
      let commentInput = document.querySelector("#new-comment").value;
      let ramenMenu = document.querySelector("#ramen-menu");
      let newMenuImg = document.createElement("img");
      newMenuImg.src = imageInput;
      newMenuImg.addEventListener("click", () => {
          // console.log("click"); //test
          let detailImg = document.querySelector(".detail-image");
          detailImg.src = imageInput;
          let detailName = document.querySelector(".name");
          detailName.innerHTML = nameInput;
          let detailRestaurant = document.querySelector(".restaurant");
          detailRestaurant.innerHTML = restaurantInput;
          let detailRating = document.querySelector(".rating");
          detailRating.innerHTML = ratingInput;
          let detailComment = document.querySelector("#comment-display");
          detailComment.innerHTML = commentInput;
      });
      ramenMenu.appendChild(newMenuImg);
      newForm.reset();
  })