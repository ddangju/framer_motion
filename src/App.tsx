import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
function App() {
  const [count, setCount] = useState(0);
  const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const Box = styled(motion.div)`
    width: 200px;
    height: 200px;
    background-color: #ffffff;
    border-radius: 15px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  `;
  return (
    <>
      <Wrapper>
        <Box
          transition={{ type: "spring", delay: 0.5 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotateZ: 360 }}
        />
      </Wrapper>
    </>
  );
}

export default App;
