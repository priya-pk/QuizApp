import { Option } from './option.model';

export class Question {
  no: String;
  question: String;
  options: Option[];
  ans: String;
  answer: String;
  selectedOption: String;
}