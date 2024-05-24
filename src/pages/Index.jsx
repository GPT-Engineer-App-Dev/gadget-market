import { Box, Container, Flex, Heading, Text, VStack, Image, SimpleGrid, Link, Button } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          <RouterLink to="/">ElectroShop</RouterLink>
        </Heading>
        <Flex>
          <Link as={RouterLink} to="/" p={2} mx={2}>
            Home
          </Link>
          <Link as={RouterLink} to="/products" p={2} mx={2}>
            Products
          </Link>
          <Link as={RouterLink} to="/about" p={2} mx={2}>
            About Us
          </Link>
          <Link as={RouterLink} to="/contact" p={2} mx={2}>
            Contact
          </Link>
        </Flex>
      </Flex>

      {/* Hero Section */}
      <Box bg="gray.100" py={20} textAlign="center">
        <Heading as="h2" size="2xl" mb={4}>
          Welcome to ElectroShop
        </Heading>
        <Text fontSize="xl" mb={6}>
          Your one-stop shop for the latest electronics
        </Text>
        <Button colorScheme="blue" size="lg">
          Shop Now
        </Button>
      </Box>

      {/* Product Listing Section */}
      <Container maxW="container.lg" py={10}>
        <Heading as="h3" size="xl" mb={6} textAlign="center">
          Featured Products
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
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

      {/* Footer */}
      <Box bg="blue.800" color="white" py={10}>
        <Container maxW="container.lg">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box>
              <Heading as="h4" size="md" mb={4}>
                ElectroShop
              </Heading>
              <Text>© 2023 ElectroShop. All rights reserved.</Text>
            </Box>
            <Box>
              <Heading as="h4" size="md" mb={4}>
                Follow Us
              </Heading>
              <Flex>
                <Link href="https://facebook.com" isExternal mx={2}>
                  <FaFacebook size="24px" />
                </Link>
                <Link href="https://twitter.com" isExternal mx={2}>
                  <FaTwitter size="24px" />
                </Link>
                <Link href="https://instagram.com" isExternal mx={2}>
                  <FaInstagram size="24px" />
                </Link>
              </Flex>
            </Box>
            <Box>
              <Heading as="h4" size="md" mb={4}>
                Contact Us
              </Heading>
              <Text>Email: support@electroshop.com</Text>
              <Text>Phone: (123) 456-7890</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </Container>
  );
};

export default Index;