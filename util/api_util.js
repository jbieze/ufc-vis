export const fetchFighters = () => (
  $.ajax({
    method: 'GET',
    url: "http://ufc-data-api.ufc.com/api/v3/us/fighters",
    // headers: {
    //   'Access-Control-Allow-Origin': '*'
    // },
    dataType: 'jsonp',
    jsonCallback: 'results'
  })
);

export const fetchFighter = id => (
  $.ajax({
    method: 'GET',
    url: `http://ufc-data-api.ufc.com/api/v3/us/fighters/${id}`
  })
);
