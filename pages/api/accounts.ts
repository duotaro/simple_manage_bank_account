// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export type Accounts = {
  list: Account[]
}

export type Account = {
    id : number,
    name : string,
    color : string,
    amount : number
}


let test1:Account = {
    id: 0,
    name: 'name0',
    color: '#fff',
    amount: 100
}
let test2:Account = {
    id: 1,
    name: 'name1',
    color: '#fff',
    amount: 100
}
let test3:Account = {
    id: 2,
    name: 'name2',
    color: '#fff',
    amount: 100
}


let list:Account[] = [];
list.push(test1)
list.push(test2)
list.push(test3)

let result:Accounts = {
    list:list
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Accounts>
) {
  res.status(200).json(result)
}
