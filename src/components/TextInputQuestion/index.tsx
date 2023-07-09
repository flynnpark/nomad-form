import { RegisterOptions, UseFormRegister } from 'react-hook-form';

import { FormProps, Question } from '~/types';

interface Props {
  error?: React.ReactNode | undefined;
  formOptions?: RegisterOptions<FormProps, Question>;
  name: Question;
  questionText: string;
  register: UseFormRegister<FormProps>;
}

function TextInputQuestion({
  error,
  formOptions,
  name,
  questionText,
  register,
}: Props) {
  return (
    <div>
      <h1>{questionText}</h1>
      <input {...register(name, formOptions)} />
      {error}
    </div>
  );
}

export default TextInputQuestion;
