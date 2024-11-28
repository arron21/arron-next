import TextPage from "@/app/components/TextPage/TextPage";

export default function Page() {
  return (
    <TextPage
      title="Angular"
      paragraphs={[
        "I remember back in 2013 when my team was tasked with architecting a new application. We were moving away from Laravel and wanted to implement a modern frontend. I had to choose between React and AngularJS (Angular 2 was not available yet). I chose AngularJS because I liked the syntax, and it was built by Google. As a Google fanboy, it was a natural choice.",

        "Angular has changed a lot since 2013, evolving from AngularJS to simply Angular. In 2023, the introduction of standalone component syntax made the requirement for modules a thing of the past. It's my favorite framework, not only because of my familiarity with it but also due to its opinionated nature.",

        "Being a strongly opinionated framework means that we, as developers, don't need to reinvent the wheel for every project. This allows for greater consistency and efficiency in our development process.",
      ]}
    />
  );
}
