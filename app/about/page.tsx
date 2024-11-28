import Image from "next/image";
import TextPage from "@/app/components/TextPage/TextPage";

export default function Page() {
    return (
        <main className="max-w-5xl mx-auto p-4">
            <div className="flex flex-col lg:flex-row-reverse gap-8 items-start">
                <div className="text-lg text-gray-700 leading-relaxed lg:w-2/3">
                    <TextPage
                        title="About Me"
                        paragraphs={[
                            "Hi, I'm Arron McCrory. I have been working in IT since I was in the womb, and have specialized in frontend web development. Over the years, I have honed my skills and developed a deep passion for creating intuitive and engaging user interfaces.",
                            "In addition to my professional work, I have a variety of interests that keep me busy and inspired. I enjoy photography, capturing moments and scenes that tell a story. Boxing is another passion of mine, providing both a physical challenge and a mental release. When I have some downtime, I love to unwind with video games.",
                            "I am always eager to learn new things and take on new challenges, both in my professional career and personal life. Thank you for taking the time to learn a bit about me."
                        ]}
                    />
                </div>

                <div className="flex flex-wrap flex-row items-center lg:flex-col gap-4 lg:w-1/3">
                    <Image
                        src="/images/arron-taking-a-photo.jpg"
                        alt="Arron McCrory taking a photograph"
                        width={400}
                        height={240}
                        className="rounded-lg shadow-lg"
                    />
                    <Image
                        src="/images/arron-boxing.jpg"
                        alt="Arron McCrory boxing"
                        width={400}
                        height={240}
                        className="rounded-lg shadow-lg"
                    />
                    <Image
                        src="/images/arron-cider-mill.jpg"
                        alt="Arron McCrory enjoying some hot cider"
                        width={400}
                        height={240}
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </main>
    );
}
