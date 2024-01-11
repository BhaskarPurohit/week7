interface Circle{
    radius: number;
    borderWidth?:number;  //optional property
}

function render(circle:Circle){
    let width: (number | undefined) = circle.borderWidth;
    console.log("circle created");
    

}

render({
    radius: 10
})