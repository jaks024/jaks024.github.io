export interface ImageProps {
  src: string;
  alt: string;
}
export function ArtImage({ src, alt }: ImageProps) {
  return (
    <div className="art-image">
      <img src={src} alt={alt} />
    </div>
  );
}
