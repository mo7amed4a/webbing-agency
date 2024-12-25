export interface TeamType {
    id: number;
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: string | null;
    width: number;
    height: number;
    size: number;
    sizeInBytes: number;
    url: string;
    image: Image;
    technologies: Technology[]
    details: IntrinsicAttributes & BlocksRendererProps
  }
  
  export interface Image {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
      thumbnail: ImageFormat;
      small?: ImageFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: string | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  }
  
  export interface TechnologyLogo {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
      thumbnail: ImageFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: string | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  }
  
  export interface Technology {
    id: number;
    documentId: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    logo: TechnologyLogo[];
  }
  
  export interface DocumentDetails {
    type: string;
    children: {
      type: string;
      text: string;
    }[];
  }
  
  export interface Document {
    id: number;
    documentId: string;
    name: string;
    details: DocumentDetails[];
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    image: Image;
    technologies: Technology[];
  }
  
  const documentData: Document = {
    id: 9,
    documentId: "d08apejtvxpll91yitriqk3w",
    name: "Omar Sharnopy",
    details: [
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "wnefjinefjinweifn"
          }
        ]
      }
    ],
    createdAt: "2024-12-15T07:28:03.710Z",
    updatedAt: "2024-12-15T08:02:47.527Z",
    publishedAt: "2024-12-15T08:02:47.580Z",
    image: {
      id: 21,
      documentId: "wkjhvt6cvv2qccf6g4nyi3xw",
      name: "c9a1a4cbddbf52e02efbf627b68a7634.png",
      alternativeText: null,
      caption: null,
      width: 408,
      height: 612,
      formats: {
        thumbnail: {
          name: "thumbnail_c9a1a4cbddbf52e02efbf627b68a7634.png",
          hash: "thumbnail_c9a1a4cbddbf52e02efbf627b68a7634_04a5b66654",
          ext: ".png",
          mime: "image/png",
          path: null,
          width: 104,
          height: 156,
          size: 19.03,
          sizeInBytes: 19032,
          url: "/uploads/thumbnail_c9a1a4cbddbf52e02efbf627b68a7634_04a5b66654.png"
        },
        small: {
          name: "small_c9a1a4cbddbf52e02efbf627b68a7634.png",
          hash: "small_c9a1a4cbddbf52e02efbf627b68a7634_04a5b66654",
          ext: ".png",
          mime: "image/png",
          path: null,
          width: 333,
          height: 500,
          size: 143.77,
          sizeInBytes: 143770,
          url: "/uploads/small_c9a1a4cbddbf52e02efbf627b68a7634_04a5b66654.png"
        }
      },
      hash: "c9a1a4cbddbf52e02efbf627b68a7634_04a5b66654",
      ext: ".png",
      mime: "image/png",
      size: 62.45,
      url: "/uploads/c9a1a4cbddbf52e02efbf627b68a7634_04a5b66654.png",
      previewUrl: null,
      provider: "local",
      provider_metadata: null,
      createdAt: "2024-12-15T08:02:42.392Z",
      updatedAt: "2024-12-15T08:03:25.303Z",
      publishedAt: "2024-12-15T08:02:42.393Z"
    },
    technologies: [
      {
        id: 10,
        documentId: "h92qhk91umwzjxzm48gboc7u",
        name: "Dart",
        createdAt: "2024-12-15T07:27:47.834Z",
        updatedAt: "2024-12-15T07:27:47.834Z",
        publishedAt: "2024-12-15T07:27:47.860Z",
        logo: [
          {
            id: 13,
            documentId: "m0mmyl67v5xrp8lvq16olglx",
            name: "nest.png",
            alternativeText: null,
            caption: null,
            width: 300,
            height: 300,
            formats: {
              thumbnail: {
                name: "thumbnail_nest.png",
                hash: "thumbnail_nest_1e07b16063",
                ext: ".png",
                mime: "image/png",
                path: null,
                width: 156,
                height: 156,
                size: 6.6,
                sizeInBytes: 6602,
                url: "/uploads/thumbnail_nest_1e07b16063.png"
              }
            },
            hash: "nest_1e07b16063",
            ext: ".png",
            mime: "image/png",
            size: 2.94,
            url: "/uploads/nest_1e07b16063.png",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            createdAt: "2024-12-12T13:36:02.097Z",
            updatedAt: "2024-12-12T13:36:02.097Z",
            publishedAt: "2024-12-12T13:36:02.098Z"
          }
        ]
      }
    ]
  };
  