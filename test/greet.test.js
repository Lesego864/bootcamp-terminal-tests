let assert = require("assert");
const greet = require("../greet");

describe('The greet function' , function(){
    it('should return "Hello, Lesego" when I greet Lesego.' , function(){
        assert.equal('Hello, Lesego', greet('Lesego'));

    });
    it('should return "Hello, Lindani" when I greet Lindani.' , function(){
        assert.equal('Hello, Lindani', greet('Lindani'));

    });
    it('should return "Hello, undefined" when there is no name given.' , function(){
        assert.equal('Hello, undefined', greet('undefined'));

    });

});