/* global describe, it */

(function () {
    'use strict';

//     describe('Give it some context', function () {
//         describe('maybe a bit more context here', function () {
//             it('should run here few assertions', function () {

//             });
//         });
//     });
// })();

	    describe('Give it some context', function () {
	        describe('maybe a bit more context here', function () {
	            it('should run here few assertions', function () {

	            });
	        });
	    });
	})();

//Tim's sample from class:

(function () {
    'use strict';
 
    describe('My String', function(){
      it('should be a string', function(){
        var my_string = "The cow jumped over the moon";
        expect(my_string).to.be.a('string');
      });
 
      it('should have a length of 28', function(){
        var my_string = "The cow jumped over the moon";
        expect(my_string).to.have.length.of(28);
      });
      
    });
 
})();