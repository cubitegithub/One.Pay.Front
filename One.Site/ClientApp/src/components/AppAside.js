import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CAvatar,
  CCloseButton,
  CFormSwitch,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CListGroup,
  CListGroupItem,
  CProgress,
  CSidebar,
  CSidebarHeader,
} from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import {
  cibSkype,
  cilCalendar,
  cilHome,
  cilList,
  cilLocationPin,
  cilSettings,
  cilSpeech,
} from '@coreui/icons'

import avatar2 from './../assets/images/avatars/2.jpg'
import avatar3 from './../assets/images/avatars/3.jpg'
import avatar4 from './../assets/images/avatars/4.jpg'
import avatar5 from './../assets/images/avatars/5.jpg'
import avatar6 from './../assets/images/avatars/6.jpg'
import avatar7 from './../assets/images/avatars/7.jpg'
import avatar8 from './../assets/images/avatars/8.jpg'

const AppAside = () => {
  const dispatch = useDispatch()
  const asideShow = useSelector((state) => state.asideShow)

  const [activeKey, setActiveKey] = useState(1)

  return (
   <></>
  )
}

export default React.memo(AppAside)
