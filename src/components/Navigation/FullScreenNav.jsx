import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useContext, useRef } from 'react'
import { NavBarContext } from '../context/NavContext'

const FullScreenNav = () => {
  const fullNavLinkRef = useRef(null)
  const fullScreenRef = useRef(null)
  const [navOpen , setNavOpen] = useContext(NavBarContext)

    function gsapAnimation() {
        const tl = gsap.timeline()
        tl.to('.fullScreenNav', {
            display: 'block'
        })
        tl.to('.stairing', {
            delay: 0.2,
            height: '100%',
            stagger: {
                amount: -0.3
            }
        })
        tl.to('.link', {
            opacity: 1,
            rotateX: 0,
            stagger: {
                amount: 0.3
            }
        })
        tl.to('.navlink', {
            opacity: 1
        })
    }

    function gsapAnimationReverse() {
        const tl = gsap.timeline()
        tl.to('.link', {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: -0.1
            }
        })
        tl.to('.stairing', {
            height: 0,
            stagger: {
                amount: -0.1
            }
        })
        tl.to('.navlink', {
            opacity: 0
        })
        tl.to('.fullScreenNav', {
            display: 'none',
        })
    }

    useGSAP(function () {
        if (navOpen) {
            gsapAnimation()
        } else {
            gsapAnimationReverse()
        }
    }, [navOpen])



  return (
    <div ref={fullScreenRef} className='hidden fullScreenNav h-screen w-full z-50 absolute text-white overflow-hidden'>
      <div className="h-full w-full flex fixed">
        <div className="stairing h-full w-1/5 bg-black"></div>
        <div className="stairing h-full w-1/5 bg-black"></div>
        <div className="stairing h-full w-1/5 bg-black"></div>
        <div className="stairing h-full w-1/5 bg-black"></div>
        <div className="stairing h-full w-1/5 bg-black"></div>
      </div>
      
      <div ref={fullNavLinkRef} className='relative'>
        <div className='navlink flex justify-between p-2'>
        <div className='w-36'>
        <svg xmlns="http://www.w3.org/2000/svg" width="110" height="47" viewBox="0 0 103 44">
            <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
        </svg>
        </div>

        <div onClick={() => {
            setNavOpen(false)
        }} className='relative h-20 w-20 group cursor-pointer'>
            <div className='absolute group-hover:bg-[#D3FD50] bg-white h-27 origin-top w-0.5 -rotate-45 transform-transl'></div>
            <div className='absolute group-hover:bg-[#D3FD50] bg-white h-27 origin-top right-0 w-0.5 rotate-45 transform-transl'></div>
        </div>
        
      </div>
      <div className=''>
        <div className='relative link border-t-1' >
            <h1 className='font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7'>Projects</h1>
            <div className='moveLink absolute flex top-0 bg-[#D3FD50]'>
                <div className='moveX flex items-center'>
                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7">See Everything</h2>

                    <img className="h-22 w-60 object-cover shrink-0 rounded-full" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                    
                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7">See Everything</h2>
                    
                    <img className="h-22 w-60 object-cover shrink-0 rounded-full" src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
                </div>

                <div className='moveX flex items-center'>
                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7">See Everything</h2>

                    <img className="h-22 w-60 object-cover shrink-0 rounded-full" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                    
                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7">See Everything</h2>
                    
                    <img className="h-22 w-60 object-cover shrink-0 rounded-full" src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
                </div>
            </div>
        </div>

        <div className='relative link border-t-1'>
            <h1 className='font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7'>Agency</h1>
            <div className='moveLink absolute flex top-0 bg-[#D3FD50]'>
                <div className='moveX flex items-center'>
                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7">See Everything</h2>

                    <img className="h-22 w-60 object-cover shrink-0 rounded-full" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                    
                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7">See Everything</h2>
                    
                    <img className="h-22 w-60 object-cover shrink-0 rounded-full" src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
                </div>

                <div className='moveX flex items-center'>
                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7">See Everything</h2>

                    <img className="h-22 w-60 object-cover shrink-0 rounded-full" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                    
                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7">See Everything</h2>
                    
                    <img className="h-22 w-60 object-cover shrink-0 rounded-full" src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
                </div>
            </div>
        </div>
        
        <div className='relative link border-t-1'>
            <h1 className='font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7'>Contacts</h1>
            <div className='moveLink absolute flex top-0 bg-[#D3FD50]'>
                <div className='moveX flex items-center'>
                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7">See Everything</h2>

                    <img className="h-22 w-60 object-cover shrink-0 rounded-full" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                    
                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7">See Everything</h2>
                    
                    <img className="h-22 w-60 object-cover shrink-0 rounded-full" src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
                </div>

                <div className='moveX flex items-center'>
                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7">See Everything</h2>

                    <img className="h-22 w-60 object-cover shrink-0 rounded-full" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                    
                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7">See Everything</h2>
                    
                    <img className="h-22 w-60 object-cover shrink-0 rounded-full" src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
                </div>
            </div>
        </div>

        <div className='relative link border-t-1 border-b-1'>
            <h1 className='font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7'>Blog</h1>
            <div className='moveLink absolute flex top-0 bg-[#D3FD50]'>
                <div className='moveX flex items-center'>
                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7">See Everything</h2>

                    <img className="h-22 w-60 object-cover shrink-0 rounded-full" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                    
                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7">See Everything</h2>
                    
                    <img className="h-22 w-60 object-cover shrink-0 rounded-full" src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
                </div>

                <div className='moveX flex items-center'>
                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7">See Everything</h2>

                    <img className="h-22 w-60 object-cover shrink-0 rounded-full" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                    
                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7">See Everything</h2>
                    
                    <img className="h-22 w-60 object-cover shrink-0 rounded-full" src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
                </div>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default FullScreenNav
