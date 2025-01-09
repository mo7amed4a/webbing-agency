export default function ValuesList() {
  const values = [
    {
      id: 1,
      title: "Innovation & Excellence",
      description:
        "We are driven by creativity and a commitment to quality. Every project we undertake is an opportunity to craft unique, cutting-edge solutions that exceed expectations and inspire success.",
    },
    {
      id: 2,
      title: "Collaboration & Trust",
      description:
        "Partnership is at the heart of what we do. Through open communication and transparency, we build strong relationships with our clients, working together to achieve shared goals.",
    },
    {
      id: 3,
      title: "Customer Focus",
      description:
        "Your success is our priority. We listen, learn, and adapt to your needs, delivering tailored solutions that evolve with the dynamic digital landscape.",
    },
  ]

  return (
    <div  className="max-w-7xl mx-auto" >
      <div className="md:flex md:gap-6 relative">
        {/* Dashed line */}
        <div className="absolute left-4 top-4 bottom-4 w-[2px] md:w-full md:h-[2px] md:left-0 md:top-4 bg-[#4A90A7]/20 
                        [background-image:linear-gradient(to_bottom,#4A90A7_33%,rgba(255,255,255,0)_0%)]
                        [background-position:center]
                        [background-size:2px_9px]
                        [background-repeat:repeat-y]
                        md:[background-image:linear-gradient(to_right,#4A90A7_33%,rgba(255,255,255,0)_0%)]
                        md:[background-position:top]
                        md:[background-size:9px_2px]
                        md:[background-repeat:repeat-x]" />
        
        {values.map((value) => (
          <div key={value.id} className="relative mb-6 md:mb-0 md:flex-1">
            <div className="flex gap-4 md:flex-col md:items-center md:text-center">
              <div className="flex-shrink-0 relative z-10">
                <div className="w-8 h-8 rounded-full text-white flex items-center justify-center text-sm font-semibold" style={{background: "linear-gradient(90deg, #1F7099 0%, #A2C6D9 100%)"}}>
                  {value.id}
                </div>
              </div>
              <div className="space-y-1 md:mt-2">
                <h3 className="font-semibold text-gray-900">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

