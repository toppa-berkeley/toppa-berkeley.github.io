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
    var img = person["Professional Photo"]
    var img_src = "images/members/profiles/" + img;
    var name = person["First Name"] + " " + person["Last Name"];
    // var description = "Description ";
    var description = person["Description"];
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
  xobj.open('GET', 'js/members/profiles.json', false);
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

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  console.log("hi");
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
