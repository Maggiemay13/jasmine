
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 20000,
    years: 40,
    rate: 8.7
  };
  expect(calculateMonthlyPayment(values)).toEqual('149.67');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 300000,
    years: 30,
    rate: 4.8,
  };
  expect(calculateMonthlyPayment(values)).toEqual('1574.00')
});

/// etc
