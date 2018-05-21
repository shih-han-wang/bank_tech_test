'use strict';

describe('Statement', function(){

  var statement;
  var fakeHistory = [
    ['10/01/2012', 1000,'',1000 ],
    ['12/01/2012', 1000,'',2000 ],
    ['14/01/2012', '', 500, 1500]
  ];

  beforeEach(function(){
    statement = new Statement(fakeHistory);
  });

  describe('headline', function(){
    it('return statement headline', function(){
      expect(statement._headline()).toEqual('date || credit || debit || balance');
    });
  });

  describe('historyTable', function(){
    it('return statement history table', function(){
      var expectOutput =
      "\n" + '14/01/2012 ||  || 500 || 1500' +
      "\n" + '12/01/2012 || 1000 ||  || 2000' +
      "\n" + '10/01/2012 || 1000 ||  || 1000'
      expect(statement._historyTable()).toEqual(expectOutput);
    });
  });

  describe('print', function(){
    it('print statement', function(){
      spyOn(console, 'log');;
      var expectOutput =
      'date || credit || debit || balance' + "\n" +
      '14/01/2012 ||  || 500 || 1500' + "\n" +
      '12/01/2012 || 1000 ||  || 2000' + "\n" +
      '10/01/2012 || 1000 ||  || 1000'
      statement.print();
      expect(console.log).toHaveBeenCalledWith(expectOutput);
    });
  });

});
