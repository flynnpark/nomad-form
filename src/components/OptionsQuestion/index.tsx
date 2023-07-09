import { Fragment } from 'react';

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: React.ReactNode | undefined;
  questionText: string;
  selections: string[];
}

function OptionsQuestion({ error, questionText, selections, ...rest }: Props) {
  console.log(rest);
  return (
    <div>
      <h1>
        {questionText}
        {error}
      </h1>
      {selections.map((value) => (
        <Fragment key={value}>
          <input id={value} type="radio" value={value} {...rest} />
          <label htmlFor={value}>{value}</label>
        </Fragment>
      ))}
    </div>
  );
}

export default OptionsQuestion;
