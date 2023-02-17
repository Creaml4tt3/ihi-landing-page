import { useEffect, useState } from "react";
export default function Picture({
  webp,
  normal,
  alt,
  classpic,
  classimg,
  lazy,
}) {
  const [lazyload, setLazyload] = useState(false);
  useEffect(() => {
    if (lazy) {
      setLazyload(true);
    }
  }, []);

  return (
    <>
      {!lazyload ? (
        <picture className={classpic}>
          <source className={classimg} srcSet={webp} />
          <img className={classimg} src={normal} alt={alt} />
        </picture>
      ) : (
        <picture className={classpic}>
          <source className={classimg} srcSet={webp} />
          <img className={classimg} src={normal} alt={alt} loading="lazy" />
        </picture>
      )}
    </>
  );
}
