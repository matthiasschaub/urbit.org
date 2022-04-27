import Link from "next/link";
import Container from "../../components/Container";
import Section from "../../components/Section";
import SingleColumn from "../../components/SingleColumn";
import { useInputChange } from "../../lib/hooks";

const SubmissionPage = () => {
  const [form, handleFormChange] = useInputChange();

  const href = `https://github.com/urbit/urbit.org/new/master?filename=/content/id/${form?.ship?.substring(
    1
  )}.md&value=${encodeURIComponent(
    `+++
ship = "${form?.ship}"
+++

${form?.description || ""}`
  )}`;

  return (
    <Container>
      <SingleColumn>
        <Section narrow className="space-y-12">
          <div className="flex flex-col space-y-4">
            <h2>Claim your page</h2>
            <p>
              Urbit ID page claims are accomplished through a GitHub pull
              request.
            </p>
            <p>
              You’ll need <a href="https://github.com">a GitHub account</a>{" "}
              before you get started.
            </p>
            <p>
              First, enter your information and then click “Submit with GitHub.”
              You’ll be directed to a GitHub pull request page with a
              pre-populated markdown file. Click “Propose new file,” and then
              “Create pull request” on the following page.
            </p>
            <p>
              Then, to validate that you operate this group, send a DM to{" "}
              <Link href="/id/~haddef-sigwen">
                <a>~haddef-sigwen</a>
              </Link>{" "}
              from your group host <code>@p</code> with a link to the pull
              request on GitHub. We’ll approve the pull request and your page
              will be online shortly.
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <h3>Enter your Urbit ID information</h3>
            <div className="flex flex-col">
              <p>
                Urbit ID (e.g. <code>~bitbet-bolbel</code>) (required)
              </p>
              <input
                className="bg-wall-100 p-2"
                name="ship"
                onChange={handleFormChange}
              />
            </div>
            <div className="flex flex-col">
              <p>Hosted groups</p>
              <input
                className="bg-wall-100 p-2 text-wall-400"
                readOnly
                value="Submitted groups associated with this ID will automatically appear"
              />
            </div>
            <div className="flex flex-col">
              <p>Applications</p>
              <input
                className="bg-wall-100 p-2 text-wall-400"
                readOnly
                value="Submitted applications associated with this ID will automatically appear"
              />
            </div>
            <div className="flex flex-col">
              <p>Description</p>
              <textarea
                className="resize-none bg-wall-100 p-2 h-60"
                name="description"
                onChange={handleFormChange}
              />
            </div>
          </div>
          <button
            className="button-lg bg-wall-600 text-wall-100"
            onClick={() => window.open(href)}
          >
            Submit with GitHub
          </button>
          <Link href="/">
            <a className="text-xl pt-8 block font-semibold">Urbit.org</a>
          </Link>
        </Section>
      </SingleColumn>
    </Container>
  );
};

export default SubmissionPage;
