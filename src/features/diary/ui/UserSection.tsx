'use client';

import { Avatar, Box, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { colors } from '@/styles/theme/foundations/colors';
import { ChevronDownIcon } from '@chakra-ui/icons';

interface Props {
  email: string;
  onProfile: () => void;
  logout: {
    handle: () => void;
    isLoading: boolean;
  };
}

export default function UserSection({ email, logout, onProfile }: Props) {
  return (
    <Wrapper>
      <Menu>
        <MenuButton as={ButtonWrapper}>
          <Avatar size="xs" name={email} />
          <UserEmail>{email}</UserEmail>
          <ChevronDownIcon />
        </MenuButton>

        <MenuList color="black">
          <MenuItem fontSize={'sm'} onClick={onProfile}>
            Profile
          </MenuItem>
          <MenuItem fontSize={'sm'} onClick={logout.handle} disabled={logout.isLoading}>
            Logout
          </MenuItem>
        </MenuList>
      </Menu>
    </Wrapper>
  );
}

const Wrapper = styled(Box)`
  position: absolute;
  bottom: 24px;
  left: 5px;
  right: 5px;
`;

const ButtonWrapper = styled(Box)`
  border: 1px solid ${colors.grey['200']};
  border-radius: 8px;
  padding: 8px 12px;
  width: 100%;
  background-color: ${colors.white};
  color: ${colors.black};
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  :hover {
    color: ${colors.primary['500']};
  }

  & > span {
    display: flex;
    align-items: center;
  }
`;

const UserEmail = styled(Text)`
  font-size: 0.875rem;
  margin-left: 8px;
  flex-grow: 1;
`;
