'use strict';

describe('Statement', function(){

  var statement;
  var fakeTransactions =
  [ {
      _action: 'w',
      _amount: 500,
      _balance: 500,
      _date: '03/02/2022' },
    {
      _action: 'd',
      _amount: 1000,
      _balance: 1000,
      _date: '02/02/2022' } ]

  beforeEach(function(){
    statement = Statement;
  });

  describe('print', function(){
    it('add transaction into history', function(){
      var expectOutput =
        'date || credit || debit || balance' + "\n" +
        '03/02/2022 ||  || 500 || 500' + "\n" +
        '02/02/2022 || 1000 ||  || 1000'
      expect(statement(fakeTransactions)).toEqual(expectOutput);
    });
  });

});
