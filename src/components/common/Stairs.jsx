import { useRef } from "react";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { useLocation } from "react-router-dom";

const Stairs = (props) => {
  const currPath = useLocation().pathname
  const stairParentRef = useRef(null)
  const pageRef = useRef(null)
  
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(stairParentRef.current , {
      display:'block',
    })

    tl.from('.stairs' , {
      height:0,
      stagger:{
        amount:-0.15,
      }
    })

    tl.to('.stairs' , {
      y:'100%',
      stagger:{
        amount:-0.15,
      }
    })

    tl.to(stairParentRef.current , {
      display:'none',
    })

    tl.to('.stairs' , {
      y:'0%',
    })

    gsap.from(pageRef.current , {
      opacity:0, 
      delay:1.2,
      scale:1.3
    })
  } , [currPath])

  return (
    <div>
    <div ref={stairParentRef} className="h-screen w-full fixed z-20 top-0">
      <div className="h-full w-full flex fixed z-20 top-0">
        <div className="stairs h-full w-1/5 bg-black "></div>
        <div className="stairs h-full w-1/5 bg-black "></div>
        <div className="stairs h-full w-1/5 bg-black "></div>
        <div className="stairs h-full w-1/5 bg-black "></div>
        <div className="stairs h-full w-1/5 bg-black "></div>
      </div>
    </div>

    <div ref={pageRef}>
        {props.children}
    </div>
    </div>
  );
};

export default Stairs;
