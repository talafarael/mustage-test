import { NotFoundException } from '@nestjs/common';

const FIXED_DATE = new Date('2025-01-01T12:00:00Z');
export const taskMockData = {
  create: {
    dto: {
      title: 'title',
      description: 'desc',
    },
    expected: {
      id: 'id',
      title: 'title',
      description: 'desc',
      done: false,
      createdAt: FIXED_DATE,
      updatedAt: FIXED_DATE,
    },
  },

  update: {
    dto: {
      title: 'Updated title',
    },
    targetId: 'id',
    expected: {
      id: 'id',
      title: 'Updated title',
      description: 'desc',
      done: false,
      createdAt: FIXED_DATE,
      updatedAt: FIXED_DATE,
    },
  },

  updateNotFound: {
    dto: {
      title: 'title',
      description: 'desc',
    },
    targetId: 'IdNotFound',
    error: new NotFoundException('Update task failed'),
  },

  delete: {
    targetId: 'id',
    expected: {
      id: 'id',
      title: 'Updated title',
      description: 'desc',
      done: false,
      createdAt: FIXED_DATE,
      updatedAt: FIXED_DATE,
    },
  },

  deleteNotFound: {
    targetId: 'IdNotFound',
    error: new NotFoundException('Delete task failed'),
  },
};
