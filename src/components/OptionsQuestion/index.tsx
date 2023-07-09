import { Fragment } from 'react';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';

import { FormProps, Question } from '~/types';

interface Props {
  error?: React.ReactNode | undefined;
  formOptions?: RegisterOptions<FormProps, Question>;
  name: Question;
  questionText: string;
  register: UseFormRegister<FormProps>;
  selections: string[];
}

function OptionsQuestion({
  error,
  formOptions,
  name,
  questionText,
  register,
  selections,
}: Props) {
  return (
    <div>
      <h1>
        {questionText}
        {error}
      </h1>
      {selections.map((value) => (
        <Fragment key={value}>
          <input
            id={value}
            type="radio"
            value={value}
            {...register(name, formOptions)}
          />
          <label htmlFor={value}>{value}</label>
        </Fragment>
      ))}
    </div>
  );
}

export default OptionsQuestion;
