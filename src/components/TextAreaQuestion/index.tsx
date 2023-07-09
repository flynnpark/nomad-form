import { RegisterOptions, UseFormRegister } from 'react-hook-form';

import { FormProps, Question } from '~/types';

interface Props {
  error?: React.ReactNode | undefined;
  formOptions?: RegisterOptions<FormProps, Question>;
  name: Question;
  questionText: string;
  register: UseFormRegister<FormProps>;
}

function TextAreaQuestion({
  error,
  formOptions,
  name,
  questionText,
  register,
}: Props) {
  return (
    <div>
      <h1>{questionText}</h1>
      <textarea {...register(name, formOptions)} />
      {error}
    </div>
  );
}

export default TextAreaQuestion;
