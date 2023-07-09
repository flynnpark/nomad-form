import { useForm } from 'react-hook-form';

import {
  DropdownQuestion,
  OptionsQuestion,
  TextAreaQuestion,
  TextInputQuestion,
} from '~/components';

interface FormProps {
  question1: string;
  question2: string;
  question3: string;
  question4: string;
  question5: string;
  question6: string;
}

export default function Home() {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormProps>();

  console.log(errors);

  return (
    <div>
      <form onSubmit={handleSubmit(console.log)}>
        <OptionsQuestion
          error={
            errors.question1?.message && (
              <span>{errors.question1.message.toString()}</span>
            )
          }
          questionText="What department do you want to work for?"
          selections={['Sales', 'Marketing', 'Accounting', 'Customer Service']}
          {...register('question1', { required: '*required' })}
        />
        <OptionsQuestion
          error={
            errors.question2?.message && (
              <span>{errors.question2.message.toString()}</span>
            )
          }
          selections={[
            'I want money!',
            'I love this company',
            'I want to learn',
            "I don't know why",
          ]}
          questionText="Why do you want to join this company?"
          {...register('question2', { required: '*required' })}
        />
        <DropdownQuestion
          options={['$50K', '$100K', '$150K', '$200K']}
          questionText="Salary"
          {...register('question3')}
        />
        <TextInputQuestion
          questionText="Introduce yourself"
          {...register('question4', {
            required: 'Please tell us what your dreams are.',
          })}
        />
        <TextAreaQuestion
          questionText="Tell us what your dreams are"
          {...register('question5', {
            required: 'Please write down your email.',
          })}
        />
        <TextInputQuestion
          questionText="Email"
          {...register('question6', {
            required: 'Please write down your email.',
          })}
        />
        <button type="submit">Give me this job</button>
      </form>
    </div>
  );
}
