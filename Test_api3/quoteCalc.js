
function quoteCalc(car_value, car_risk) {
  if (typeof car_value !== "number" || typeof car_risk !== "number")
    return { error: "error there was an error" };
  if (car_value < 0) return { error: "error there was an error" };
  if (car_risk > 5 || car_risk < 1)
    return { error: "error there was an error" };

  const yearly_prem = car_value * car_risk / 100;
  const monthly_prem = yearly_prem / 12;

  return { yearly_prem, monthly_prem };
}

// module.exports = quoteCalc;
export default quoteCalc;