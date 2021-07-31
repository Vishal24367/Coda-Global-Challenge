import { Flex } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";

export default function DashboardLayout(props) {
  return (
    <>
      <Flex direction="column" maxW="xxl" backgroundColor="#fbfbfd" {...props}>
        {props.children}
        {""}
      </Flex>
    </>
  );
}
