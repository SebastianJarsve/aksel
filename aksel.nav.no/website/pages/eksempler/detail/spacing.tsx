import { Detail } from "@navikt/ds-react";
import { withDsExample } from "@/web/examples/withDsExample";

const Example = () => {
  const lorem = "Du må gjøre en filtrering for å se brukere i listen.";

  return (
    <div>
      <Detail spacing>{lorem}</Detail>
      <Detail spacing>{lorem}</Detail>
    </div>
  );
};

// EXAMPLES DO NOT INCLUDE CONTENT BELOW THIS LINE
export default withDsExample(Example, { variant: "full" });

/* Storybook story */
export const Demo = {
  render: Example,
};

export const args = {
  index: 1,
};
