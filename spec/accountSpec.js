'use strict';

describe('Account', function(){

  var account;

  beforeEach(function(){
    account = new Account();
  });

  describe('create new account', function(){
    it('return initial balance by default', function(){
      expect(account.balance()).toEqual(0);
    });
  });


});
