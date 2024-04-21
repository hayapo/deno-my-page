import { Head } from "$fresh/runtime.ts";

type CustonHeadProps = {
  title?: string;
  description?: string;
};

export function CustomHead({ title, description }: CustonHeadProps) {
  const siteTitle = title || "hayapo's website";
  const siteDescription = description || "website of hayapo profile";
  return (
    <Head>
      <title>{`${siteTitle} | hayapo`}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta charSet="utf-8" />
    </Head>
  );
}
