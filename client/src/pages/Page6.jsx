import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './pages.css'
import { Link } from 'react-router-dom'

const baseURL = 'https://www.boredapi.com/api/activity'

const Page6 = () => {
  const [post, setPost] = React.useState(null)

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data)
    })
  }, [])

  if (!post) return null

  return (
    <div className='hero-section'>
      <div className='frame11'>
        <div className='key'>{post.key}</div>

        <div className='frame7'>
          <div className='frame4'>
            <div className='frame2'>
              <div className='frame1'>
                <div className='activity'>{post.activity}</div>
                <div className='tagline'>We give u the best always!!</div>
              </div>
              <div className='btngroup'>
                <div className='btn'>
                  <div className='rectangle'>Explore</div>
                </div>

                <div className='tagline2'>We have more for you !!</div>
              </div>
            </div>
            <div className='frame3'>
              <div className='g1'>
                <div className='title'>More Than</div>
                <div className='stat'>50+</div>
                <div className='foot'>Adventure Product</div>
              </div>
              <div className='g2'>
                <div className='title'>More Than</div>
                <div className='stat'>75+</div>
                <div className='foot'>Outlets in India</div>
              </div>
            </div>
          </div>
          <div className='frame5'></div>
        </div>
      </div>
      <div className='frame10'>
        <div className='price-heading'>PRICE</div>
        <div className='price'>{post.price}</div>
      </div>
      <div className='frame6'>
        <div className='group1'>
          <div className='subgroup1'>
            <div className='foot-heading'>Accessibility</div>
            <div className='foot-value'>{post.accessibility}</div>
          </div>
          <svg
            className='svg'
            xmlns='http://www.w3.org/2000/svg'
            width='60'
            height='60'
            viewBox='0 0 60 60'
            fill='none'
          >
            <path
              d='M5 21.25H36.25'
              stroke='white'
              strokeWidth='3'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M15 41.25H20'
              stroke='white'
              strokeWidth='3'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M26.25 41.25H36.25'
              stroke='white'
              strokeWidth='3'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M55 35.075V40.275C55 49.05 52.775 51.25 43.9 51.25H16.1C7.225 51.25 5 49.05 5 40.275V19.725C5 10.95 7.225 8.75 16.1 8.75H36.25'
              stroke='white'
              strokeWidth='3'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M50 23.75V8.75L55 13.75'
              stroke='#D93A31'
              strokeWidth='3'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M50 8.75L45 13.75'
              stroke='#D93A31'
              strokeWidth='3'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
        <div className='group2'>
          <div className='subgroup2'>
            <div className='foot-heading'>Type</div>
            <div className='foot-value'>{post.type}</div>
          </div>
          <svg
            className='svg'
            xmlns='http://www.w3.org/2000/svg'
            width='60'
            height='60'
            viewBox='0 0 60 60'
            fill='none'
          >
            <path
              d='M26.2252 5.57515L13.7502 10.2751C10.8752 11.3501 8.52521 14.7501 8.52521 17.8001V36.3751C8.52521 39.3251 10.4752 43.2001 12.8502 44.9751L23.6002 53.0001C27.1252 55.6501 32.9252 55.6501 36.4502 53.0001L47.2002 44.9751C49.5752 43.2001 51.5252 39.3251 51.5252 36.3751V17.8001C51.5252 14.7251 49.1752 11.3251 46.3002 10.2501L33.8252 5.57515C31.7002 4.80015 28.3002 4.80015 26.2252 5.57515Z'
              stroke='white'
              strokeWidth='3'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M22.6247 29.6752L26.6497 33.7002L37.3997 22.9502'
              stroke='#D93A31'
              strokeWidth='3'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
        <svg
          className='foot-svg'
          xmlns='http://www.w3.org/2000/svg'
          width='698'
          height='156'
          viewBox='0 0 698 156'
          fill='none'
        >
          <path d='M0 0H772V156H0V0Z' fill='black' />
        </svg>
      </div>
    </div>
  )
}

export default Page6
