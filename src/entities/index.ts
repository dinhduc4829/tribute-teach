/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: tributeslides
 * Interface for TributeSlides
 */
export interface TributeSlides {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType number */
  slideNumber?: number;
  /** @wixFieldType text */
  title?: string;
  /** @wixFieldType text */
  subtitle?: string;
  /** @wixFieldType text */
  content?: string;
  /** @wixFieldType image */
  slideImage?: string;
  /** @wixFieldType text */
  imageAltText?: string;
}
