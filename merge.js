if (location.pathname === '/welcome' || location.pathname === '/welcome/') {
  location = '/welcome/edit?html,live';
}

if (window.location.pathname.indexOf('/edit') !== -1) $('a.open').click(function (event) {
  event.preventDefault();
  window.top.$('a[href$="' + this.hash + '"]').mousedown().click();
});
