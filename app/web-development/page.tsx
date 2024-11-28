import TextPage from "@/app/components/TextPage/TextPage";

export default function Page() {
    return (
        <main className="max-w-5xl mx-auto p-4">
            <TextPage
                title="My Career Journey in Web Development"
                paragraphs={[
                    "My career in web development began at a marketing agency where I was responsible for modifying WordPress websites. This experience laid the foundation for my understanding of web technologies and sparked my interest in creating custom solutions.",
                    "As I progressed, I started developing custom web applications using JavaScript. This allowed me to dive deeper into the intricacies of web development and build more complex and dynamic projects.",
                    "Over the years, I have had the privilege of working with some of the largest top 500 companies in the world. These experiences have not only broadened my technical skills but also provided me with valuable insights into the industry.",
                    "My passion for web development comes from the process of architecting and designing projects from both a visual and coding perspective. I find great satisfaction in creating intuitive and engaging user interfaces that provide a seamless experience for users."
                ]}
            />
        </main>
    );
}
