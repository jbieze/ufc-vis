const UfcAPI = require('ufc-api');

const ufc = new UfcAPI({
  version: 'v3'
});

ufc.titleHolders(function(err, res) {
  console.log(res.body);
  // =>
  // [
  //   {
  //     id: 1160,
  //     wins: 13,
  //     statid: 1494,
  //     losses: 4,
  //     last_name: "Jung",
  //     weight_class: "Featherweight",
  //     title_holder: true,
  //     draws: 0,
  //     first_name: "Chan Sung",
  //     fighter_status: "Active",
  //     thumbnail: "..."
  //   },
  //   ...
  // ]
});
