import Feature from "./feature";
interface ProductInterface {
  id: string;
  routingName: string;
  title: string;
  startedOn?: Date;
  endedOn?: Date;
  description: string;
  appStoreLink?: string;
  googlePlayLink?: string;
  externalUrl?: string;
  icon: string;
  features?: Feature[];
  imageGallery?: string[];
  visible: Boolean;
}

class Product implements ProductInterface {
  id: string;
  routingName: string;
  title: string;
  startedOn?: Date;
  endedOn?: Date;
  description: string;
  appStoreLink?: string;
  googlePlayLink?: string;
  externalUrl?: string;
  icon: string;
  features?: Feature[];
  imageGallery?: string[];
  visible: Boolean;
  constructor({
    id,
    routingName,
    title,
    startedOn,
    endedOn,
    description,
    appStoreLink,
    googlePlayLink,
    externalUrl,
    icon,
    features,
    imageGallery,
    visible,
  }: ProductInterface) {
    this.id = id;
    this.routingName = routingName;
    this.title = title;
    this.startedOn = startedOn;
    this.endedOn = endedOn;
    this.description = description;
    this.appStoreLink = appStoreLink;
    this.googlePlayLink = googlePlayLink;
    this.externalUrl = externalUrl;
    this.icon = icon;
    this.features = features;
    this.imageGallery = imageGallery;
    this.visible = visible;
  }
}
export default Product;
