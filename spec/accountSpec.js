'use strict';

describe('Account', function(){

  var account;

  beforeEach(function(){
    account = new Account();
  });

  describe('balance', function(){
    it('return balance', function(){
      expect(account.balance()).toEqual(0);
    });
  });

  describe('print statement', function(){
    it('return the history statement', function(){
      account.deposit(1000, '10/01/2012')
      account.deposit(2000, '13/01/2012')
      account.withdraw(500, '14/01/2012')
      var expectOutput =
      'date || credit || debit || balance' + "\n" +
      '14/01/2012 ||  || 500 || 2500' + "\n" +
      '13/01/2012 || 2000 ||  || 3000' + "\n" +
      '10/01/2012 || 1000 ||  || 1000'
      spyOn(console, 'log');
      account.printStatement()
      expect(console.log).toHaveBeenCalledWith(expectOutput);
    });

  });
});
