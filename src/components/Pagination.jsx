import { MyButton } from "./MyButton";

export const Pagination = ({ nbrButtons, handleClick }) => {
  // Transformer nbrButton en un tbleau de chiffres
  // Ex : nbrButton = 5 ; Je veux un tableau [1,2,3,4,5]

  const numbers = Array.from({ length: nbrButtons }, (_, idx) => idx + 1);

  //   Equivalent à la ligne ci-dessus
  //   const numbers = [...Array(nbrButtons).keys()].map((x) => x + 1);

  return (
    <>
      <div className="w-fit m-auto">
        {numbers.map((n) => (
          <MyButton handleClick={handleClick} key={n}>
            {n}
          </MyButton>
        ))}
      </div>
    </>
  );
};
