interface Props
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  error?: React.ReactNode | undefined;
  questionText: string;
}

function TextAreaQuestion({ error, questionText, ...rest }: Props) {
  return (
    <div>
      <h1>{questionText}</h1>
      <textarea {...rest} />
      {error}
    </div>
  );
}

export default TextAreaQuestion;
