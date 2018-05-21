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

  describe('make deposit', function(){
    it('return correct balance after making deposit', function(){
      account.deposit(1000, '10/01/2012')
      expect(account.balance()).toEqual(1000);
    });

    it('stores in history after making deposit', function(){
      account.deposit(1000, '10/01/2012')
      console.log(account.history())
      expect(account.history()[0]).toEqual(['10/01/2012', 1000,'',1000 ]);
    });

  });

});
