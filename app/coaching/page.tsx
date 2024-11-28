import Image from "next/image";

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto p-4">
      <h1 className="text-4xl font-bold text-center my-8">Coaching</h1>

      <div className="flex flex-col lg:flex-row-reverse gap-8 items-start">
        <div className="text-lg text-gray-700 leading-relaxed lg:w-1/2">
          <p className="mb-4">
            I am deeply passionate about the sport of boxing and have been training consistently since 2022. Over time, I’ve developed a strong affinity for coaching—not just in boxing but also in general fitness.
          </p>
          <p className="mb-4">
            I firmly believe that everyone, regardless of skill level, can benefit from physical exercise. I take pride in designing tailored workouts that align with my clients’ unique abilities and goals.
          </p>
          <p>
            For those who aspire to go beyond their current limits, I am dedicated to helping them unlock their full potential and become the best version of themselves.
          </p>
        </div>

        <div className="flex flex-col gap-4 lg:w-1/2">
          <Image
            src="/images/speedbag-coaching.jpg"
            alt="Coach demonstrating speed bag training"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
          <Image
            src="/images/mitt-coaching.jpg"
            alt="Coach holding mitts during a training session"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </main>
  );
}
