interface ItemDTO {
  name: string,
  id: string,
  tagId?: string,
  userId?: string
}

const Option = ({key, value, description}: any) => {
  return (
    <option key={key} value={value}>{description}</option>
  )
}

export default Option;