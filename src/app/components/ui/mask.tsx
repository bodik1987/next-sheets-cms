export default function Mask() {
  return (
    <div
      className={`sticky top-0 inset-x-0 px-4 z-10 h-24 bg-neutral-200/50 dark:bg-transparent
      [background-image:radial-gradient(transparent_1px,rgb(229,229,229)_3px)]
      dark:[background-image:radial-gradient(transparent_1px,rgb(23,23,23)_2px)]
      [background-size:5px_5px] [backdrop-filter:blur(4px)]
      [mask:linear-gradient(rgb(229,229,229)_50%,rgba(229,229,229,0)_100%)] 
      dark:[mask:linear-gradient(rgb(30,30,30)_70%,rgba(30,30,30,0)_100%)] opacity-100`}
    />
  );
}
