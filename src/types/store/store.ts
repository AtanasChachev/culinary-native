import { StoreTheme } from '@src/types/store/theme';
import { Authentication } from '@src/types/store/authentication';

export type StoreType = {
  authentication: Authentication,
  theme: StoreTheme;
};