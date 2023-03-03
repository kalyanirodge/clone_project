import React from 'react'
import './RightSidebar.css'
import comment from '../../assets/comment.svg'
import pen from '../../assets/pen.svg'

const Widget = () => {
  return (
    <div className='widget'>
        <h4>The overflow block</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
            <img src={pen} alt="pen" width='18' />
            <p>How choose engineering preps developers for the ultimated game day</p>

            </div>
            <div className='right-sidebar-div-2'>
            <img src={pen} alt="pen" width='18' />
            <p>How choose engineering preps developers for the ultimated game day</p>

            </div>
        </div>
        <h4>Featured on meta</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
            <img src={comment} alt="pen" width='18' />
            <p>How choose engineering preps developers for the ultimated game day</p>

            </div>
            <div className='right-sidebar-div-2'>
            <img src={comment}alt="pen" width='18' />
            <p>How choose engineering preps developers for the ultimated game day</p>

            </div>
            <div className='right-sidebar-div-2'>
            <img src={comment}alt="pen" width='18' />
            <p>How choose engineering preps developers for the ultimated game day</p>

            </div>
        </div>
        <h4>Hot meta posts</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
            <p>38</p>
            <p>How choose engineering preps developers for the ultimated game day</p>
 
            </div>
            <div className='right-sidebar-div-2'>
            <p>20</p>
            <p>How choose engineering preps developers for the ultimated game day</p>

            </div>
            <div className='right-sidebar-div-2'>
            <p>14</p>
             <p>How choose engineering preps developers for the ultimated game day</p>
            </div>
        </div>
      
    </div>
  )
}

export default Widget
