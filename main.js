var images = ["https://i.pinimg.com/originals/61/b2/d3/61b2d33f39927afa72e5f57a28cc7c83.gif", 
"https://image.freepik.com/free-vector/son-his-father-shoulders-father-son-duo-staring-night-sky-happy-father-s-day-conc_1302-10498.jpg",
"https://image.freepik.com/free-vector/mom-daughter-love-background-mothers-day_1017-25008.jpg",
"https://image.freepik.com/free-vector/cute-boy-standing-position-showing-thumb_96037-450.jpg"];

var names = ["Family book", "Father", "Mother", "Me"];

var i = 0;

function update(){
    i++;
    var number_array = 3
    if(i > number_array){
        i = 0;
    }
    var updated_image = images[i];
    var updated_name = names[i];
    document.getElementById("family_image").src = updated_image;
    document.getElementById("family_name").innerHTML = updated_name;
}