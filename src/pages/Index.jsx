import { Box, Container, VStack, Text, Image, Heading, Button, SimpleGrid, Flex, Link } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="blue.800" color="white" p={4}>
        <Flex justify="space-between" align="center" maxW="container.lg" mx="auto">
          <Heading as="h1" size="lg">
            <RouterLink to="/">ElectroShop</RouterLink>
          </Heading>
          <Flex>
            <Button as={RouterLink} to="/" variant="link" color="white" mr={4}>
              Home
            </Button>
            <Button as={RouterLink} to="/products" variant="link" color="white" mr={4}>
              Products
            </Button>
            <Button as={RouterLink} to="/about" variant="link" color="white" mr={4}>
              About Us
            </Button>
            <Button as={RouterLink} to="/contact" variant="link" color="white">
              Contact
            </Button>
          </Flex>
        </Flex>
      </Box>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" py={20}>
        <Container maxW="container.lg">
          <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between">
            <Box flex="1" mb={{ base: 8, md: 0 }}>
              <Heading as="h2" size="xl" mb={4}>
                Featured Product: Ultra HD 4K TV
              </Heading>
              <Text fontSize="lg" mb={4}>
                Experience the best quality in home entertainment with our latest Ultra HD 4K TV. Perfect for movies, sports, and gaming.
              </Text>
              <Button colorScheme="blue" size="lg">
                Shop Now
              </Button>
            </Box>
            <Box flex="1" textAlign="center">
              <Image src="https://via.placeholder.com/400" alt="Featured Product" borderRadius="md" />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Product Listing Section */}
      <Box as="section" py={20}>
        <Container maxW="container.lg">
          <Heading as="h3" size="lg" mb={8} textAlign="center">
            Our Products
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/300" alt="Product 1" />
              <Box p={6}>
                <Heading as="h4" size="md" mb={2}>
                  Product 1
                </Heading>
                <Text mb={4}>Description of product 1.</Text>
                <Button colorScheme="blue">View Details</Button>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/300" alt="Product 2" />
              <Box p={6}>
                <Heading as="h4" size="md" mb={2}>
                  Product 2
                </Heading>
                <Text mb={4}>Description of product 2.</Text>
                <Button colorScheme="blue">View Details</Button>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/300" alt="Product 3" />
              <Box p={6}>
                <Heading as="h4" size="md" mb={2}>
                  Product 3
                </Heading>
                <Text mb={4}>Description of product 3.</Text>
                <Button colorScheme="blue">View Details</Button>
              </Box>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" py={10}>
        <Container maxW="container.lg">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box>
              <Heading as="h4" size="md" mb={4}>
                About Us
              </Heading>
              <Text>Learn more about our company and values.</Text>
            </Box>
            <Box>
              <Heading as="h4" size="md" mb={4}>
                Contact
              </Heading>
              <Text>Email: info@electroshop.com</Text>
              <Text>Phone: (123) 456-7890</Text>
            </Box>
            <Box>
              <Heading as="h4" size="md" mb={4}>
                Follow Us
              </Heading>
              <Flex>
                <Link href="https://facebook.com" isExternal mr={4}>
                  <FaFacebook size="24" />
                </Link>
                <Link href="https://twitter.com" isExternal mr={4}>
                  <FaTwitter size="24" />
                </Link>
                <Link href="https://instagram.com" isExternal>
                  <FaInstagram size="24" />
                </Link>
              </Flex>
            </Box>
          </SimpleGrid>
          <Text textAlign="center" mt={10}>
            &copy; {new Date().getFullYear()} ElectroShop. All rights reserved. | <Link href="#">Terms of Service</Link>
          </Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;