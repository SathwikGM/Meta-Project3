import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";



const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack backgroundColor='white' borderRadius={10} align='left' >
      <Image borderRadius={10} src={imageSrc} />
      <Heading color='black' p={2}>{title}</Heading>
      <Text color='grey' p={2}>{description}</Text>
      <Text color='black' p={2}>See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
    </VStack>
  );
};

export default Card;
