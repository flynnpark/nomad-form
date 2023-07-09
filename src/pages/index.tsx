import { useForm } from 'react-hook-form';

import {
  DropdownQuestion,
  OptionsQuestion,
  TextAreaQuestion,
  TextInputQuestion,
} from '~/components';
import { FormProps } from '~/types';

export default function Home() {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormProps>();

  return (
    <div className="w-full py-20">
      <form
        className="max-w-md flex flex-col m-auto border-2 border-black rounded-3xl p-10 bg-rose-100"
        onSubmit={handleSubmit(console.log)}
      >
        <h1 className="text-2xl font-extrabold text-center mb-10">
          Job Application Form
        </h1>
        <div>
          <OptionsQuestion
            error={
              errors.question1?.message && (
                <span>{errors.question1.message.toString()}</span>
              )
            }
            formOptions={{
              required: '*required',
            }}
            selections={[
              'Sales',
              'Marketing',
              'Accounting',
              'Customer Service',
            ]}
            name="question1"
            questionText="What department do you want to work for?"
            register={register}
          />
          <OptionsQuestion
            error={
              errors.question2?.message && (
                <span>{errors.question2.message.toString()}</span>
              )
            }
            formOptions={{
              required: '*required',
            }}
            selections={[
              'I want money!',
              'I love this company',
              'I want to learn',
              "I don't know why",
            ]}
            name="question2"
            questionText="Why do you want to join this company?"
            register={register}
          />
          <DropdownQuestion
            name="question3"
            options={['$50K', '$100K', '$150K', '$200K']}
            questionText="Salary"
            register={register}
          />
          <TextInputQuestion
            error={
              errors.question4?.message && (
                <span>{errors.question4.message.toString()}</span>
              )
            }
            formOptions={{
              required: 'Please write down your introduction.',
            }}
            name="question4"
            questionText="Introduce yourself"
            register={register}
          />
          <TextAreaQuestion
            error={
              errors.question5?.message && (
                <span>{errors.question5.message.toString()}</span>
              )
            }
            formOptions={{
              required: 'Please tell us what your dreams are.',
            }}
            name="question5"
            questionText="Tell us what your dreams are"
            register={register}
          />
          <TextInputQuestion
            error={
              errors.question5?.message && (
                <span>{errors.question5.message.toString()}</span>
              )
            }
            formOptions={{
              required: 'Please write down your email.',
            }}
            name="question6"
            questionText="Email"
            register={register}
          />
          <button type="submit">Give me this job</button>
        </div>
      </form>
    </div>
  );
}
