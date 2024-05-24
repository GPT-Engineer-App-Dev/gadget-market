import { Box, Container, Flex, Heading, Text, VStack, Image, SimpleGrid, Link, HStack, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="blue.800" color="white" py={4}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg">ElectroShop</Heading>
            <HStack spacing={8}>
              <Link href="#">Home</Link>
              <Link href="#">Products</Link>
              <Link href="#">About Us</Link>
              <Link href="#">Contact</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box as="section" bg="blue.700" color="white" py={20}>
        <Container maxW="container.xl" textAlign="center">
          <Heading as="h2" size="2xl" mb={4}>Welcome to ElectroShop</Heading>
          <Text fontSize="xl" mb={8}>Your one-stop shop for the latest electronics</Text>
          <Image src="/images/featured-product.jpg" alt="Featured Product" mx="auto" boxSize="300px" />
        </Container>
      </Box>

      {/* Product Listing Section */}
      <Box as="section" py={20}>
        <Container maxW="container.xl">
          <Heading as="h3" size="xl" mb={8} textAlign="center">Our Products</Heading>
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
      </Box>

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
                <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebook />} />
                <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
                <IconButton as="a" href="#" aria-label="Instagram" icon={<FaInstagram />} />
              </HStack>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;