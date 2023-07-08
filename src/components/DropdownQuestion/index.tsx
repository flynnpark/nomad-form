export interface OptionProps {
  text: string;
  value: string;
}

interface Props
  extends React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  options: OptionProps[];
  questionText: string;
}

function DropdownQuestion({ options, questionText, ...rest }: Props) {
  return (
    <div>
      <h1>{questionText}</h1>
      <select {...rest}>
        {options.map(({ text, value }) => (
          <option key={value} value={value}>
            {text}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropdownQuestion;
