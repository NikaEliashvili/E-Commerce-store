"use client";
import { TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Image as ImageType } from "@/types";
import Image from "next/image";
import GalleryTab from "./gallery-tab";

interface GalleryProps {
  images: ImageType[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <TabGroup as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6  w-full max-w-2xl sm:block lg:max-w-none">
        <TabList className="grid grid-cols-4 gap-6">
            {images.map((img)=>(
                <GalleryTab key={img.id} image={img} />
            ))}
        </TabList>
      </div>
      <TabPanels className="aspect-square w-full" >
            {images.map((img)=>(
                <TabPanel key={img.id} >
                    <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden " >
                        <Image 
                            fill
                            src={img.url}
                            alt="Image"
                            className="object-cover object-center"
                            />
                    </div>
                </TabPanel>
            ))}
      </TabPanels>
    </TabGroup>
  );
};

export default Gallery;
