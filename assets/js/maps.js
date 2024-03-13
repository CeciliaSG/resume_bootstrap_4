// Initialize and add the map
let map;

async function initMap() {
    // The location of Uluru
    const position = {
        lat: 59.34363168914885,
        lng: 18.053254724855158

    };
    // Request needed libraries.
    //@ts-ignore
    const {
        Map
    } = await google.maps.importLibrary("maps");
    const {
        AdvancedMarkerElement
    } = await google.maps.importLibrary("marker");

    // The map, centered at Uluru
    map = new Map(document.getElementById("map"), {
        zoom: 3,
        center: position,
        mapId: "map1",
    });

    // The marker, positioned at Uluru
    const marker = new AdvancedMarkerElement({
        map: map,
        position: position,
        title: "Stockholm",
    });
}

initMap();