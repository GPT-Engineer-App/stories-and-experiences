import { Box, Container, Heading, Text, SimpleGrid, Image, Button, Flex, Icon, VStack, HStack, Spacer } from "@chakra-ui/react";
import { FaUsers, FaCogs, FaPaintBrush, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Stories & Experiences Events
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Crafting unforgettable experiences in the United Arab Emirates.
        </Text>
        <Image src="https://images.unsplash.com/photo-1565365527469-4008f67e8664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxldmVudCUyMGNvbXBhbnklMjB1bml0ZWQlMjBhcmFiJTIwZW1pcmF0ZXN8ZW58MHx8fHwxNzEwMDE5MzMxfDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" alt="Stories & Experiences Events" />
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} py={20}>
        <ServiceCard icon={FaUsers} title="Staffing Solutions" description="Professional and friendly staff to make your events successful and memorable." />
        <ServiceCard icon={FaCogs} title="Event Production" description="State-of-the-art production services that bring your vision to life." />
        <ServiceCard icon={FaPaintBrush} title="Branding" description="Creative branding solutions that resonate with your audience." />
      </SimpleGrid>

      <Flex justifyContent="center" py={10}>
        <Button rightIcon={<FaEnvelope />} colorScheme="teal" size="lg" px={10} onClick={() => (window.location = "mailto:contact@storiesexperiences.com")}>
          Contact Us
        </Button>
      </Flex>
    </Container>
  );
};

const ServiceCard = ({ icon, title, description }) => (
  <VStack spacing={4} p={6} borderColor="gray.200" borderWidth="1px" borderRadius="lg" align="stretch" _hover={{ shadow: "md" }} transition="all 0.3s ease-in-out">
    <Flex justifyContent="center">
      <Icon as={icon} w={16} h={16} color="teal.500" />
    </Flex>
    <Heading as="h3" size="lg" textAlign="center">
      {title}
    </Heading>
    <Text textAlign="center">{description}</Text>
  </VStack>
);

export default Index;
