import {  GlobalState} from '@/utils/interfaces'
import { PayloadAction } from '@reduxjs/toolkit'
import { ProposalProp } from '@/utils/interfaces'
export const globalActions = {
  setWallet: (state: GlobalState, action: PayloadAction<string>) => {
    state.wallet = action.payload
  },
  setBalance:(state:GlobalState, action:PayloadAction<string>)=>{
    state.balance = action.payload
  },
  setUserBalance:(state:GlobalState, action:PayloadAction<string>)=>{
    state.myBalance = action.payload
  },
  setStakeHolder:(state:GlobalState, action:PayloadAction<Boolean>)=>{
    state.isStakeholder= action.payload
  },
  setProposals:(state:GlobalState, action:PayloadAction<ProposalProp[]>)=>{
   state.proposals = action.payload
  }

}