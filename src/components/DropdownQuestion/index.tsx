interface Props
  extends React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  options: string[];
  questionText: string;
}

function DropdownQuestion({ options, questionText, ...rest }: Props) {
  return (
    <div>
      <h1>{questionText}</h1>
      <select {...rest}>
        {options.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropdownQuestion;
