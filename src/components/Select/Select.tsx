import { Select as ChakraSelect, SelectProps } from '@chakra-ui/react';

interface ISelectProps extends SelectProps {
  children: React.ReactNode;
}

const Select = (props: ISelectProps) => {
  return (
    <ChakraSelect
      border="none"
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
      }}
      {...props}
    >
      {props.children}
    </ChakraSelect>
  );
};

export default Select;
