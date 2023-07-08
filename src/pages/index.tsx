import { useForm } from 'react-hook-form';

import {
  DropdownQuestion,
  OptionsQuestion,
  TextAreaQuestion,
  TextInputQuestion,
} from '~/components';

export default function Home() {
  const { handleSubmit, register } = useForm();

  return (
    <div>
      <form onSubmit={handleSubmit(console.log)}>
        <OptionsQuestion
          questionText="What department do you want to work for?"
          selections={['Sales', 'Marketing', 'Accounting', 'Customer Service']}
          {...register('question1')}
        />
        <OptionsQuestion
          selections={[
            'I want money!',
            'I love this company',
            'I want to learn',
            "I don't know why",
          ]}
          questionText="Why do you want to join this company?"
          {...register('question2')}
        />
        <DropdownQuestion
          options={[
            {
              text: '$50K',
              value: '50K',
            },
            {
              text: '$100K',
              value: '100K',
            },
            {
              text: '$150K',
              value: '150K',
            },
            {
              text: '$200K',
              value: '200K',
            },
          ]}
          questionText="Salary"
          {...register('question3')}
        />
        <TextInputQuestion
          questionText="Introduce yourself"
          {...register('question4')}
        />
        <TextAreaQuestion
          questionText="Tell us what your dreams are"
          {...register('question5')}
        />
        <TextInputQuestion questionText="Email" {...register('question6')} />
      </form>
    </div>
  );
}
