import React from 'react'

const FullScreenNav = () => {
  return (
    <div className='fullScreenNav h-screen w-full absolute bg-amber-400'>
      <div className='allLinks mt-20'>
        <div className='relative link border-t-2'>
            <h1 className='font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7'>Projects</h1>
            <div className='absolute flex top-0 bg-[#D3FD50]'>
                <div className='moveX flex items-center'>
                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7'>See Everything</h2>
                    <img className='h-22 w-90 mx-2 rounded-full ' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7'>See Everything</h2>
                    <img className='h-22 w-90 mx-2 rounded-full ' src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
                </div>
                <div className='moveX flex items-center'>
                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7'>See Everything</h2>
                    <img className='h-22 w-90 mx-2 rounded-full ' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7'>See Everything</h2>
                    <img className='h-22 w-90 mx-2 rounded-full ' src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
                </div>
            </div>
        </div>

        {/* <div className='link border-t-2'>
            <h1 className='font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7'>Agency</h1>
             <div>
                <div>
                <h2>See Everything</h2>
                <img src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                <h2>See Everything</h2>
                <img src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
            </div>

            <div>
                <h2>See Everything</h2>
                <img src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                <h2>See Everything</h2>
                <img src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
            </div>
            </div> 
        </div> */}

        {/* <div className='link border-t-2'>
            <h1 className='font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7'>Contact</h1>
           <div>
                <div>
                <h2>See Everything</h2>
                <img src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                <h2>See Everything</h2>
                <img src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
            </div>

            <div>
                <h2>See Everything</h2>
                <img src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                <h2>See Everything</h2>
                <img src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
            </div>
            </div> 
        </div> */}

        {/* <div className='link border-t-2 border-b-2'>
            <h1 className='font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7'>Blog</h1>
            <div>
                <div>
                <h2>See Everything</h2>
                <img src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                <h2>See Everything</h2>
                <img src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
            </div>

            <div>
                <h2>See Everything</h2>
                <img src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                <h2>See Everything</h2>
                <img src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
            </div>
            </div> 
        </div> */}
        
      </div>
    </div>
  )
}

export default FullScreenNav
