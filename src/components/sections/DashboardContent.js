import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import * as UrlConstant from "../../constant/constant";
import { Box, Button, Center, Divider, Flex, Image, Square, Text, useMediaQuery } from "@chakra-ui/react";
import DiceIcon from "../../assets/gambler.svg";

const DashboardContent = () => {
  const initial_players_data = [
    {
      Name: "",
      Price: "",
      Bet: "",
      "Profile Image": "",
    },
  ];

  const [isLargerThan1366] = useMediaQuery("(min-width: 1366px)");
  const [isLargerThan770] = useMediaQuery("(min-width: 770px)");
  const [playersData, setPlayersData] = useState(initial_players_data);

  const urlLauncher = async () => {
    try {
      const response = await fetch(UrlConstant.FETCH_PLAYER_DATA, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response;
    } catch (e) {
      console.log(e);
    }
  };

  const fetchAllPlayers = (e) => {
    urlLauncher().then((e) => {
      e.json().then((e) => {
        console.log(e);
        setPlayersData(e);
      });
    });
  };

  useEffect(() => {
    fetchAllPlayers();
  }, []);

  return (
    <>
      <Flex color="white">
        <Box w="20%" h={"100%"} bg="#fbfbfd">
          <Square mt={20} ml={"30%"} mb={0} bg="transparent" size="150px">
            <Center>
              <Image src={DiceIcon}/>
            </Center>
          </Square>
          <Square size="50px">
          </Square>
          <Text ml={10} fontFamily="cursive" fontWeight={"900"} fontStyle="italic" fontSize="larger" color="black">Playing 9</Text>
          <Divider />
          <Box height={"600px"} bg="black">

          </Box>
          <Box h={97} w={"auto"} bg="blck">
              <Button mt={5} ml={"14%"} h={50} w={250} colorScheme="blue">START</Button>
          </Box>
        </Box>
        <Box flex="1" bg="tomato">
          <Text>Box 3</Text>
        </Box>
      </Flex>
    </>
  );
};

export default withRouter(DashboardContent);
