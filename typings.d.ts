import { Project, Column, Card } from '@prisma/client';

interface IProject extends Project {
  columns: Column[];
}
