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
for (var i = 0; i < 12; i++) {
  var img_src = "images/profile.png";
  var name = "Name " + i;
  var description = "Description " + i;
  createProfile(img_src, name, description);
}
