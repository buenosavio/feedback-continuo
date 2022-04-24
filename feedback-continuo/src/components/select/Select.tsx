import Option from "./Option";

interface ListDTO {    
  map(arg0: (user: ItemDTO) => JSX.Element): React.ReactNode;
  list: ItemDTO[] 
}

interface ItemDTO {
  name: string,
  id: string,
  tagId?: string,
  userId?: string
}

const Select = ({list, id, nome}: any) => {
  return (
    <select>
      <option value=""></option>
      { list 
        ? 
        list.map((user: ItemDTO) => (
          <Option key={user.id} value={user.id} description={user.name}/>
        ))
        : null
      }
    </select>
  )
}

export default Select;