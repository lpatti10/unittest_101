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

  // describe('_map', function () {
  //   it('should return an array', function () {
  //     var test = _.map([1, 2, 3], function(num){ return num * 3; });
  //     expect(test).to.be.an('array');
  //   });
  // });


(function () {
  'use strict';

  describe('_pluck', function () {
    
    it('should return array of property values', function () {

	     	var test = _.pluck(stooges, 'name');
				expect(test).to.exist;
    });

  });
})();


