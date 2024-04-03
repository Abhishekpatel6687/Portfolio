import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
// import Image from "next/image";
// import { Images } from "@/constants/Images";
// import imageGirl from "../../public/images/girl.png"
import Service from "@/components/Services";
import Plans from "@/components/Plans";
import About from "@/components/About";


export default function Home() {
//   const data = [
//     {image:Images.speak, para:"Public Speaking"},
//     {image:Images.briefcase, para:"Creative Thinking"},
//     {image:Images.idea, para:"Career-Oriented"},
// ]
  return (
    <main className="min-h-full max-w-full ">
      <Navbar />
      <div className="md:flex justify-center items-center">
          <div className="md:w-1/2 p-12 md:p-12 ">
            <h1 className="font-bold  sm:m-30 xl:text-5xl lg:text-4xl md:text-3xl sm:text-5xl xs:text-4xl">Up Your <span className="text-primary-600">Skills</span> To
              <span className="text-primary-600"> Advance</span> Your
              <span className="text-primary-600"> Career</span> Path
            </h1>
            <p className="  text-base font-normal mt-8"> 
              Provides you with the latest online learning system and material
              that help your knowledge growing.
            </p>
            <div className="flex w-70 gap-7 mt-9 	">
              <button className="bg-primary-700 p-2 rounded text-white">
                Get Started
              </button>
              <button className="bg-primary-100 p-2 rounded text-primary-700 ">
                Get Free trial
              </button>
            </div>
            <div className="h-10 flex gap-4 justify-between mt-10 ">
              {/* {
                data.map((item,index)=> {
                  return(
                    <div className="flex h-5 sm:h-6 gap-3" key={index}>
                      <Image width={25} height={20} src={item.image} alt="paraImage" />
                       <p className="text-sm">{item.para}</p>
                      </div>
                  )
                })
              } */}
            </div>
        </div>

          <div className="flex pb-4 items-center justify-center md:w-1/2">
          {/* <Image width={300} height={300} src={imageGirl} className="xs:w-48 sm:w-60  md:w-80 object-cover border-4 rounded-full bg-primary-600 flex items-center content-center" alt="girlImg" /> */}
          </div>
      </div>
      <About/>
      <Service/>
      <Plans/>
      <Footer />
    </main>
  );
}
