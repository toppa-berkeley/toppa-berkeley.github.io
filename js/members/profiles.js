function createSectionHeader(header) {
  document.write('<div class="grid_12">' +
        '<h2>' + header + '</h2>' +
      '</div>');
}

function createProfile(img_src, name, description) {
  document.write('<div class="grid_3">' +
      '<div class="box", style="border-radius: 20px">' +
        '<a href=' + img_src + ' class="gall_item">' +
        '<img src=' + img_src + ' alt=""><span></span></a>' +
          '<div class="box_bot"><div class="box_bot_title">' + name + '</div>' +
            '<p>' + description + '</p><a href="#" class="btn">more</a>' +
          '</div>' +
        '</div>' +
      '</div>');
}

function createSection(header) {
  createSectionHeader(header);

  for (const person of response) {
    var img_src = "images/profile.png";
    var name = person["First Name"] + " " + person["Last Name"];
    // var description = "Description ";
    var description = person["A brief introduction about yourself"];
    var team = person["Project Team"];
    // console.log(description);

    if (team == header) {
      createProfile(img_src, name, description);
    }
  }
}

function loadJSON(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', 'js/members/toppa-test.json', false);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(JSON.parse(xobj.responseText));
    }
  };
  xobj.send(null);
}

var response;
loadJSON(function(json) {
  console.log(json);
  response = json;
});

var teams = ['Member & Resource Directory',
'Expanding Your Horizons',
'NGO Consulting for Pandemic Professors',
'Me @ ...',
'Project Content Kickstart',
'Ecology Center',
'Newsletter & Toppa E-book',
'AI + Stock Trading'];

for (const team of teams) {
  createSection(team);
}
