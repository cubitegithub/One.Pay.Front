import React from 'react'
import { CFooter } from '@coreui/react-pro'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
              <a href="https://onebyte.com.ec" target="_blank" rel="noopener noreferrer">
          CoreUI
        </a>
        <span className="ms-1">&copy; 2024 creativeLabs.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://onebyte.com.ec" target="_blank" rel="noopener noreferrer">
          Onebyte S.A.
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
