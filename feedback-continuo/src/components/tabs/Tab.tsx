import {FC,ReactElement} from 'react'

type Props ={
  title: string,
  children: JSX.Element,
}

const Tab:FC<Props>  = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default Tab