interface Props {
  questionText: string;
  selections: string[];
}

function OptionsQuestion({ questionText, selections }: Props) {
  return (
    <div>
      <h1>{questionText}</h1>
      {selections.map((selection) => (
        <>
          <input id={selection} type="radio" value={selection} />
          <label htmlFor={selection}>{selection}</label>
        </>
      ))}
    </div>
  );
}

export default OptionsQuestion;
