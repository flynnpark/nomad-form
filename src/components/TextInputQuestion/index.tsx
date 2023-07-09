interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: React.ReactNode | undefined;
  questionText: string;
}

function TextInputQuestion({ error, questionText, ...rest }: Props) {
  return (
    <div>
      <h1>{questionText}</h1>
      <input {...rest} />
      {error}
    </div>
  );
}

export default TextInputQuestion;
