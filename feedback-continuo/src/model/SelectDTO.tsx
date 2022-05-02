export interface ListDTO {    
  map(arg0: (user: ItemDTO) => JSX.Element): React.ReactNode;
  list: ItemDTO[] 
}

export interface ItemDTO {
  name: string,
  id?: string,
  tagId?: string,
  userId?: string,
}