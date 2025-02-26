import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import {
  Container,
  Main,
  Markdown,
  formatDate,
  generateDisplayDate,
} from "@urbit/fdn-design-system";
import IntraNav from "@/components/IntraNav";
import Footer from "@/components/Footer";
import Meta from "@/components/Meta";
import ErrorPage from "@/pages/404";

export default function GrantProgramPage({
  post,
  markdown,
  program,
  actionLink,
  actionText,
}) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage />;
  }

  const title = program.charAt(0).toUpperCase() + program.slice(1);
  return (
    <Container>
      <Head>
        <title>{title} • Grants • urbit.org</title>
        {Meta(post)}
      </Head>
      <IntraNav />
      <Main className="space-y-5 md:space-y-8 text-primary" singleColumn>
        <h1 className="h1 mt-12 md:mt-16">{post.title}</h1>
        <p className="body-md text-tertiary">
          Last Revision:{" "}
          <span className="text-primary">
            {formatDate(generateDisplayDate(post.date))}
          </span>
        </p>
        <Link
          className="btn bg-primary hover:bg-secondary text-surface body-md w-fit"
          href={actionLink}
        >
          {actionText}
        </Link>
        <hr className="hr-horizontal border-brite" />
        <section className="markdown layout-narrow">
          <Markdown.render content={JSON.parse(markdown)} />
        </section>
      </Main>
      <Footer />
    </Container>
  );
}
