import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <ul class="nav justify-content-center">
        
    <FilterLink filter="SHOW_ALL">
      全部
    </FilterLink>
    
    <FilterLink filter="SHOW_ACTIVE">
      激活
    </FilterLink>
    
    <FilterLink filter="SHOW_COMPLETED">
      完成
    </FilterLink>
  </ul>
)

export default Footer