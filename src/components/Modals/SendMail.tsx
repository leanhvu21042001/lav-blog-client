import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const email = 'leanhvu21042001@gmail.com';

const SendMail: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [body, setBody] = useState('');
  const [subject, setSubject] = useState('');

  return (
    <>
      <Tooltip label="Send mail">
        <Button
          mt={5}
          backgroundColor="#BD6161"
          color="#fff"
          _hover={{
            background: 'white',
            color: 'teal.500',
          }}
          onClick={onOpen}
          size="lg"
          fontSize="1.6rem"
          padding="35px 40px"
          borderRadius="12px"
        >
          Contact me
        </Button>
      </Tooltip>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text textAlign="center" fontSize={25}>
              Contact me
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              mb={5}
              placeholder="Subject"
              onChange={({ target }) => setSubject(target.value)}
            />
            <Textarea
              placeholder="Here is a sample placeholder"
              onChange={({ target }) => setBody(target.value)}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>

            <Button colorScheme="green" color="white">
              <a href={`mailto:${email}?subject=${subject}&body=${body}`}>
                Click to Send an Email
              </a>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SendMail;
