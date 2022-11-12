import { FC, useEffect } from 'react';
import { Box, useToast } from '@chakra-ui/react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useGetMarketRatesQuery } from 'store/api/market';
import { RateDTO } from 'interface';
import { format, parseISO } from 'date-fns';

interface IChartProps {
  port: RateDTO;
}
const Chart: FC<IChartProps> = ({ port }) => {
  const { data, error } = useGetMarketRatesQuery(port);

  const toast = useToast();

  const resError = error as {
    data: {
      message: string;
    };
  };

  useEffect(() => {
    error &&
      toast({
        title: 'Error',
        status: 'error',
        description: resError?.data?.message,
        duration: 5000,
        isClosable: true,
      });
  }, [error, resError?.data?.message, toast, port]);

  return (
    <>
      <Box height="500px" bg="#fff" width="100%">
        {data && (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="day"
                tickFormatter={(value, i) => {
                  return value && format(parseISO(value), 'MMM. d, yyyy');
                }}
              />

              <YAxis tickCount={5} tickFormatter={(value) => `$ ${value}`} />

              <Tooltip />

              <Legend />

              <Line
                dot={false}
                strokeWidth="1"
                dataKey="high"
                stroke="#d80b0b"
              />

              <Line
                dot={false}
                strokeWidth="3"
                dataKey="mean"
                stroke="#32ad61"
                activeDot={{ r: 5 }}
              />

              <Line
                dot={false}
                strokeWidth="1"
                dataKey="low"
                stroke="#0f14ba"
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </Box>
    </>
  );
};

export default Chart;
