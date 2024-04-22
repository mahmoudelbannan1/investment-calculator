import { calculateInvestmentResults } from "./../util/investment";
const Result = ({ input }) => {
  const data = calculateInvestmentResults(input);
  console.log(data);
  return (
    <>
      <p>result....</p>
    </>
  );
};

export default Result;
