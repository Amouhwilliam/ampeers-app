import React from "react";
import "./App.css";

const Intro = () => (
    <>
        <h1>Welcome to the Fullstack Interview</h1>
        Hint: If you are not able to solve some parts of the task please skip this
        part and continue on. We ♥ Typescript.
        <h2>Task 1 - React</h2>
        <p>
            Implement a Master Detail component which renders a list of items on the
            left and a detail view on the right. When the user clicks on a list item
            the render function of the detail view should be called with the
            correspondig payload. The component should provide the following api:
        </p>
        <pre>
      <code>
        {`
  <MasterDetail>
    <MasterDetail.Item payload={{content: "Hello Peers"}}>Intro</MasterDetail.Item>
    <MasterDetail.Item payload={{content: "Welcome to Ampeers Energy"}}>Welcome</MasterDetail.Item>
    <MasterDetail.Detail>
      {(payload) => payload.content}
    </MasterDetail.Detail>
  </MasterDetail>
    `}
      </code>
    </pre>
        <h2>Task 2 - Graphql</h2>
        <p>
            Query a list of all public repos of <a href="https://github.com/pinojs">"pinojs"</a> via the{" "}
            <a href="https://developer.github.com/v4/">github graphql api</a>. Please
            consult the{" "}
            <a href="https://docs.github.com/en/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql">
                documentation
            </a>{" "}
            on how to authenticate against the api and setup the{" "}
            <a href="https://www.apollographql.com/docs/react/">apollo client</a> in
            the `index.tsx` accordingly. Render the list with your `MasterDetail`
            component developed earlier. List the name of the repos on the left side
            and provide details like name and description when the user clicks on the
            item. Implement reasonable loading and error states for your components.
            If you could not complete Task 1 provide the same functionality without
            the MasterDetail component.
        </p>
        <h2>Task 3 - Javascript</h2>
        <p>
            Implement a function which takes a arbitary nested JS Object and do the
            following transformations:
        </p>
        <ul>
            <li>
                add +1 to each Number within in Object (eg:{" "}
                <span
                    style={{
                        fontStyle: "italic",
                        margin: "0 5px",
                        display: "inline-block",
                    }}
                >
          x: 9 =&gt; x: 10
        </span>
                )
            </li>
            <li>
                add 'AE' to each String within in Object (eg:{" "}
                <div
                    style={{
                        fontStyle: "italic",
                        margin: "0 5px",
                        display: "inline-block",
                    }}
                >
                    y: 'abc' =&gt; y: 'abc AE'
                </div>
                )
            </li>
            <li>The object should keep its structure!</li>
            <li>Log the result to the browser console</li>
        </ul>
        See a rough example structure below:
        <pre>
      <code>{`
  // initial object
  {
    a: 123,
    b: 'abc'
    c: [1, 2, 3]
  }

  // resulting object
  {
    a: 124,
    b: 'abc AE'
    c: [2, 3, 4]
  }
`}</code>
    </pre>
        The components you develop during the interview should be rendered inside
        this {`<App />`} component.
        <h2>Task 4 - Backend (NodeJS)</h2>
        <p>
            Build a simple GraphQL server with fastify-gql (already preinstalled
            dependency) <a href="https://github.com/mcollina/fastify-gql">(Docs)</a>.
            Skeleton for this task lives in the server folder. The server should
            support
            <pre className="inline">
        <code>{`readContract, readContractComponent`}</code>
      </pre>{" "}
            queries. The first should return a full contract by a given contractId
            (otherwise null). The latter should return a contractComponent by a given
            contractComponentId (otherwise null). A simple data-set can be found in{" "}
            <pre className="inline">
        <code>{`data.js`}</code>
      </pre>
            , the respective schema are mostly predefined in{" "}
            <pre className="inline">
        <code>{`schema.graphql`}</code>
      </pre>
            .
        </p>
        <h2>Optional: Task 5 - Plain JS</h2>
        <p>
            What will be logged / happen with the following code lines:
            <pre>
        <code>
          {`
  const _promise = Promise.reject(new Error('BOOOM'));
  _promise.then(() => console.log('.then'));
  _promise.catch(console.log)
        `}
        </code>
      </pre>
            . Whats the issue here? Short description is totally fine.
        </p>
        <h2>Best of Luck 🚀</h2>
    </>
);

export default Intro;
