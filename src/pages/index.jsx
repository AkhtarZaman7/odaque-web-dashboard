import { Meta } from "../layouts/Meta";
import { Main } from "../templates/Main";

import Home from "../app/LandingPage/LandingPage";

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="ODAQUE"
          description="This would be the landing page in our website"
        />
      }
    >
      <Home />
    </Main>
  );
};

export default Index;
