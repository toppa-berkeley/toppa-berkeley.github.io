function createSectionHeader(header) {
  document.write('<div class="grid_12">' +
        '<h2>' + header + '</h2>' +
      '</div>');
}

function createProfile(img_src, name, description, index) {
  document.write('<div class="grid_3">' +
      '<div class="box", style="border-radius: 20px">' +
        '<a href=' + img_src + ' class="gall_item">' +
        '<img src=' + img_src + ' alt=""><span></span></a>' +
          '<div class="box_bot"><div class="box_bot_title">' + name + '</div>' +
            '<p>' + description + '</p><div id="' + index + '" class="btn">more</a></div>' +
          '</div>' +
        '</div>' +
      '</div>');
}

function createModal(name, index) {
  document.write('<div id="modal' + index + '" class="modal">' +
    '<div class="modal-content">' +
      '<div class="modal-header">' +
        '<span class="close">&times;</span>' +
        '<h2>' + name + '</h2>' +
      '</div>' +
      '<div class="modal-body">' +
        '<p>Some text in the Modal Body</p>' +
      '</div>' +
      '<div class="modal-footer">' +
        '<h3>Modal Footer</h3>' +
      '</div>' +
    '</div>' +
  '</div>');
}

function createSection(header) {
  createSectionHeader(header);
  var index = 0;
  for (const person of response) {
    var img = person["Professional Photo"]
    var img_src = "images/members/profiles/" + img;
    var name = person["First Name"] + " " + person["Last Name"];
    // var description = "Description ";
    var description = person["Description"];
    var team = person["Project Team"];
    // console.log(description);

    if (team == header) {
      createProfile(img_src, name, description, index);
      createModal(name, index);
    }
    index ++;
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
var modals = document.getElementsByClassName("modal");

// Get the button that opens the modal
var btns = document.getElementsByClassName("btn");

// Get the <span> element that closes the modal
var closes = document.getElementsByClassName("close");

// When the user clicks on the button, open the modal
for (const btn of btns) {
  btn.onclick = function() {
    console.log(btn.id);
    var currModal = document.getElementById("modal" + btn.id);
    currModal.style.display = "block";
  }
}

// When the user clicks on <span> (x), close the modal
for (const span of closes) {
  span.onclick = function() {
    for (const modal of modals) {
      modal.style.display = "none";
    }
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  for (const modal of modals) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}
