interface Props {
  questionText: string;
  selections: string[];
}

function OptionsQuestion({ questionText, selections }: Props) {
  return (
    <div>
      <h1>{questionText}</h1>
      {selections.map((value) => (
        <>
          <input id={value} type="radio" value={value} />
          <label htmlFor={value}>{value}</label>
        </>
      ))}
    </div>
  );
}

export default OptionsQuestion;
