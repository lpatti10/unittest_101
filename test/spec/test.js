/* global describe, it */


(function () {
    'use strict';


	describe('Plant', function () {
        
        it('should be either an indoor or outdoor plant', function () {
        	var basil = new Plant({ indoor: true });
        	expect(basil.indoor).to.equal(true);
        });

        it('species property value sould be a string', function () {
        	var fern = new Plant({ species: 'Blechnum minus' });
        	expect(fern.species).to.be.a('string');
        });
     
     		it('should be indoor, outdoor or false if no parameter is set', function () {
     			var cactus = new Plant ();
     			expect(cactus.outdoor).to.equal(false);
     		});

     		it('should show that it was watered when you water it', function () {
     			var rosemary = new Plant();
     			rosemary.water ();
     			expect(rosemary.watered).to.equal(true);
     		});
   });

})();

//Your unit tests should cover everything: 
//bad arguments, no arguments, values, types and errors.


(function () {
	'use strict';

  describe('_pluck', function () {
    
    it('should pass if underscore is installed properly', function () {
     	var test = _.pluck(stooges, 'name');
			expect(test).to.exist;
    });

    it('should return an array', function () {
     	var test = _.pluck(stooges, 'name');
			expect(test).to.be.an('array');
    });

  });

  describe('_last', function () {

    it('should return an object', function () {
     	var test = _.last(stooges);
			expect(test).to.be.an('object');
    });

    it('should not return an array', function () {
     	var test = _.last(stooges);
			expect(test).not.to.be.an('array');
    });

  });

  describe('_first', function () {

    it('should return an object', function () {
     	var test = _.first(stooges);
			expect(test).to.be.an('object');
    });

    it('should never return false', function () {
     	var test = _.first(stooges);
			expect(false).to.not.be.ok;
    });

  });

  describe('_random', function () {

    it('should return a number above zero', function () {
     	var test = _.random(0, 20);
			expect(test).to.be.at.least(1);
    });

		it('should not return a number higher than 19', function () {
     	var test = _.random(0, 20);
			expect(test).to.be.at.most(19);
    });

  });

})();


