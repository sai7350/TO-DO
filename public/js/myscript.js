const image=document.getElementById("image");
const cropper=new Cropper(image,{
    aspectRatio:1,
    viewMode:0,
});
document.getElementById("cropimage").addEventListener('click',
function(){
    var cropImage=cropper.getCroppedCanvas().toDataURL("image/png");
    document.getElementById('output').src=cropImage;
})

   