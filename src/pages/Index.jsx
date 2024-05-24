import { Box, Container, Flex, Heading, Text, VStack, Image, SimpleGrid, Link, HStack, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} justify="space-between" align="center">
        <Heading size="lg">ElectroShop</Heading>
        <HStack spacing={8}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">Products</Link>
          <Link href="#" color="white">About Us</Link>
          <Link href="#" color="white">Contact</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" py={20} textAlign="center">
        <Heading size="2xl" mb={4}>Welcome to ElectroShop</Heading>
        <Text fontSize="xl" mb={8}>Your one-stop shop for the latest electronics</Text>
        <Image src="https://via.placeholder.com/800x400" alt="Featured Product" mx="auto" />
      </Box>

      {/* Product Listing Section */}
      <Box as="section" py={20}>
        <Heading size="xl" textAlign="center" mb={10}>Featured Products</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box bg="white" boxShadow="md" borderRadius="md" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Product 1" />
            <Box p={4}>
              <Heading size="md">Product 1</Heading>
              <Text mt={2}>Description of product 1.</Text>
              <Text mt={2} fontWeight="bold">$199.99</Text>
            </Box>
          </Box>
          <Box bg="white" boxShadow="md" borderRadius="md" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Product 2" />
            <Box p={4}>
              <Heading size="md">Product 2</Heading>
              <Text mt={2}>Description of product 2.</Text>
              <Text mt={2} fontWeight="bold">$299.99</Text>
            </Box>
          </Box>
          <Box bg="white" boxShadow="md" borderRadius="md" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Product 3" />
            <Box p={4}>
              <Heading size="md">Product 3</Heading>
              <Text mt={2}>Description of product 3.</Text>
              <Text mt={2} fontWeight="bold">$399.99</Text>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" py={10}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box>
              <Heading size="md" mb={4}>ElectroShop</Heading>
              <Text>© 2023 ElectroShop. All rights reserved.</Text>
            </Box>
            <Box>
              <Heading size="md" mb={4}>Contact Us</Heading>
              <Text>Email: support@electroshop.com</Text>
              <Text>Phone: (123) 456-7890</Text>
            </Box>
            <Box>
              <Heading size="md" mb={4}>Follow Us</Heading>
              <HStack spacing={4}>
                <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebook />} />
                <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
                <IconButton as="a" href="#" aria-label="Instagram" icon={<FaInstagram />} />
              </HStack>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </Container>
  );
};

export default Index;