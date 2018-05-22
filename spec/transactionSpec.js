'use strict';

describe('Transaction', function(){

  var transaction;

  beforeEach(function(){
    transaction = new Transaction('d', 500, 500, '10/01/2018');
  });

  describe('stores the objects', function(){
    it('stores the action', function(){
      expect(transaction._action).toEqual('d');
    });

    it('stores the amount', function(){
      expect(transaction._amount).toEqual(500);
    });

    it('stores the balance', function(){
      expect(transaction._balance).toEqual(500);
    });

    it('stores the date', function(){
      expect(transaction._date).toEqual('10/01/2018');
    });
  });




});
