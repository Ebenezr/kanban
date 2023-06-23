import { Context } from '@/pages/api/graphql';

export const resolvers = {
  Query: {
    //get project by id
    project: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.project.findUnique({
        where: {
          id: args.id,
        },
      });
    },
    // get all projects
    projects: async (_parent: any, _args: any, context: Context) => {
      return await context.prisma.project.findMany({
        include: { Column: true },
      });
    },
  },

  Mutation: {
    // add novel
    addProject: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.project.create({
        data: {
          name: args.title,
        },
      });
    },
    // update novel
    updateProject: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.project.update({
        where: {
          id: args.id,
        },
        data: {
          name: args.title,
        },
      });
    },

    // delete novel
    deleteProject: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.project.delete({
        where: {
          id: args.id,
        },
      });
    },

    // Author Mutations

    // // add author
    // addAuthor: async (_parent: any, args: any, context: Context) => {
    //   return await context.prisma.author.create({
    //     data: {
    //       novelId: args.novelId,
    //       name: args.name,
    //     },
    //   });
    // },
    // // delete author
    // deleteAuthor: async (_parent: any, args: any, context: Context) => {
    //   return await context.prisma.author.delete({
    //     where: {
    //       id: args.id,
    //     },
    //   });
    // },
  },
};
