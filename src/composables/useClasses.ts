import { ParsedContent } from "@nuxt/content/dist/runtime/types";

export class ServiceQueryContent {

  static title: string;
  static description: string;
  static body: ParsedContent | undefined;
  static updatedAt: Number | undefined;

  constructor(title?: string, description?: string, body?: ParsedContent) {
    if (!title) throw new Error("title cannot be null", { cause: 'it did\'nt got an title' });
    if (!description) throw new Error("description cannot be null", { cause: 'it did\'nt got an description' });
    ServiceQueryContent.title = title;
    ServiceQueryContent.description = description;
    ServiceQueryContent.body = body;
  }
}

export class ServiceQueryPost extends ServiceQueryContent {
  static image: string
  constructor(title?: string, description?: string, body?: ParsedContent, image?: string) {
    super(title, description, body);
    if (!image) throw new Error("image cannot be null", { cause: 'it did\'nt got an image' });
    ServiceQueryPost.image = image;
  }
}