export default function Docs({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
    if(params.slug?.length === 2) {
        return <h3>Docs for feature {params.slug[0]} and concept of {params.slug[1]}</h3>
    }
    else if (params.slug?.length === 1) {
        return <h3>Docs for feature {params.slug[0]}</h3>
    }

  return <h2>Docs home page</h2>;
}
