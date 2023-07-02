import { Context } from '@/pages/api/graphql';

export const resolvers = {
  Query: {
    //get project by id
    project: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.project.findUnique({
        where: {
          id: args.id,
        },
        include: {
          columns: {
            include: {
              cards: true,
            },
          },
        },
      });
    },
    // Get all projects
    projects: async (_parent: any, _args: any, context: Context) => {
      return await context.prisma.project.findMany({});
    },
    // Get column by id
    column: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.column.findUnique({
        where: {
          id: args.id,
        },
        include: {
          cards: true,
        },
      });
    },
  },

  Mutation: {
    // Add novel
    addProject: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.project.create({
        data: {
          name: args.name,
        },
      });
    },
    // Update novel
    updateProject: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.project.update({
        where: {
          id: args.id,
        },
        data: {
          name: args.name,
        },
      });
    },

    // Delete novel
    deleteProject: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.project.delete({
        where: {
          id: args.id,
        },
      });
    },
    // Add column
    addColumn: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.column.create({
        data: {
          name: args.name,
          projectId: args.projectId,
        },
      });
    },
    // Update column
    updateColumn: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.column.update({
        where: {
          id: args.id,
        },
        data: {
          name: args.name,
        },
      });
    },

    // Delete column
    deleteColumn: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.column.delete({
        where: {
          id: args.id,
        },
      });
    },
    // Add card
    addCard: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.card.create({
        data: {
          name: args.name,
          columnId: args.columnId,
        },
      });
    },
    // update card
    updateCard: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.card.update({
        where: {
          id: args.id,
        },
        data: {
          name: args.name,
          columnId: args.columnId,
        },
      });
    },

    // delete card
    deleteCard: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.card.delete({
        where: {
          id: args.id,
        },
      });
    },
    // delete card
    clearColumnCards: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.card.deleteMany({
        where: {
          columnId: args.columnId,
        },
      });
    },
  },
};
