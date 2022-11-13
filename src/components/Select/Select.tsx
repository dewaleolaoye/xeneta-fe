import { Box, Select as ChakraSelect, SelectProps } from '@chakra-ui/react';

interface ISelectProps extends SelectProps {
  children: React.ReactNode;
  label: string;
}

const Select = (props: ISelectProps) => {
  return (
    <Box width="100%">
      <Box
        fontWeight="300"
        htmlFor={props.label}
        fontSize="14px"
        as="label"
        textTransform="capitalize"
      >
        {props.label}
      </Box>

      <ChakraSelect
        title="hello"
        border="1px solid #efefef"
        id={props.label}
        borderBottom="1px solid #efefef"
        bg="transparent"
        minH="58px"
        borderRadius="0"
        _hover={{
          bg: 'transparent',
        }}
        _focus={{
          bg: 'transparent',
          borderBottom: '1px solid #efefef',
          border: '1px solid #efefef',
        }}
        {...props}
      >
        {props.children}
      </ChakraSelect>
    </Box>
  );
};

export default Select;
