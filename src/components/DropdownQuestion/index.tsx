import { RegisterOptions, UseFormRegister } from 'react-hook-form';

import { FormProps, Question } from '~/types';

interface Props {
  formOptions?: RegisterOptions<FormProps, Question>;
  name: Question;
  options: string[];
  questionText: string;
  register: UseFormRegister<FormProps>;
}

function DropdownQuestion({
  formOptions,
  name,
  options,
  questionText,
  register,
}: Props) {
  return (
    <div>
      <h1>{questionText}</h1>
      <select {...register(name, formOptions)}>
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
