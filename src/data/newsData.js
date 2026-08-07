import companyNewsImg from "../assets/imagesss/companynews.png";
import industryInsightsImg from "../assets/imagesss/industryinsights.png";
import techInnovationImg from "../assets/imagesss/techinoovation.png";

export const NEWS_ARTICLES = [
    {
      id: "news-1",
      category: "Company News",
      date: "Oct 24, 2026",
      title: "U&WE Expands European Operations with New Embedded Systems Hub",
      desc: "Our new facility will serve as a central hub for our growing roster of European enterprise clients, focusing on mission-critical embedded systems.",
      content: "We are incredibly excited to announce the opening of our newest engineering hub in Europe. This state-of-the-art facility will act as the central nervous system for our European operations, allowing us to better serve our rapidly expanding roster of enterprise clients in the automotive, medical, and aerospace sectors.\n\nThe new center will house over 200 engineers specializing in mission-critical embedded systems, functional safety (ISO 26262), and advanced PCB design. By positioning our experts closer to our European partners, we can dramatically reduce time-to-market and foster tighter collaboration on complex hardware-software co-design projects.\n\n\"This expansion marks a significant milestone in U&WE's global growth strategy,\" said our CEO. \"Europe is at the forefront of automotive innovation and industrial automation, and this new hub ensures we are right there in the trenches with our partners, driving the future of embedded technology.\"",
      image: companyNewsImg,
      link: "/insights/news/news-1"
    },
    {
      id: "news-2",
      category: "Industry Insights",
      date: "Sep 12, 2026",
      title: "The Edge AI Revolution: How Custom ASICs are Changing the Game",
      desc: "An in-depth look at how the latest advancements in custom ASIC designs are pushing the boundaries of what's possible at the edge.",
      content: "The demand for intelligent edge devices is skyrocketing, but power and thermal constraints remain significant hurdles. Off-the-shelf silicon often falls short when balancing intense computational requirements (like real-time vision processing) with extreme power efficiency.\n\nThis is where custom Application-Specific Integrated Circuits (ASICs) are completely changing the game. By tailoring the silicon architecture directly to the specific neural network workloads, we are seeing performance-per-watt metrics improve by orders of magnitude compared to standard GPUs or generic SoCs.\n\nIn our latest whitepaper, our hardware architecture team breaks down the techniques we use to achieve these breakthroughs, including mixed-precision quantization at the hardware level, highly optimized SRAM data flows, and ultra-low-power standard cell libraries. The future of AI isn't just in the cloud; it's at the edge, and custom silicon is the key to unlocking it.",
      image: industryInsightsImg,
      link: "/insights/news/news-2"
    },
    {
      id: "news-3",
      category: "Tech Innovations",
      date: "Aug 05, 2026",
      title: "Strategic Partnership Announced for Next-Gen Autonomous Vehicle Hardware",
      desc: "We are thrilled to announce a new strategic partnership aimed at developing ultra-reliable hardware solutions for autonomous vehicles.",
      content: "U&WE is proud to announce a comprehensive strategic partnership with a leading global automotive Tier-1 supplier to co-develop the next generation of autonomous driving compute platforms.\n\nThis multi-year collaboration will focus on designing fail-operational hardware architectures that meet the rigorous ASIL-D safety standards required for Level 4 and Level 5 autonomy. Our joint engineering teams will tackle the immense challenges of sensor fusion (integrating LiDAR, radar, and high-resolution cameras), developing custom high-bandwidth Network-on-Chip (NoC) interconnects, and ensuring bulletproof cybersecurity at the hardware level.\n\n\"Autonomous driving presents some of the most complex engineering challenges of our generation,\" noted our VP of Hardware Engineering. \"By combining our deep expertise in high-performance silicon and safety-critical embedded systems with our partner's automotive domain knowledge, we are poised to deliver a compute platform that will set a new industry standard for reliability and performance.\"",
      image: techInnovationImg,
      link: "/insights/news/news-3"
    }
];
