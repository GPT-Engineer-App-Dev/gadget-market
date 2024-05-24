import { Box, Container, VStack, Text, Image, Heading, Button, Flex, Link, HStack, SimpleGrid } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="blue.800" color="white" py={4}>
        <Container maxW="container.xl" display="flex" justifyContent="space-between" alignItems="center">
          <Heading as="h1" size="lg">
            <RouterLink to="/">ElectroShop</RouterLink>
          </Heading>
          <HStack spacing={8}>
            <Link as={RouterLink} to="/" fontSize="lg">Home</Link>
            <Link as={RouterLink} to="/products" fontSize="lg">Products</Link>
            <Link as={RouterLink} to="/about" fontSize="lg">About Us</Link>
            <Link as={RouterLink} to="/contact" fontSize="lg">Contact</Link>
          </HStack>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" py={20}>
        <Container maxW="container.xl" textAlign="center">
          <Heading as="h2" size="2xl" mb={4}>Welcome to ElectroShop</Heading>
          <Text fontSize="xl" mb={6}>Your one-stop shop for the latest electronics</Text>
          <Button colorScheme="blue" size="lg">Shop Now</Button>
        </Container>
      </Box>

      {/* Product Listing Section */}
      <Box as="section" py={20}>
        <Container maxW="container.xl">
          <Heading as="h3" size="xl" mb={8} textAlign="center">Featured Products</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/300" alt="Product 1" />
              <Box p={6}>
                <Heading as="h4" size="md" mb={2}>Product 1</Heading>
                <Text mb={4}>Description of Product 1</Text>
                <Button colorScheme="blue">View Details</Button>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/300" alt="Product 2" />
              <Box p={6}>
                <Heading as="h4" size="md" mb={2}>Product 2</Heading>
                <Text mb={4}>Description of Product 2</Text>
                <Button colorScheme="blue">View Details</Button>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/300" alt="Product 3" />
              <Box p={6}>
                <Heading as="h4" size="md" mb={2}>Product 3</Heading>
                <Text mb={4}>Description of Product 3</Text>
                <Button colorScheme="blue">View Details</Button>
              </Box>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" py={10}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} textAlign="center">
            <Box>
              <Heading as="h4" size="md" mb={4}>ElectroShop</Heading>
              <Text>© 2023 ElectroShop. All rights reserved.</Text>
            </Box>
            <Box>
              <Heading as="h4" size="md" mb={4}>Follow Us</Heading>
              <HStack spacing={4} justify="center">
                <Link href="#" isExternal><FaFacebook size="24px" /></Link>
                <Link href="#" isExternal><FaTwitter size="24px" /></Link>
                <Link href="#" isExternal><FaInstagram size="24px" /></Link>
              </HStack>
            </Box>
            <Box>
              <Heading as="h4" size="md" mb={4}>Contact Us</Heading>
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