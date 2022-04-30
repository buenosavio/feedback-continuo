export interface ListDTO {    
  map(arg0: (user: ItemDTO) => JSX.Element): React.ReactNode;
  users: ItemDTO[] 
}

export interface ItemDTO {
  name: string,
  id: string,
  tagId?: string,
  userId?: string,
  value: string,
  label: string,
}