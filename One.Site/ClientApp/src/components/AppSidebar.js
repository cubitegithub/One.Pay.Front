import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CImage } from '@coreui/react';
import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'

import { logoNegative } from '../../src/assets/brand/logo-negative'
import { sygnet } from '../../src/assets/brand/sygnet'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'


import logo from '../../src/assets/images/Logo.png'

// sidebar nav config
import navigation from '../_nav'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <></>
  )
}

export default React.memo(AppSidebar)
