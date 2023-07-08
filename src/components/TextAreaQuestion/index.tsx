interface Props
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  questionText: string;
}

function TextAreaQuestion({ questionText, ...rest }: Props) {
  return (
    <div>
      <h1>{questionText}</h1>
      <textarea {...rest} />
    </div>
  );
}

export default TextAreaQuestion;
