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

// $("button, input[name*='btnProfile']").on("click", function () {
//   $(":button").removeClass("selected");
//   $(":button").addClass("button-nav-profile");
//   $(this).removeClass("button-nav-profile");
//   $(this).addClass("selected");
// });

export default Tabs