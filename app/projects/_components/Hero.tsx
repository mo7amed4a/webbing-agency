'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function HeroProjects() {
  const image = "/assets/imgs/image (12).png";

  // استخدام useInView لتتبع ظهور النص
  const [textRef, textInView] = useInView({
    triggerOnce: false, // التحريك يتكرر في كل مرة
    threshold: 0.3, // يبدأ التحريك عندما يكون 30% من العنصر مرئيًا
  });

  // استخدام useInView لتتبع ظهور الصورة
  const [imageRef, imageInView] = useInView({
    triggerOnce: false, // التحريك يتكرر في كل مرة
    threshold: 0.3, // يبدأ التحريك عندما يكون 30% من العنصر مرئيًا
  });

  return (
    <div className="container lg:max-w-[80%] mx-auto px-4 min-h-screen mt-24">
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between min-h-screen">
        
        {/* النص */}
        <motion.div 
          ref={textRef} // ربط useInView بالعنصر
          className="lg:w-1/2 p-4 flex flex-col items-center lg:items-start text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }} // الحالة الأولية (غير مرئي ومتحرك لليسار)
          animate={textInView ? { opacity: 1, x: 0 } : {}} // التحريك عند الظهور
          transition={{ duration: 0.8 }} // مدة التحريك
        >
          <h1 className="text-5xl text-[#1F7099] font-oxanium font-thin mb-4">
            Our Projects
          </h1>
          <p className="mb-6 text-2xl font-extraThin font-inter">
            Take a look at some of our recent work and see how we bring ideas to life through innovative design, cutting-edge technology, and a commitment to excellence in every project.
          </p>
        </motion.div>

        {/* الصورة */}
        <motion.div 
          ref={imageRef} // ربط useInView بالعنصر
          className="lg:w-1/2 md:h-[80vh] p-4 justify-center lg:justify-end mt-16 flex"
          initial={{ opacity: 0, x: 50 }} // الحالة الأولية (غير مرئي ومتحرك لليمين)
          animate={imageInView ? { opacity: 1, x: 0 } : {}} // التحريك عند الظهور
          transition={{ duration: 0.8 }} // مدة التحريك
        >
          <div className="border-2 border-dashed rounded-se-[3zzrem] rounded-es-[3rem] border-primary">
            <Image
              width={400}
              height={400}
              src={image}
              className={`w-full h-72 lg:h-full object-cover transition-opacity duration-500 opacity-100`}
              alt="Hero Part Image"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}