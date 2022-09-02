
module.exports.getDate = function(){
  //Straight outta stackoverflow
  let options = {weekday: 'long', day:'numeric',month:'long'};
  let today = new Date();
  let day = today.toLocaleDateString("en-us",options);
  return day;
}

exports.getDay =  function(){
  //Straight outta stackoverflow
  let options = {weekday: 'long'};
  let today = new Date();
  let day = today.toLocaleDateString("en-us",options);
  return day;
}
