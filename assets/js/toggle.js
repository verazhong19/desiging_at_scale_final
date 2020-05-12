function toggleFloorplan() {
    let demo = document.getElementById("demo");
    let floorplan = document.getElementById("floorplan");
    let mapView= document.getElementById("mapView");
    let visit = document.getElementById("visit");
    let photoButton = document.getElementById("photoButton");
    let mapButton = document.getElementById("mapButton");
    let floorButton = document.getElementById("floorButton");
    let visitButton = document.getElementById("visitButton");



    demo.style.display='none';
    mapView.style.display='none';
    visit.style.display='none';
    floorplan.style.display='block';
    floorButton.style.color='#1abc9c';
    floorButton.style.textDecoration='underline'

    photoButton.style.color='#fff';
    photoButton.style.textDecoration='none'

    mapButton.style.color='#fff';
    mapButton.style.textDecoration='none'

    visitButton.style.color='#fff';
    visitButton.style.textDecoration='none'

  }

function togglePhoto(){
    let demo = document.getElementById("demo");
    let floorplan = document.getElementById("floorplan");
    let mapView= document.getElementById("mapView");
    let visit = document.getElementById("visit");
    let photoButton = document.getElementById("photoButton");
    let mapButton = document.getElementById("mapButton");
    let floorButton = document.getElementById("floorButton");
    let visitButton = document.getElementById("visitButton");


    demo.style.display='block';
    mapView.style.display='none';
    visit.style.display='none';
    floorplan.style.display='none'
    photoButton.style.textDecoration='none'

    photoButton.style.color='#1abc9c'
    photoButton.style.textDecoration='underline'

    floorButton.style.color='#fff';
    floorButton.style.textDecoration='none'

    mapButton.style.color='#fff';
    mapButton.style.textDecoration='none'

    visitButton.style.color='#fff';
    visitButton.style.textDecoration='none'

}

function toggleMap(){
    let demo = document.getElementById("demo");
    let floorplan = document.getElementById("floorplan");
    let mapView= document.getElementById("mapView");
    let visit = document.getElementById("visit");
    let photoButton = document.getElementById("photoButton");
    let mapButton = document.getElementById("mapButton");

    let floorButton = document.getElementById("floorButton");
    let visitButton = document.getElementById("visitButton");

    demo.style.display='none';
    mapView.style.display='block';
    visit.style.display='none';
    floorplan.style.display='none'
    photoButton.style.color='#fff'
    photoButton.style.textDecoration='none'


    floorButton.style.color='#fff';
    floorButton.style.textDecoration='none'


    mapButton.style.color='#1abc9c';
    mapButton.style.textDecoration='underline'

    visitButton.style.color='#fff';
    visitButton.style.textDecoration='none'
}

function toggleVisit() {
    let demo = document.getElementById("demo");
    let floorplan = document.getElementById("floorplan");
    let mapView= document.getElementById("mapView");
    let visit = document.getElementById("visit");
    let photoButton = document.getElementById("photoButton");
    let mapButton = document.getElementById("mapButton");
    let floorButton = document.getElementById("floorButton");
    let visitButton = document.getElementById("visitButton");

    demo.style.display='none';
    mapView.style.display='none';
    visit.style.display='block';
    floorplan.style.display='none'
    photoButton.style.color='#fff'
    photoButton.style.textDecoration='none'

    floorButton.style.color='#fff';
    floorButton.style.textDecoration='none'

    mapButton.style.color='#fff';
    mapButton.style.textDecoration='none'

    visitButton.style.color='#1abc9c';
    visitButton.style.textDecoration='underline'

}