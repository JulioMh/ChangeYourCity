const {mock, assert} = require("sinon");
const database = require("../controllers/UserController");

it("Mocking queries", () => {
  var db = mock(database.db); //Mockea mi base de datos


});
