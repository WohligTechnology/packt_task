var adminURL = "";
var navigationservice = angular
  .module("navigationservice", [])

  .factory("NavigationService", function() {
    var navigation = [
      {
        name: "Fizz Buzz",
        classis: "active",
        anchor: "home"
      },
      {
        name: "Pagination",
        classis: "active",
        anchor: "pagination"
      },
      {
        name: "Star Wars FAQ",
        classis: "active",
        anchor: "star-wars"
      }
    ];

    return {
      getnav: function() {
        return navigation;
      },
      makeactive: function(menuname) {
        for (var i = 0; i < navigation.length; i++) {
          if (navigation[i].name == menuname) {
            navigation[i].classis = "active";
          } else {
            navigation[i].classis = "";
          }
        }
        return menuname;
      }
    };
  });
