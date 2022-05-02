import Option from "./Option";
import {ListDTO,ItemDTO} from "../../model/SelectDTO"

const Select = ({list}: ListDTO) => {
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