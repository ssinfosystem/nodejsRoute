
const genres = [
    { id: 1, name: 'Action' },  
    { id: 2, name: 'Horror' },  
    { id: 3, name: 'Romance' },  
  ];

const statusCode = [
{ id: 0, name:'Sunny skies/Clear skies'},
{ id: 1, name:'Partly cloudy skies'},
{ id: 2, name:'Cloudy skies'},
{ id: 3, name:'Overcast skies'},
{ id: 10, name:'Mist'},
{ id: 21, name:'Patchy rain possible'},
{ id: 22, name:'Patchy snow possible'},
{ id: 23, name:'Patchy sleet possible'},
{ id: 24, name:'Patchy freezing drizzle possible'},
{ id: 29, name:'Thundery outbreaks possible'},
{ id: 38, name:'Blowing snow'},
{ id: 39, name:'Blizzard'},
{ id: 45, name:'Fog'},
{ id: 49, name:'Freezing fog'},
{ id: 50, name:'Patchy light drizzle'},
{ id: 51, name:'Light drizzle'},
{ id: 56, name:'Freezing drizzle'},
{ id: 57, name:'Heavy freezing drizzle'},
{ id: 60, name:'Patchy light rain'},
{ id: 61, name:'Light rain'},
{ id: 62, name:'Moderate rain at times'},
{ id: 63, name:'Moderate rain'},
{ id: 64, name:'Heavy rain at times'},
{ id: 65, name:'Heavy rain'},
{ id: 66, name:'Light freezing rain'},
{ id: 67, name:'Moderate or heavy freezing rain'},
{ id: 68, name:'Light sleet'},
{ id: 69, name:'Moderate or heavy sleet'},
{ id: 70, name:'Patchy light snow'},
{ id: 71, name:'Light snow'},
{ id: 72, name:'Patchy moderate snow'},
{ id: 73, name:'Moderate snow'},
{ id: 74, name:'Patchy heavy snow'},
{ id: 75, name:'Heavy snow'},
{ id: 79, name:'Ice pellets'},
{ id: 80, name:'Light rain shower'},
{ id: 81, name:'Moderate or heavy rain shower'},
{ id: 82, name:'Torrential rain shower'},
{ id: 83, name:'Light sleet showers'},
{ id: 84, name:'Moderate or heavy sleet showers'},
{ id: 85, name:'Light snow showers'},
{ id: 86, name:'Moderate or heavy snow showers'},
{ id: 87, name:'Light showers of ice pellets'},
{ id: 88, name:'Moderate or heavy showers of ice pellets'},
{ id: 91, name:'Patchy light rain with thunder'},
{ id: 92, name:'Moderate or heavy rain with thunder'},
{ id: 93, name:'Patchy light snow with thunder'},
{ id: 94, name:'Moderate or heavy snow with thunder'}
] ;

const ss = 1;

const status = statusCode.find(c => c.id === 1);
  if (!status) 
      console.log('Not found')
  else {
    console.log('found') ;
    console.log(status.name);
  }    

  console.log(Math.floor(Math.random() * 11));
