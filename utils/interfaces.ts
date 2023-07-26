
export interface TruncateProps {
    text: string
    startChars: number
    endChars: number
    maxLength: number
  }



  export interface GlobalState{
    wallet:string | null,
    isStakeholder:Boolean | null,
    balance:string |null,
    myBalance:string | null,
    proposals:ProposalProp[]
  }

  export interface RootState{
    globalStates:GlobalState
  }

  export interface ProposalProp{
    id: number;
    amount: string;
    title: string;
    description: string;
    paid: boolean;
    passed: boolean;
    proposer: string;
    upvotes: number;
    downvotes: number;
    beneficiary: string;
    executor: string;
    duration: any;
  }

  export interface ProposalParams{
    title:string,
    description:string,
    beneficiary:string,
    amount:number
  }