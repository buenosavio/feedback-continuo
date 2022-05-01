import {useCallback, FC} from 'react'
import {
  ButtonTab,
  LiTab,
} from './Tabs.styles'
type Props = {
  title: string
  index: number
  setSelectedTab: (index: number) => void
}
 

const TabTitle: FC<Props> = ({title, setSelectedTab, index}) => {


  const onClick = useCallback(() => {
    setSelectedTab(index)
  }, [setSelectedTab, index])

  return (
    <LiTab>
      <ButtonTab setSelectedTab='is-selected' onClick={onClick}>{title}</ButtonTab>
    </LiTab>
  )
}

export default TabTitle
  