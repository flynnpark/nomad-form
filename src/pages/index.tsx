import {
  DropdownQuestion,
  OptionsQuestion,
  TextAreaQuestion,
  TextInputQuestion,
} from "~/components";

export default function Home() {
  return (
    <div>
      <OptionsQuestion questionText="Q1" selections={[]} />
      <OptionsQuestion questionText="Q1" selections={[]} />
      <DropdownQuestion />
      <TextInputQuestion />
      <TextAreaQuestion />
      <TextInputQuestion />
    </div>
  );
}
