interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  questionText: string;
}

function TextInputQuestion({ questionText, ...rest }: Props) {
  return (
    <div>
      <h1>{questionText}</h1>
      <input {...rest} />
    </div>
  );
}

export default TextInputQuestion;
