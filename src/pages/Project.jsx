import React from "react";
import ProjectCard from "../components/Projects/ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";

const Project = () => {
  const imageList = [
    {
      image1:
        "https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b",
      image2:
        "https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e",
    },
    {
      image1:
        "https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022",
      image2:
        "https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c",
    },
    {
      image1:
        "https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479",
      image2:
        "https://k72.ca/images/caseStudies/A_table/thumbnailimage_atable2.jpg?w=1280&h=960&s=b1cfc8abd6135cf78017737130e49e47",
    },
    {
      image1:
        "https://k72.ca/images/caseStudies/PME-MTL/PME-MTL_Thumbnail.jpg?w=1280&h=960&s=49e3b251d0a28f1f8d40fd59517fc000",
      image2:
        "https://k72.ca/images/caseStudies/Opto/thumbnailimage_opto.jpg?w=1280&h=960&s=938f0bfb3de1ff2a2846b884eec2d757",
    },
  ];

  gsap.registerPlugin(ScrollTrigger);
  
  useGSAP(() => {
    gsap.from('.card' , {
      height:'80px',
      stagger:{
        amount:0.5
      },
      scrollTrigger:{
        trigger:'.cardParent',
        start:'top 100%',
        end:'top -300%',
        scrub:true
      }
    })
  })

  return (
    <div className="p-4 mb-[100vh]">
      <div className="pt-[45vh]">
        <h2 className="font-[font2] text-[12.5vw] uppercase">Projects</h2>
      </div>

      <div className="-mt-10 cardParent">
        {imageList.map((ele, idx) => {
          return (
            <div key={idx} className="card w-full h-[400px] mb-4 flex gap-2">
              <ProjectCard image1={ele.image1} image2={ele.image2} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
