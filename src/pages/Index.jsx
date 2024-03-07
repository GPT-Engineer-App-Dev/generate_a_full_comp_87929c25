import React from "react";
import { Box, Flex, Heading, Text, Button, Image, VStack, HStack, Link, IconButton, useColorMode, Container, SimpleGrid, AspectRatio } from "@chakra-ui/react";
import { FaPlay, FaSun, FaMoon } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  // Placeholder function for future API call
  const fetchAIInfo = async () => {
    // This should be replaced with a real API call
    console.log("Fetching AI information...");
  };

  // Placeholder for changing the video based on user interaction
  const changeVideo = (videoId) => {
    // This should update the state with a new video ID or URL
    console.log(`Changing to video ${videoId}`);
  };

  return (
    <Container maxW="container.xl">
      <VStack spacing={8}>
        <HStack width="full" justify="space-between" pt={4}>
          <Heading>AI Revolution</Heading>
          <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} variant="ghost" />
        </HStack>
        <SimpleGrid columns={[1, null, 2]} spacing={10}>
          <Box>
            <Heading as="h2" mb={4}>
              Cutting Edge AI
            </Heading>
            <Text mb={4}>Exploring the latest advancements in artificial intelligence and how they're being applied across various industries.</Text>
            <Button onClick={fetchAIInfo} leftIcon={<FaPlay />} colorScheme="teal">
              Learn More
            </Button>
          </Box>
          <AspectRatio ratio={16 / 9} width="full">
            <iframe title="AI Video" src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowFullScreen />
          </AspectRatio>
        </SimpleGrid>
        <Flex direction="column" align="center">
          <Heading as="h3" size="lg">
            Discover More Topics
          </Heading>
          <HStack mt={4}>
            {/* These are placeholders and should be replaced with actual navigation and content */}
            <Button onClick={() => changeVideo("videoId1")}>AI in Healthcare</Button>
            <Button onClick={() => changeVideo("videoId2")}>AI in Finance</Button>
            <Button onClick={() => changeVideo("videoId3")}>Autonomous Vehicles</Button>
          </HStack>
        </Flex>
        <Flex width="full" justify="center" p={8}>
          <Image src="https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMFRlY2hub2xvZ3l8ZW58MHx8fHwxNzA5ODI0MjMxfDA&ixlib=rb-4.0.3&q=80&w=1080" />
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;
