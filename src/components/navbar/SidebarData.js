import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
  {
    title: 'Início',
    path: '#',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Sobre nós',
    path: '#about-us',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Produtos',
    path: '#products',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Serviços',
    path: '#services',
    icon: <MdIcons.MdMiscellaneousServices />,
    cName: 'nav-text'
  },
  {
    title: 'Contato',
    path: '#contact',
    icon: <AiIcons.AiTwotonePhone />,
    cName: 'nav-text'
  },
];