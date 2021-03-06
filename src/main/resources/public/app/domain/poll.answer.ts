import { PollChoice } from './poll.choice.domain.ts';
import { Poll } from './poll.domain.ts';

export class PollAnswer {
    id: number;
    user: String;
    pollChoice: PollChoice; //the question that was selected
}