'use strict';

describe('FeatureAccount', function(){

  var account;

  beforeEach(function(){
    account = new Account()
  });

  describe('deposit', function(){
    it('return balance', function(){
      account.deposit(100, '01/01/2101')
      var transaction = account._history._transactions[0]
      expect(account.balance()).toEqual(100);
      expect(transaction._action).toEqual('d');
      expect(transaction._amount).toEqual(100);
      expect(transaction._balance).toEqual(100);
      expect(transaction._date).toEqual('01/01/2101');
    });
  });

  describe('deposit', function(){
    it('return balance', function(){
      account.deposit(1000, '02/01/2101')
      account.withdraw(300, '03/01/2101')
      var transaction = account._history._transactions[0]
      expect(account.balance()).toEqual(700);
      expect(transaction._action).toEqual('w');
      expect(transaction._amount).toEqual(300);
      expect(transaction._balance).toEqual(700);
      expect(transaction._date).toEqual('03/01/2101');
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
