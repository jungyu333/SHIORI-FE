'use client';

import type { IconProps } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import NextLink from 'next/link';
import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { colors } from '@/styles/theme/foundations/colors';
import { ComponentWithAs } from '@chakra-ui/icons';

interface Props {
  href: string;
  icon: ComponentWithAs<'svg', IconProps>;
  children: ReactNode;
}

export default function SideBarNavigationButton({ href, icon, children }: Props) {
  return (
    <LinkWrapper as={NextLink} href={href}>
      <Icon as={icon} boxSize={5} mr={2} />
      <Label>{children}</Label>
    </LinkWrapper>
  );
}

const LinkWrapper = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${colors.white};
  font-size: 1rem;

  &:hover {
    color: ${colors.black};
  }
`;

const Label = styled.div``;
