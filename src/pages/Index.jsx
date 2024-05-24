import { Box, Container, VStack, Text, Heading, Image, SimpleGrid, Link, Flex, Spacer, HStack, Button } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" padding={4}>
        <HStack spacing={8} alignItems="center">
          <Heading size="md">ElectroShop</Heading>
          <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
            <Link href="#">Home</Link>
            <Link href="#">Products</Link>
            <Link href="#">About Us</Link>
            <Link href="#">Contact</Link>
          </HStack>
        </HStack>
        <Spacer />
        <Button colorScheme="teal" variant="outline" size="sm">
          Sign In
        </Button>
      </Flex>

      {/* Hero Section */}
      <Box bg="gray.100" py={20} textAlign="center">
        <Container maxW="container.lg">
          <Heading mb={4}>Welcome to ElectroShop</Heading>
          <Text fontSize="lg" mb={6}>Your one-stop shop for the latest electronics</Text>
          <Button colorScheme="teal" size="lg">Shop Now</Button>
        </Container>
      </Box>

      {/* Product Listing Section */}
      <Container maxW="container.lg" py={10}>
        <Heading mb={6}>Featured Products</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Product 1" />
            <Box p={6}>
              <Heading size="md" mb={2}>Product 1</Heading>
              <Text mb={4}>Description of Product 1</Text>
              <Button colorScheme="teal">Buy Now</Button>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Product 2" />
            <Box p={6}>
              <Heading size="md" mb={2}>Product 2</Heading>
              <Text mb={4}>Description of Product 2</Text>
              <Button colorScheme="teal">Buy Now</Button>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Product 3" />
            <Box p={6}>
              <Heading size="md" mb={2}>Product 3</Heading>
              <Text mb={4}>Description of Product 3</Text>
              <Button colorScheme="teal">Buy Now</Button>
            </Box>
          </Box>
        </SimpleGrid>
      </Container>

      {/* Footer */}
      <Box bg="blue.800" color="white" py={10}>
        <Container maxW="container.lg">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <Box>
              <Heading size="md" mb={4}>ElectroShop</Heading>
              <Text>© 2023 ElectroShop. All rights reserved.</Text>
            </Box>
            <Box>
              <Heading size="md" mb={4}>Follow Us</Heading>
              <HStack spacing={4}>
                <Link href="#"><FaFacebook size="24" /></Link>
                <Link href="#"><FaTwitter size="24" /></Link>
                <Link href="#"><FaInstagram size="24" /></Link>
              </HStack>
            </Box>
            <Box>
              <Heading size="md" mb={4}>Contact Us</Heading>
              <Text>Email: support@electroshop.com</Text>
              <Text>Phone: (123) 456-7890</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;