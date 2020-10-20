function createProfile() {
  document.write('<div class="grid_3">' +
      '<div class="box", style="border-radius: 20px">' +
        '<a href="images/profile.png" class="gall_item">' +
        '<img src="images/profile.png" alt=""><span></span></a>' +
          '<div class="box_bot"><div class="box_bot_title">Name</div>' +
            '<p>Description</p><a href="#" class="btn">more</a>' +
          '</div>' +
        '</div>' +
      '</div>');
}
for (var i = 0; i < 12; i++) {
  createProfile();
}
