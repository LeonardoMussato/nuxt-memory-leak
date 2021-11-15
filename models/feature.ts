interface FeatureInterface {
  title: string;
  description?: string;
  image: string;
}

class Feature implements FeatureInterface {
  title: string;
  description?: string;
  image: string;

  constructor({ title, description, image }: FeatureInterface) {
    this.title = title;
    this.description = description;
    this.image = image;
  }
}

export default Feature;
