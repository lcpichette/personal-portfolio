import type { Asset } from './asset.model';

export interface Project {
  title: string;
  description: string;
  link: string;
  previewImage: Asset;
}