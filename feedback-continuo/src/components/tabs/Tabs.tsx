import {FC, ReactElement, useState} from 'react'
import TabTitle from './TabTitle'
import {
  UlTab,
} from './Tabs.styles'

type Props = {
  children: ReactElement[]
}
const Tabs: FC<Props> = ({children}) => {
  const [selectedTab, setSelectedTab] = useState(0)
  return (
      <div>
      <UlTab>
        {children.map((item, index) => (
          <TabTitle
            key={index}
            title={item.props.title}
            index={index}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </UlTab>
      {children[selectedTab]}
    </div>
  )
}

export default Tabs