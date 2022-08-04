mapboxgl.accessToken = 'pk.eyJ1IjoidHJla3dpdGh0YXlsb3IiLCJhIjoiY2owZTB0OWkyMDE2bDMycWw1N3J2OHZpZyJ9.jDMCcXBCjsbQ-Vh973LQZA'; // replace this with your access token
var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/trekwithtaylor/cj0h4jjwe003w2sultexx0ds4',
        center: [-100.486052,37.830348],
        zoom: 2
});



map.on('load', function () {
    map.addSource("states", {
        "type": "geojson",
        "data": "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_admin_1_states_provinces.geojson"
    });

