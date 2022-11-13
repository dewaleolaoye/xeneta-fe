/* eslint-disable jsx-a11y/aria-role */
import { useState } from 'react';
import { Box, HStack } from '@chakra-ui/react';
import { FaExchangeAlt } from 'react-icons/fa';
import { Select, Chart } from 'components';
import { useGetPortsQuery } from 'store/api/market';

const Ports = () => {
  const { data } = useGetPortsQuery({});

  const [port, setPort] = useState({
    origin: 'CNSGH',
    destination: 'NLRTM',
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPort({
      ...port,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box>
      <HStack spacing="32px" alignItems="center" mb="24px">
        <Select
          onChange={handleChange}
          name="origin"
          value={port.origin}
          label="origin"
          role="combobox"
        >
          {data?.map(({ code, name }, index) => (
            <option value={code} key={index} role="options">
              {name} {code}
            </option>
          ))}
        </Select>

        <Box>
          <FaExchangeAlt color="#cbcdd4" />
        </Box>

        <Select
          onChange={handleChange}
          name="destination"
          value={port.destination}
          label="destination"
          role="contentinfo"
        >
          {data?.map(({ code, name }, index) => (
            <option value={code} key={index} role="list">
              {name} {code}
            </option>
          ))}
        </Select>
      </HStack>

      <Chart port={port} />
    </Box>
  );
};

export default Ports;
