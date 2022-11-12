import { Box, Heading } from '@chakra-ui/react';
import { Ports } from 'components';

function App() {
  return (
    <Box maxWidth="1040px" margin="auto" padding="40px 24px">
      <Heading textAlign="center" mb="24px" as="h1">
        Market Rates
      </Heading>

      <Ports />
    </Box>
  );
}

export default App;
