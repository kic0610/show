let $ALL = Array.from(document.getElementsByClassName('item'));

let Sensors = {
  전체분별센서: function (i) {
    i.forEach((noo) => {
      if (noo.classList.contains('item')) {
        noo.style.display = 'flex';
      } else {
        noo.style.display = 'none';
      }
    });
  },

  바지분별센서: function (i) {
    i.forEach((noo) => {
      if (noo.classList.contains('pants')) {
        noo.style.display = 'flex';
      } else {
        noo.style.display = 'none';
      }
    });
  },

  스커트분별센서: function (i) {
    i.forEach((noo) => {
      if (noo.classList.contains('shirts')) {
        noo.style.display = 'flex';
      } else {
        noo.style.display = 'none';
      }
    });
  },

  티셔츠분별센서: function (i) {
    i.forEach((noo) => {
      if (noo.classList.contains('Tshirt')) {
        noo.style.display = 'flex';
      } else {
        noo.style.display = 'none';
      }
    });
  },

  blue분별센서: function (i) {
    i.forEach((noo) => {
      if (noo.classList.contains('blue')) {
        noo.style.display = 'flex';
      } else {
        noo.style.display = 'none';
      }
    });
  },

  yellow분별센서: function (i) {
    i.forEach((noo) => {
      if (noo.classList.contains('yellow')) {
        noo.style.display = 'flex';
      } else {
        noo.style.display = 'none';
      }
    });
  },

  pink분별센서: function (i) {
    i.forEach((noo) => {
      if (noo.classList.contains('pink')) {
        noo.style.display = 'flex';
      } else {
        noo.style.display = 'none';
      }
    });
  },
};
