import { Dispatch, SetStateAction, useState } from "react";



export type State<T> = [T,Dispatch<SetStateAction<T>>]


export function DefaultState<T>(t : T){
    return {state: t,setState: (state:T) => {}}
}


