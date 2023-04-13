const photos = [
    "carousel/arts/p1crop.jpg",
    "carousel/arts/collage2.jpg",
    "carousel/arts/IMG_5129.jpeg",
    "carousel/arts/IMG_5130.jpeg",
    "carousel/arts/IMG_5131.jpeg",
    "carousel/arts/IMG_5133.jpeg",
    "carousel/arts/IMG_5136.jpeg",

];
const cur = document.querySelector("#current");
const cap = document.querySelector(".caption");
let idx = 0;


/* This function should:
    (1) display the new image inside of the .current-photo container, and 
    (2) update the caption inside of the .caption paragraph
*/
function showImage() {
    console.log('Show image');
    cur.src = photos[idx];
    cap.innerHTML = `Image ${idx+1} of ${photos.length}`
}


/* This function should set the idx variable 
   to one greater than the current value of idx, 
   and then invoke the showImage() function.
   If the idx gets to one less than the length of 
   the array, set idx to 0.
*/
function forward() {
    console.log('forward');
    // for (let idx=0; idx < photos.length; idx++) {
    // showImage();
    // }
    if (idx === 6) {
        idx = photos.length - 7 
    } else {
    idx ++ ; }
    showImage();
}


// /* This function should set the idx variable 
//    to one less than the current value of idx, 
//    and then invoke the showImage() function.
//    If the idx gets to the beginning, set idx to
//    one less than the length of the array.
// */
function back() {
    console.log('back');
    // idx --;
    if (idx === 0) {
        idx = photos.length - 1
    } else {
        idx --;
    }
    showImage();
}
