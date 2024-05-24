import { Box, Container, Flex, Heading, Text, VStack, Image, SimpleGrid, Link, HStack, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" padding={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          <RouterLink to="/">ElectroShop</RouterLink>
        </Heading>
        <HStack spacing={8}>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/products">Products</RouterLink>
          <RouterLink to="/about">About Us</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" padding={10} textAlign="center">
        <Heading as="h2" size="xl" mb={4}>Welcome to ElectroShop</Heading>
        <Text fontSize="lg" mb={6}>Your one-stop shop for the latest electronics</Text>
        <Image src="/images/featured-product.jpg" alt="Featured Product" borderRadius="md" />
      </Box>

      {/* Product Listing Section */}
      <Container maxW="container.xl" py={10}>
        <Heading as="h3" size="lg" mb={6}>Featured Products</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="/images/product1.jpg" alt="Product 1" />
            <Box p={6}>
              <Heading as="h4" size="md" mb={2}>Product 1</Heading>
              <Text>$299.99</Text>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="/images/product2.jpg" alt="Product 2" />
            <Box p={6}>
              <Heading as="h4" size="md" mb={2}>Product 2</Heading>
              <Text>$399.99</Text>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="/images/product3.jpg" alt="Product 3" />
            <Box p={6}>
              <Heading as="h4" size="md" mb={2}>Product 3</Heading>
              <Text>$499.99</Text>
            </Box>
          </Box>
        </SimpleGrid>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" py={10}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box>
              <Heading as="h4" size="md" mb={4}>ElectroShop</Heading>
              <Text>© 2023 ElectroShop. All rights reserved.</Text>
            </Box>
            <Box>
              <Heading as="h4" size="md" mb={4}>Contact Us</Heading>
              <Text>Email: support@electroshop.com</Text>
              <Text>Phone: (123) 456-7890</Text>
            </Box>
            <Box>
              <Heading as="h4" size="md" mb={4}>Follow Us</Heading>
              <HStack spacing={4}>
                <IconButton as="a" href="https://facebook.com" aria-label="Facebook" icon={<FaFacebook />} />
                <IconButton as="a" href="https://twitter.com" aria-label="Twitter" icon={<FaTwitter />} />
                <IconButton as="a" href="https://instagram.com" aria-label="Instagram" icon={<FaInstagram />} />
              </HStack>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;