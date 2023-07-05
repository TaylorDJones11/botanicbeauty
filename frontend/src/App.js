import { Container } from "react-bootstrap";
import Head from "./components/Head";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Head />
      <main className="py-3">
        <Container>
          <h1>Welcome to Botanic Beauty</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
};
export default App;
