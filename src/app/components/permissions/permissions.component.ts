import { Component, OnInit } from '@angular/core';
import { User } from 'types/user';

class Permission {
  id: string;
  name: string;
  description: string;
}

class Rol {
  id: string;
  name: string;
  description: string;
  icon: string;
  permissions: Array<string>;
}

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.less']
})
export class PermissionsComponent implements OnInit {
  permissions: Array<Permission> = [
    { id: 'heroes', name: 'heroes', description: 'Rol description' },
    { id: 'recipe', name: 'recipe', description: 'Rol description' },
    { id: 'santiago', name: 'santiago', description: 'Rol description' },
    { id: 'cards', name: 'cards', description: 'Rol description' },
    { id: 'dance', name: 'dance', description: 'Rol description' },
    { id: 'gep', name: 'gep', description: 'Rol description' }
  ];

  roles: Array<Rol> = [
    {
      id: 'editor',
      name: 'Editor',
      description: 'Rol description',
      icon: 'user',
      permissions: ['heroes', 'recipe', 'gep']
    },
    {
      id: 'gep',
      name: 'Admin GEP',
      description: 'Rol description',
      icon: 'heartbeat',
      permissions: ['gep']
    },
    {
      id: 'santiago',
      name: 'Santiago Admin',
      description: 'Rol description',
      icon: 'compass',
      permissions: ['santiago']
    }
  ];

  userRoles: Array<User> = [
    {
      uid: '1',
      photoURL: 'https://semantic-ui.com/images/avatar2/small/matthew.png',
      username: 'miguel.martin@googgle.com',
      email: 'miguel.martin@googgle.com',
      displayName: 'Miguel Martín',
      roles: ['gep']
    },
    {
      uid: '2',
      photoURL: 'https://semantic-ui.com/images/avatar2/small/lena.png',
      username: 'mj.moya@googgle.com',
      email: 'mj.moya@googgle.com',
      displayName: 'Maria José Moya',
      roles: ['editor']
    },
    {
      uid: '3',
      photoURL: 'https://semantic-ui.com/images/avatar2/small/mark.png',
      username: 'j.doe@googgle.com',
      email: 'j.doe@googgle.com',
      displayName: 'Jonh Doe',
      roles: ['editor', 'santiago']
    },
    {
      uid: '4',
      photoURL: 'https://semantic-ui.com/images/avatar2/small/lindsay.png',
      username: 'l.disney@googgle.com',
      email: 'l.disney@googgle.com',
      displayName: 'Linsay Disney',
      roles: ['santiago']
    }
  ];

  userXPermission: Array<User>;

  constructor() {
    this.userXPermission = this.getUserXPermission();
  }

  ngOnInit() {
    console.log('onOnit', this.getUserXPermission());
  }

  getUserXPermission = () => this.userRoles
    .map(uxr => ({ ...uxr, roles: uxr.roles }))
    .map(uxr => ({
      ...uxr,
      permissions: uxr.roles
        .reduce((acc, current) => {
          const permissions = this.roles.find(rol => rol.id === current).permissions;
          acc = [...acc, ...permissions];
          return acc;
        }, [])
      }))

  hasUserPermission = (uid: string, permission: string) => {
    const hasUser = this.userXPermission
       .filter(user => user.uid === uid)
       .filter(rol => rol.permissions.includes(permission));
    return hasUser.length > 0;
  }

  hasUserRol = (uid: string, rol: string) => {
    const hasUser = this.userRoles
       .filter(user => user.uid === uid)
       .filter(user => user.roles.includes(rol));
    return hasUser.length > 0;
  }

  hasRolPermission = (id: string, permission: string) => {
    const hasRol = this.roles
      .filter(rol => rol.id === id)
      .filter(rol => rol.permissions.includes(permission));
    return hasRol.length > 0;
  }

}
