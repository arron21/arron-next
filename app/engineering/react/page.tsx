import TextPage from "@/app/components/TextPage/TextPage";

export default function Page() {
  return (
    <TextPage
      title="React"
      paragraphs={[
        "React is the foundation of this website, built with React and Next.js, showcasing its versatility and performance.",

        "While I personally find the syntax of frameworks like Angular and Vue more to my liking, I recognize that React has gained immense popularity for a reason. Its unique approach to frontend development offers a flexible way to create user interfaces, making it a favorite among many developers. JSX, while different from traditional HTML structure, allows for a powerful and dynamic rendering of components that can lead to exciting possibilities in web development.",

        "As I continue to work with React, I appreciate its strengths, particularly its vibrant ecosystem and community support. While it may have a gentler learning curve compared to Angular, this accessibility has opened doors for many aspiring developers to enter the world of frontend development. Moreover, the flexibility React offers in integrating third-party libraries empowers developers to build tailored solutions. I believe that both React and Angular have their unique advantages, and I look forward to leveraging the best of both in my projects.",
      ]}
    />
  );
}
