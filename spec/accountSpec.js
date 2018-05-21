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
      expect(account.history()[0]).toEqual(['10/01/2012', 1000,'',1000 ]);
    });
  });

  describe('make withdrawwal', function(){
    it('return correct balance after making withdrawwal', function(){
      account.deposit(1000, '10/01/2012')
      account.withdraw(500, '14/01/2012')
      expect(account.balance()).toEqual(500);
    });

    it('stores in history after making withdrawwal', function(){
      account.deposit(1000, '10/01/2012')
      account.withdraw(500, '14/01/2012')
      expect(account.history()).toEqual(
        [
          ['10/01/2012', 1000,'',1000 ],
          ['14/01/2012', '', 500, 500]
        ]
      );
    });
  });

});
