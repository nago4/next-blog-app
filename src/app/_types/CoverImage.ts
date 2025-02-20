export type CoverImage = {
  filter(
    arg0: (coverImage: {
      url:
        | import("react").Key
        | import("next/dist/shared/lib/get-img-props").StaticImport
        | null
        | undefined;
    }) => boolean
  ): unknown;
  map(
    arg0: (coverImage: {
      url:
        | import("react").Key
        | import("next/dist/shared/lib/get-img-props").StaticImport
        | null
        | undefined;
      width: string | number | undefined;
      height: string | number | undefined;
    }) => import("react").JSX.Element
  ): import("react").ReactNode;
  url: string;
  width: number;
  height: number;
};
