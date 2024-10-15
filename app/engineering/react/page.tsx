export default function Page() {
  return (
    <main>
      <h1 className="text-4xl my-8">React</h1>
      <p>React... this website is built with React and Next.js.</p>
      <p>
        I&apos;ll admit I am not a big fan of React. I prefer the syntax of
        other frameworks like Angular and Vue. React is still incredibly popular
        and will probably remain so for a long time. I believe it approaches
        frontend development in a way drifts too far from traditional
        development standards. I feel JSX is the main culprit here; the approach
        of bringing HTML into JavaScript is not as elegant as bringing
        JavaScript into HTML. While I will continue to use React, I will always
        advocate for a different approach first.
      </p>
      <p>
        Personal opinions aside I also have some simple professional opinions. I
        believe React.js is for more junior oriented developers. Part of the
        reason it is so hugely popular is because it doesn't have as steep of a
        learning curve as Angular. Angular and React came out around the same
        time. React forces users to rely on third party libraries for
        functionality while Angular has core functionality covered out of the
        box. I trust that Google is going to maintain their libraries which as a
        professional is very important to me. There is no guarentee that
        libraries like react-router by Remix (as popular as it may be) are going
        to me maintained 10 years from now.
      </p>
    </main>
  );
}
