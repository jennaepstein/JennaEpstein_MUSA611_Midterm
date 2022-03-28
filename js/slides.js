
const countryColors = {
  'Poland': '#d53e4f',
  'Byelarus': '#bae4bc',
  'Belarus': '#bae4bc',
  'Russian Empire': '#fee08b',
  'Russia': '#fee08b',
  'Russian Empire': '#fee08b',
  'USSR': '#fee08b',
  'White Russia': '#bae4bc',
  'Polish–Lithuanian Commonwealth': '#d53e4f',


};


// eslint-disable-next-line no-unused-vars

const slides = [
  {
    title: '<h2>The Changing Borders of Poland</h2>',
    content: `<p>I always thought that my great-grandmother Jeanette was from Poland - but this is both correct and incorrect.</p> 
    <p>This web application visualizes her home village of <strong>Horodetz</strong> amidst the changing boundaries of Poland from 1715 through 1994.</p>
    <p>The background map of Eastern Europe to provide context on the shifting geography relative to today's borders.</p>
    <p><em>Historic country bourdaries courtesy of https://github.com/aourednik.</em>`,
    bounds: [[10.546875,48.253941,36.298828,57.774518]],
  },
  {
    title: '1715',
    content: `<p>The Polish-Lithuanian Commonwealth was a country and bi-federation of Poland and Lithuania ruled by a common monarch. It was one of the largest and most populous countries in Europe in the 16th and 17th centuries.</p>`,
    bounds: [[10.546875,48.253941,36.298828,57.774518]],
    features: L.geoJSON(countries, {
      filter: (feature) => feature.properties.YEAR === "1715",
      onEachFeature(feature, layer) {
        layer.setStyle({ fillColor: countryColors[feature.properties.NAME], color: "#787878", fillOpacity: 0.4, });
        layer.bindPopup(`<h4><strong>${feature.properties.NAME}</strong></h4>`);
      },
    }),
  },
  {
    title: '1783',
    content: `<p>1772 marked the beginning of the end for the Polish-Lithuanian Commonwealth.</p>
    <p>The beginning of the end for the Commonwealth came in 1772, with the first of three partitions which carved up Polish lands among the Russian, Prussian, and Austrian Empires.
    During the first two partitions between 1783 and 1793, Poland remained in part as its own country on the map.</p>`,
    bounds: [[10.546875,48.253941,36.298828,57.774518]],
    features: L.geoJSON(countries, {
      filter: (feature) => feature.properties.YEAR === "1783",
      onEachFeature(feature, layer) {
        layer.setStyle({ fillColor: countryColors[feature.properties.NAME], color: "#787878", fillOpacity: 0.4, });
        layer.bindPopup(`<h4><strong>${feature.properties.NAME}</strong></h4>`);
      },
    }),
  },
  {
    title: '1793-1914',
    content: `<p>From the third partition all the way until the early 1900s, the town of Horodetz was now within the boundaries of the expansive Russian Empire.</p>
    <p>Poland by name disappeared from the international map. However, the people living there retained their culture and some degree of autonomy. Its territory within the Russian Empire, while part of Russia, was referred to as "Congress Poland."
    </p>`,
    bounds: [[10.546875,48.253941,36.298828,57.774518]],
    features: L.geoJSON(countries, {
      filter: (feature) => feature.properties.YEAR === "1880",
      onEachFeature(feature, layer) {
        layer.setStyle({ fillColor: countryColors[feature.properties.NAME], color: "#787878", fillOpacity: 0.4, });
        layer.bindPopup(`<h4><strong>${feature.properties.NAME}</strong></h4>`);
      },
    }),
  },
  {
    title: '1914',
    content: `<p>1914 marked the beginning of World War I. It was also the period of time when my great-grandmother was a little girl in Horodetz</p>
    <p>The Russian Empire's boundaries were expanding north and south - the Polish areas remained unchanged</p>`,
    bounds: [[10.546875,48.253941,36.298828,57.774518]],
    features: L.geoJSON(countries, {
      filter: (feature) => feature.properties.YEAR === "1914",
      onEachFeature(feature, layer) {
        layer.setStyle({ fillColor: countryColors[feature.properties.NAME], color: "#787878", fillOpacity: 0.4, });
        layer.bindPopup(`<h4><strong>${feature.properties.NAME}</strong></h4>`);
      },
    }),
  },
  {
    title: '1920',
    content: `<p>By the end of World War I, Poland regained its independence as its own country - The Republic of Poland also known as the Second Polish Republic.
     <p>The borders are shifted to the east relative to present-day Poland - it included parts of what are now Ukraine, and Belarus. This territory that was a part of Poland between World War I and World War II, but not a part anymore, is called the "Kresy."</p>
     <p> At this time, the country known at the time of "White Russia" - know Belarus - was carved out between Poland and Russia.</p> 
     <p>Just as Poland became known on the international stage as its own nation again, however, the situation was becoming dire for Jews. My grandmother immigrated from Horodetz (via Antwerp, Belgium) to the United States in 1921.</p>`,
    bounds: [[10.546875,48.253941,36.298828,57.774518]],
    features: L.geoJSON(countries, {
      filter: (feature) => feature.properties.YEAR === "1920",
      onEachFeature(feature, layer) {
        layer.setStyle({ fillColor: countryColors[feature.properties.NAME], color: "#787878", fillOpacity: 0.4, });
        layer.bindPopup(`<h4><strong>${feature.properties.NAME}</strong></h4>`);
      },
    }),
  },
  {
    title: '1938',
    content: `<p>Before World War II, Poland's borders shifted again 0 this time a bit to the north to include part of what is present-day Lithuania.<p>
    <p>While they did not meet until they were both in America, Jeanette's future husband (my great-grandfather) is from Vilna (now Vilnius, Lithuania) that sat within these Polish borders for a few years.`,
    bounds: [[10.546875,48.253941,36.298828,57.774518]],
    features: L.geoJSON(countries, {
      filter: (feature) => feature.properties.YEAR === "1938",
      onEachFeature(feature, layer) {
        layer.setStyle({ fillColor: countryColors[feature.properties.NAME], color: "#787878", fillOpacity: 0.4, });
        layer.bindPopup(`<h4><strong>${feature.properties.NAME}</strong></h4>`);
      },
    }),
  },
  {
    title: '1945',
    content: `<p>The end of World War II saw parts of eastern Poland fall under the newly-formed USSR - including Horodetz and other eastern areas</p>
    <p>So While HOrodetz briefly enjoyed status as part of Poland, it changed its geopolitical status once again as it was absorbed by the USSR.</p>`,
    bounds: [[10.546875,48.253941,36.298828,57.774518]],
    features: L.geoJSON(countries, {
      filter: (feature) => feature.properties.YEAR === "1945",
      onEachFeature(feature, layer) {
        layer.setStyle({ fillColor: countryColors[feature.properties.NAME], color: "#787878", fillOpacity: 0.4, });
        layer.bindPopup(`<h4><strong>${feature.properties.NAME}</strong></h4>`);
      },
    }),
  },
  {
    title: '1994',
    content: `After the Cold War and the dissolution of the USSR, Belarus gained independence and saw more expansive borders than it did when it was White Russia. Horodetz (spelled "Gorodets" now on European maps), found itself in Belarus.</p>
    <p>To this day, there are not many remnants of the vibrant Jewish community that once thrived in Horodetz.</p>
    <p>My mom and I had been planning to visit what does remain, but unfotuantely as American Jewish women, visitng present-day Belarus - not to mention also during the Ukraine-Russia crisis - is unwise.</p>`,
    bounds: [[10.546875,48.253941,36.298828,57.774518]],
    features: L.geoJSON(countries, {
      filter: (feature) => feature.properties.YEAR === "1994",
      onEachFeature(feature, layer) {
        layer.setStyle({ fillColor: countryColors[feature.properties.NAME], color: "#787878", fillOpacity: 0.4, });
        layer.bindPopup(`<h4><strong>${feature.properties.NAME}</strong></h4>`);
      },
    }),
  },
];


var eachFeatureFunction = function(layer) {
  layer.bindPopup(
      'NAME: ' + layer.feature.properties.NAME)
layer.on('click', function (event) {
  /* =====================
  The following code will run every time a layer on the map is clicked.
  Check out layer.feature to see some useful data about the layer that
  you can use in your application.
  ===================== */
  console.log(layer.feature);

  // +

});
};

